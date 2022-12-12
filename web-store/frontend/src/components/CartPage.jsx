import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { TiBackspaceOutline } from "react-icons/ti";

function CartPage({ cart, updateCart }) {
  const [sum, setSum] = useState(0);
  const removeMe = (id) => {
    const found = cart.find((product) => product.key === id);
    const index = cart.indexOf(found);
    cart.splice(index, 1);
    setSum(sum - found.price);
    // const newCart = cart.filter((product) => product.key !== id);
    updateCart([...cart]);
  };

  useEffect(() => {
    let currSum = 0;
    cart.map((product) => {
      currSum += product.price;
    });
    setSum(currSum);
  }, [sum]);

  return (
    <div>
      <h1 className="title">
        <Badge bg="secondary">Cart.</Badge>
      </h1>
      <Table striped hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>מוצר</th>
            <th>מחיר</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product, i) => {
            return (
              <tr>
                <td>{product.key}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={(e) => removeMe(product.key)}
                  >
                    <h6>
                      <TiBackspaceOutline />
                    </h6>
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <h2>Your bill is {sum}₪</h2>
    </div>
  );
}

export default CartPage;
