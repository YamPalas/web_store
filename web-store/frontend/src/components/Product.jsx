import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../style/ProducstList.css";

function Product({ pName, price, id, img, cart, updateCart }) {
  const [name, setName] = useState("");
  const addToCart = () => {
    updateCart([...cart, { name: name, price: price, key: id, amount: 0 }]);
  };

  useEffect(() => {
    setName(pName);
  }, [pName]);
  return (
    <div className="yamos">
      <Card>
        <Card.Img variant="top" src={img} />
        <hr />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{price}₪</Card.Text>
          <Button variant="success" onClick={addToCart}>
            Add me to cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;
