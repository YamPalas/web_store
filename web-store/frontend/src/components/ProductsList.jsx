import React, { useState, useEffect } from "react";
import Product from "./Product";
import CardGroup from "react-bootstrap/CardGroup";

function ProductsList({ list }) {
  const [cart, setCart] = useState([{ name: "Yamos", id: 100 }]);
  useEffect(() => {
    cart.map((item) => {
      console.log(`${item.name}:${item.id}`);
    });
  }, [cart]);

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
            updateCart={setCart}
          />
        );
      })}
    </CardGroup>
  );
}

export default ProductsList;
