import axios from "axios";

export const getProducts = () => {
  return get("http://localhost:5001/products");
};

export const addProduct = (product) => {
  return post("http://localhost:5001/product", product);
};

export const get = (url) => {
  return axios.get(url);
};

export const post = (url, body) => {
  return axios.post(url, {data: body});
};
