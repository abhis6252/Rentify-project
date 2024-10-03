import React, { useState } from "react";
import WishlistIcon from "./WishListPage/WishlistIcon";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { items, clouth, jewelry } from "./Data";
import { FaCartPlus } from "react-icons/fa";
import userAccount from "../assets/images/account.png";

const Navbar = ({ setData, cart }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filterByCategory = (category) => {
    // Check if category is for clothes or electronics
    const element = items.filter((product) => product.category === category);
    setData(element);
  };

  const filterByPrice = (price) => {
    const element = items.filter((product) => product.price >= price);
    setData(element);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };

  const handleUserLogIn = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const handlePriceChange = (e) => {
    const price = e.target.value;
    setSelectedPrice(price);
    filterByPrice(price);
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    if (
      category === "clothes" ||
      category === "laptops" ||
      category === "mobiles" ||
      category === "tablets"
    ) {
      filterByCategory(category); // Use existing function for filtering
    } else if (
      category === "jeans" ||
      category === "shirts" ||
      category === "t-shirts"
    ) {
      handleClouthCategoryChange(category); // Handle clothes category separately
    } else if (
      category === "necklaces" ||
      category === "earrings" ||
      category === "rings"
    ) {
      handleJewelryCategoryChange(category); // Handle jewelry category separately
    }
  };

  // New function to handle clothes category selection
  const handleClouthCategoryChange = (category) => {
    const element = clouth.filter((product) => product.category === category);
    setData(element);
  };

  // New function to handle jewelry category selection
  const handleJewelryCategoryChange = (category) => {
    const element = jewelry.filter((product) => product.category === category);
    setData(element);
  };

  return (
    <>
      <header className="sticky-top">
        <div className="nav-bar">
          <Link to={"/product"} className="brand">
            Rentify
          </Link>

          <form onSubmit={handleSubmit} className="search-bar">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="search products"
              className="bg-white"
            />
          </form>

          {/* Cart logo  */}
          <Link to={"/cart"} className="cart">
            <button
              type="button"
              style={{
                backgroundColor: "#8EACCD",
                color: "white",
                border: "none",
                borderRadius: "4px 4px",
                marginTop: "20px",
              }}
              className="position-relative"
            >
              <FaCartPlus style={{ fontSize: "2.5rem" }} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
          <Link to="/wishlist">
            <WishlistIcon />
          </Link>

          {/* User account icon */}
          <div className="login-div" onClick={handleUserLogIn}>
            <img className="login-img" src={userAccount} alt="user" />
          </div>
        </div>

        {/* Filters only on the home page */}
        {location.pathname === "/product" && (
          <div style={{ cursor: "pointer" }} className="nav-bar-wrapper">
            <div className="items">Filter by{" -> "}</div>
            <div onClick={() => setData(items)} className="items">
              All Products
            </div>

            {/* Clothes Dropdown */}
            <select
              value={selectedCategory}
              onChange={handleCategoryChange} // Use handleCategoryChange for clothes
              className="items"
              style={{
                backgroundColor: "#33321d",
                color: "white",
                borderRadius: "4px",
                padding: "10px",
                border: "none",
                cursor: "pointer",
                opacity: "0.5",
                fontWeight: "bold",
              }}
            >
              <option value="">Clothes</option>
              <option value="jeans">Jeans</option>
              <option value="shirts">Shirts</option>
              <option value="t-shirts">T-Shirts</option>
            </select>

            {/* Electronics Dropdown */}
            <select
              value={selectedCategory}
              onChange={handleCategoryChange} // Reusing the existing function
              className="items"
              style={{
                backgroundColor: "#33321d",
                color: "white",
                borderRadius: "4px",
                padding: "10px",
                border: "none",
                cursor: "pointer",
                opacity: "0.5",
                fontWeight: "bold",
              }}
            >
              <option value="">Electronics</option>
              <option value="laptops">Laptops</option>
              <option value="mobiles">Mobiles</option>
              <option value="tablets">Tablets</option>
            </select>

            {/* Jewelry Dropdown */}
            <select
              value={selectedCategory}
              onChange={handleCategoryChange} // Use handleCategoryChange for jewelry
              className="items"
              style={{
                backgroundColor: "#33321d",
                color: "white",
                borderRadius: "4px",
                padding: "10px",
                border: "none",
                cursor: "pointer",
                opacity: "0.5",
                fontWeight: "bold",
              }}
            >
              <option value="">Jewelry</option>
              <option value="necklaces">Necklaces</option>
              <option value="earrings">Earrings</option>
              <option value="rings">Rings</option>
            </select>

            {/* Price filter dropdown */}
            <select
              value={selectedPrice}
              onChange={handlePriceChange}
              className="items"
              style={{
                backgroundColor: "#33321d",
                color: "white",
                borderRadius: "4px",
                padding: "10px",
                border: "none",
                cursor: "pointer",
                opacity: "0.5",
                fontWeight: "bold",
              }}
            >
              <option
                value=""
                style={{ backgroundColor: "rgb(5, 41, 126)", color: "white" }}
              >
                Select Price
              </option>
              <option value="29999">{"₹ 30000"}</option>
              <option value="49999">{"₹ 40000"}</option>
              <option value="69999">{"₹ 69999"}</option>
              <option value="89999">{"₹ 89999"}</option>
            </select>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
