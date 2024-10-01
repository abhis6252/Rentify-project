import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import WishlistPage from "./Components/WishListPage/WishListPage";
import Products from "./Components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./Components/ProductDetail";
import SearchItems from "./Components/SearchItems";
import Cart from "./Components/Cart";
import { items } from "./Components/Data";
import LogInPage from "./Components/SignUp-LogIn/LogInPage";
import SignUpPage from "./Components/SignUp-LogIn/SignUpPage";
import HomePage from "./Components/HomePage/HomePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Components/Footer/Footer";
import About from "./Components/Footer/About";
import ContactUs from "./Components/ContactUs/ContactUs";
import TermsConditions from "./Components/TermsConditions/TermsConditions";

const App = () => {
  const [data, setData] = useState([...items]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]); // State for wishlist

  return (
    <>
      <Router>
        <Navbar cart={cart} setData={setData} />

        <Routes>
          <Route
            path="/wishlist"
            element={
              <WishlistPage
                wishlist={wishlist}
                setCart={setCart}
                setWishlist={setWishlist}
              />
            }
          />
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route
            path="/product"
            element={
              <Products
                cart={cart}
                setCart={setCart}
                items={data}
                wishlist={wishlist}
                setWishlist={setWishlist} // Pass wishlist and setWishlist here
              />
            }
          />
          <Route
            path="/product/:id"
            element={<ProductDetail cart={cart} setCart={setCart} />}
          />
          <Route
            path="/search/:term"
            element={<SearchItems cart={cart} setCart={setCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
