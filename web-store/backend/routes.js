const express = require("express");
const Product = require("./models/product"); // new
// const insertProduct = require("./models/product"); // new
const router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


const insertProduct = product => {
  const newProduct = new Product({
    productName: product.productName,
    price: Number(product.price),
    image: product.img
  })
  newProduct.save(function (err, doc) {
    console.log(doc._id)
  })
}

// Get all posts
router.get("/products", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});


router.get("/ping", async (req, res) => {
  res.send("pong");
});

router.post("/product",async (request, response) => {
  await insertProduct(request.body.data)
  response.send(request.body.data);
});

module.exports = router;
