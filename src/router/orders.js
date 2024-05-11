import express from 'express';

import { addtoorders,deleteorders,getordersfull,updateorder } from '../controllers/orders.js';

export default (router) => {
  router.post('/addtoorders', addtoorders);
  router.get('/getorders', getordersfull);
  router.delete('/deleteorders/:id', deleteorders);
  router.patch('/updateorder/:id', updateorder);
};