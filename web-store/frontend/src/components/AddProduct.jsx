import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useNavigate} from 'react-router-dom';
import { addProduct } from "../api";
import "../style/ProducstList.css";

function AddProduct({cart, updateCart}) {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [img, setImg] = useState("");

    const createProduct = (e) => {
        e.preventDefault();
        const newProduct = {productName: name, price: price, img:img}
        const res = addProduct(newProduct);
        updateCart([...cart])
        navigate('/');
      };

  return (
    <Card className="text-center">
    <Card.Body>
      <Card.Title>Add products to store</Card.Title>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text"  onChange={field => setName(field.target.value)} placeholder="Enter product name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text"  onChange={field => setPrice(field.target.value)} placeholder="Enter price" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" onChange={field => setImg(field.target.value)} placeholder="Enter image url" />
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