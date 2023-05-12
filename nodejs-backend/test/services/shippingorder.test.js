const assert = require('assert');
const app = require('../../src/app');

describe('\'shippingorder\' service', () => {
  it('registered the service', () => {
    const service = app.service('shippingorder');

    assert.ok(service, 'Registered the service (shippingorder)');
  });
});
