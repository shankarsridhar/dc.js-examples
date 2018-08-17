import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    this._super(...arguments);
    return this.store.findAll('customer-payment');
  },

  setupController(controller, resolvedModel) {
    this._super(...arguments);
    controller.set('payments', resolvedModel.toArray());
  }
});
