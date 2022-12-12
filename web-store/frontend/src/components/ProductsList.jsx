import React, { useState, useEffect } from "react";
import Product from "./Product";
import CardGroup from "react-bootstrap/CardGroup";

function ProductsList({ list, cart, updateCart }) {
  return (
    <CardGroup>
      {list.map((product) => {
        return (
          <Product
            pName={product.productName}
            price={product.price}
            img={product.image}
            key={product.id}
            id={product.id}
            cart={cart}
            updateCart={updateCart}
          />
        );
      })}
    </CardGroup>
  );
}

export default ProductsList;
