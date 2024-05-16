import express from 'express';

import { addtocartfororders,getCartfororders,deleteCartfororders,deletecompletecart } from '../controllers/Cartfororders.js';

export default (router) => {
  router.post('/addtocartfororders', addtocartfororders);
  router.get('/getCartfororders', getCartfororders);
  router.delete('/deleteCartfororders/:id', deleteCartfororders);
  router.delete('/deleteCart', deletecompletecart);
};