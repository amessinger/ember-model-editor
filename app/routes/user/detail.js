import Route from '@ember/routing/route';

export default Route.extend({
  model({ id }) {
    return this.get('store').peekRecord('user', id);
  }
});
