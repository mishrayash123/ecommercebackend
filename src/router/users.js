import express from 'express';

import { getAllUsers, deleteUser, updateUser } from '../controllers/users.js';

export default (router) => {
  router.post('/users', getAllUsers);
  router.delete('/deleteuser/:id', deleteUser);
  router.patch('/updateusers/:id',  updateUser);
};
