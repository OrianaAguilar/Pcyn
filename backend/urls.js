// urls.js
import express from 'express';
import { PrismaClient } from './generated/prisma/index.js';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/products', async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

router.post('/products', async(req, res) => {
  const product = await prisma.product.create({
    data: {
      name: req.body.name,
      price: req.body.price
    }
  })
  console.log(product)
  res.status(201).json(product)
});

router.get('/products/:id', async (req, res) => {
  const id = req.params.id
  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(id)
    }

  })

  if(product == null){
    res.status(404)
  }

  res.json(product)

});

router.patch('/products/:id', async(req, res)=>{
  const id = req.params.id

  let data ={}
  const name= req.body.name
  const price= req.body.price

  if(name != null ){
    data["name"] = name
  }
  if(price != null ){
    data["price"] = parseInt(price)
  }

  const product = await prisma.product.update({
    where: {
        id: parseInt(id)
    },
    data: data
  })
  res.json(product)
});

router.delete('/products/:id' , async(req, res)=>{
  const id = req.params.id
  const deleteProduct = await prisma.product.delete({
    where: {
      id : parseInt(id)
    }
  })

  res.json(deleteProduct)
});

export default router;

