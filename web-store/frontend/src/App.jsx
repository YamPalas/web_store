import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProductsList from "./components/ProductsList";
import CartButton from "./components/CartButton";
import CartPage from "./components/CartPage";
import { getProducts } from "./api";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchMyApi() {
      const res = await getProducts();
      setProducts(res.data);
    }
    fetchMyApi();
  }, []);

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
