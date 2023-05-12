const { Shippingorder } = require('./shippingorder.class');
const createModel = require('../../models/shippingorder.model');
const hooks = require('./shippingorder.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/shippingorder', new Shippingorder(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('shippingorder');

  service.hooks(hooks);
};