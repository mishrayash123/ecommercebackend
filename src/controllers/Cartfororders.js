import express from 'express';

import { createCartfororders ,getcartfororders,getcartforordersByuserid,deleteCartforordersById,detetecart} from '../db/Cartfororders.js';


export const addtocartfororders = async (req, res) => {
  try {
    const { productid,
      title,
      color,
      gender,
      quantity,
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
    if (!productid || !userid) {
      return res.sendStatus(400);
    }

    const existingcart = await getcartforordersByuserid(title);

    if (existingcart) {
      return res.sendStatus(400);
    }

    const user  = await createCartfororders({
      productid,
title,
color,
gender,
quantity,
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

  export  const getCartfororders = async (req, res) => {
    try {
      const users  = await getcartfororders();
  
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  };

  export  const deleteCartfororders = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedUser = await deleteCartforordersById(id);
  
      return res.json(deletedUser);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }

  export  const deletecompletecart = async (req, res) => {
    try {
      const deletecart = await detetecart();
      return res.status(200).json(deletecart);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }