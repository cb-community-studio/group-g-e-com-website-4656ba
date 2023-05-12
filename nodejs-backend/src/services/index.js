const users = require("./users/users.service.js");
const products = require("./products/products.service.js");
const payment = require("./payment/payment.service.js");
const delivery = require("./delivery/delivery.service.js");
const shippingorder = require("./shippingorder/shippingorder.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(products);
  app.configure(payment);
  app.configure(delivery);
  app.configure(shippingorder);
  // ~cb-add-configure-service-name~
};
