import "./App.css";
import products from "./data/products.json";
import ProductsList from "./components/ProductsList";

function App() {
  return (
    <div className="App">
      <ProductsList list={products} />
    </div>
  );
}

export default App;
