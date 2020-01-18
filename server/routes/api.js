const express = require('express');
const router = express.Router();
const axios = require('axios');
// Include BCrypt package here if you need to hash passwords
const bcrypt = require('bcryptjs');
const BCRYPT_SALT_ROUNDS = 12;

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://lenstalk2:lenstalk2@lenstalk-cam8l.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("lenstalk").collection("Category");
  const collection1 = client.db("lenstalk").collection("Accounts");
  const collection2 = client.db("lenstalk").collection("Products");
  const collection3 = client.db("lenstalk").collection("Orders");
  const collection4 = client.db("lenstalk").collection("Reviews");
 // perform actions on the collection object
 console.log("connected");
});

router.get('/getAllCategory', async function (req, res) {
  console.log('category');
  try{
    const results = await client.db('lenstalk').collection('Category').find({}).toArray();
    res.send(results);
  } catch(err){
    res.send(err)
  }
});

router.get('/getAllProduct', async function (req, res) {
  console.log('product');
  try{
    const results = await client.db('lenstalk').collection('Products').find({}).toArray();
    res.send(results);
  } catch(err){
    res.send(err)
  }
})

router.get('/getAllOrders', async function (req, res) {
  console.log('Orders');
  try{
    const results = await client.db('lenstalk').collection('Orders').find({}).toArray();
    res.send(results);
  } catch(err){
    res.send(err)
  }
})

router.get('/getCategoryProduct/:categoryName', async function (req, res) {
  try{
    const results = await client.db('lenstalk').collection('Products').find({category: req.params.categoryName}).toArray();
    res.send(results);
  } catch(err){
    res.send(err)
  }
})

router.get('/getAllReviews', async function (req, res) {
  console.log('Reviews');
  try{
    const results = await client.db('lenstalk').collection('Reviews').find({}).toArray();
    res.send(results);
  } catch(err){
    res.send(err)
  }
})

module.exports = router ; 
