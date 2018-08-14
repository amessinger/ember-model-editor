import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  includeId: false,
  value: computed('model', 'includeId', function() {
    return JSON.stringify(this.model.serialize({ includeId: this.includeId }), null, 2);
  }),
  updateModel(payload) {
    let { modelName } = this.model.constructor;
    let serializer = this.store.serializerFor(modelName);

    // When serializing a record (that's is not embedded), it's 'id' is excluded
    // from the result by default (depending on includeId=false).
    // In this case we add it ourselves:
    if (!payload.id) {
      payload.id = this.model.id;
    }

    let resourceHash = serializer.normalize(this.store.modelFor(modelName), payload);
    this.store.push(resourceHash);
  },
  actions: {
    doUpdate() {
      let json = this.$('textarea').val();
      let payload = JSON.parse(json);

      this.updateModel(payload);
    }
  }
});
