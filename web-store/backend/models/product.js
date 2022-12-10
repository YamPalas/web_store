const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  _price: Number,
  _desc: String,
  _img: String,
});

const Product = mongoose.model("products", productSchema);
module.exports = Product;
