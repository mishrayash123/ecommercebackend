import express from 'express';

import {createorders ,getproductById,getorders,deleteordersById} from '../db/orders.js';
import {UserModel} from "../db/orders.js"

export const addtoorders = async (req, res) => {
    try {
      const {userid,date,orderid,products} = req.body;
      if (!userid) {
        return res.sendStatus(400);
      }

      const existingcart = await getproductById(orderid);
  
    if (existingcart) {
      return res.sendStatus(400);
    }

      const user  = await createorders({
      products,
        userid,
        date,
        orderid,
      });
      return res.status(200).json(user).end();
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }

  export  const getordersfull = async (req, res) => {
    try {
      const users  = await getorders();
  
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  };

  export  const deleteorders = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedUser = await deleteordersById(id);
  
      return res.json(deletedUser);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }


  export const updateorder = async (req, res) => {
    try {
      const { id } = req.params;
      const  data  = req.body;
      const updatedItem = await UserModel.findByIdAndUpdate(id.trim(), data, {
        new: true,
      });
  
      if (!updatedItem) {
        return res.status(404).json({ message: 'Item not found' });
      }
  
      return res.json(updatedItem);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }
