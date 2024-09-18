import React from "react";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./Components/ProductDetail";
import SearchItems from "./Components/SearchItems";
import Cart from "./Components/Cart";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/search/:term" element={<SearchItems />} />
          <Route path="/product" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
