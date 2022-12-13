const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  productName: String,
  price: Number,
  image: String
});

const Product = mongoose.model("products", productSchema);
module.exports = Product;

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