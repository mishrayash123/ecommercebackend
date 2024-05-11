import express from 'express';

import {createproducts ,getproductsById,getproducts,deleteproductsById, getproductsByuserid} from '../db/products.js';

export const addtoproducts = async (req, res) => {
    try {
      const {title,details,color,gender,size,price,image1,image2,image3,image4,description,userid,category,subcategory,subcategory1} = req.body;
      if (!title) {
        return res.sendStatus(400);
      }

    //   const existingcart = await getproductsByuserid(title);
  
    // if (existingcart) {
    //   return res.sendStatus(400);
    // }

      const user  = await createproducts({
        title,
        details,
color,
gender,
size,
price,
image1,
image2,
image3,
image4,
description,
userid,
category,
subcategory,
subcategory1,
      });
      return res.status(200).json(user).end();
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }

  export  const getproductsfull = async (req, res) => {
    try {
      const users  = await getproducts();
  
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  };

  export  const deletproducts = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedUser = await deleteproductsById(id);
  
      return res.json(deletedUser);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }

  
