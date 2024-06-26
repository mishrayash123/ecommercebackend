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

        const products  = await getcart();

      if (!productid || !userid) {
        return res.sendStatus(400);
      }


      if(products.filter((e)=>(e.userid===userid)).filter((e)=>(e.productid===productid)).length>0){
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
