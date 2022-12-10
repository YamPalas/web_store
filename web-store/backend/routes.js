const express = require("express");
const Product = require("./models/product"); // new
const router = express.Router();

// Get all posts
router.get("/products", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

module.exports = router;
