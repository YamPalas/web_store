import axios from "axios";

export const getProducts = () => {
  return get("http://localhost:5001/products");
};

export const addProduct = () => {
  return post("http://localhost:5001/product");
};

export const get = (url) => {
  return axios.get(url);
};

export const post = (url) => {
  return axios.post(url);
};
