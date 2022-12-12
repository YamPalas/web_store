const products = require("./data/products.json");
const express = require("express");
const Product = require("./models/product"); // new
const router = express.Router();
// Get all posts
router.get("/products2", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

// router.get("/mongo", async (req, res) => {
//   // const products = await Product.find();
//   res.send(products);
// });


router.get("/ping", async (req, res) => {
  res.send("pong");
});

router.post("/product", (request, response) => {
  //code to perform particular action.
  //To access POST variable use req.body()methods.
  console.log(request.body);
});

module.exports = router;
