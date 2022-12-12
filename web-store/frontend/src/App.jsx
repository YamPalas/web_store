import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProductsList from "./components/ProductsList";
import CartButton from "./components/CartButton";
import CartPage from "./components/CartPage";
import products from "./data/products.json";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="App">
              <CartButton cart={cart} />
              <ProductsList list={products} cart={cart} updateCart={setCart} />
            </div>
          }
        ></Route>
        <Route
          exact
          path="/Payment"
          element={<CartPage cart={cart} updateCart={setCart} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
