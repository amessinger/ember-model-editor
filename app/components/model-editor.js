import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  value: computed('model', function() {
    return JSON.stringify(this.model.serialize(), null, 2);
  }),
  actions: {
    doUpdate() {
      let { modelName } = this.model.constructor;
      let serializer = this.store.serializerFor(modelName);

      let json = this.$('textarea').val();
      let payload = JSON.parse(json);

      // id is not accessible to the user (and not included *by default* in serialize)
      // so we add it programmatically
      payload.id = this.model.id;

      let resourceHash = serializer.normalize(this.store.modelFor(modelName), payload);
      this.store.push(resourceHash);
    }
  }
});
