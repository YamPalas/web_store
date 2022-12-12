import React, {  } from "react";
import Button from "react-bootstrap/Button";
import { FaPlusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../style/Cart.css";

function NewProductButton() {
  return (
    <div className="newProduct">
      <Link to={"/AddProduct"}>
        <Button variant="warning">
            <h5>
                <FaPlusSquare />
            </h5>
        </Button>
      </Link>
    </div>
  );
}

export default NewProductButton;
