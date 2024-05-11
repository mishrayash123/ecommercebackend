import express from 'express';

import authentication from './authentication.js';
import users from './users.js';
import cart  from './cart.js';
import orders from './orders.js'
import products from './products.js';

const router = express.Router();

export default () => {
  authentication(router);
  users(router);
  cart(router);
  orders(router);
  products(router)
  return router;
};