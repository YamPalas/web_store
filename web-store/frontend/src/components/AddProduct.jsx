import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import "../style/ProducstList.css";

function AddProduct() {
    const [product, setProduct] = useState({});
    const [name, setName] = useState({});
    const [price, setPrice] = useState({});
    const [img, setImg] = useState({});

    const createProduct = () => {
        const newProduct = {name: name, price: price, img:img}
        console.log(newProduct);
        setProduct(newProduct);

        // Send the object `product` to the Mongo
      };

  return (
    <Card className="text-center">
    {/* <Card.Header>Products Manager</Card.Header> */}
    <Card.Body>
      <Card.Title>Add products to store</Card.Title>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <Form.Label>Enter name</Form.Label> */}
        <Form.Control type="text"  onChange={field => setName(field.target.value)} placeholder="Enter product name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <Form.Label>Enter price</Form.Label> */}
        <Form.Control type="email"  onChange={field => setPrice(field.target.value)} placeholder="Enter price" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <Form.Label>Enter image url</Form.Label> */}
        <Form.Control type="email" onChange={field => setImg(field.target.value)} placeholder="Enter image url" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={createProduct}>
        Add Product
      </Button>
    </Form>
    </Card.Body>
  </Card>

  );
}

export default AddProduct;