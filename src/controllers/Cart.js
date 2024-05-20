import express from 'express';

import { createCart ,getcart,getcartByuserid,deleteCartById} from '../db/Cart.js';


export const addtocart = async (req, res) => {
    try {
      const { productid,
        title,
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
        details,} = req.body;

        console.log(productid,
          title,
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
          details)

      if (!productid || !userid) {
        return res.sendStatus(400);
      }

      const existingcart = await getcartByuserid(productid);
  
      if (existingcart) {
        return res.sendStatus(400);
      }

      const user  = await createCart({
        productid,
  title,
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
  details,
      });
      return res.status(200).json(user).end();
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }

  export  const getCart = async (req, res) => {
    try {
      const users  = await getcart();
  
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  };

  export  const deleteCart = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedUser = await deleteCartById(id);
  
      return res.json(deletedUser);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }
