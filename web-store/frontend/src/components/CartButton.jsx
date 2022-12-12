import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../style/Cart.css";

function CartButton() {
  return (
    <div className="cart">
      <Link to={"/Payment"}>
        <Button variant="dark">
          <FaShoppingCart />
        </Button>
      </Link>
    </div>
  );
}

export default CartButton;
