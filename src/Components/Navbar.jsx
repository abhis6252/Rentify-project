import React, { useState } from "react";
import WishlistIcon from "./WishListPage/WishlistIcon";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { items } from "./Data";
import { FaCartPlus } from "react-icons/fa";
import userAccount from "../assets/images/account.png";
import LogInPage from "./SignUp-LogIn/LogInPage";

const Navbar = ({ setData, cart }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(""); // For price dropdown

  const filterByCategory = (category) => {
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
    setSelectedPrice(price); // Update selected price
    filterByPrice(price); // Call filter function with selected price
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
              className=" position-relative"
            >
              {/* Cart icon */}
              <FaCartPlus style={{ fontSize: "2.5rem" }} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
          <Link to="/wishlist">
            <WishlistIcon /> {/* Wishlist Icon component */}
          </Link>

          {/* User account icon */}
          <div className="login-div" onClick={handleUserLogIn}>
            <img className="login-img" src={userAccount} alt="user" />
          </div>
        </div>

        {/* Filters only on the home page */}
        {location.pathname === "/product" && (
          <div style={{ cursor: "pointer" }} className="nav-bar-wrapper">
            <div className="items">Filter by{"->"}</div>
            <div onClick={() => setData(items)} className="items">
              NO Filter
            </div>
            <div onClick={() => filterByCategory("mobiles")} className="items">
              Mobiles
            </div>
            <div onClick={() => filterByCategory("laptops")} className="items">
              Laptops
            </div>
            <div onClick={() => filterByCategory("tablets")} className="items">
              Tablets
            </div>

            {/* Price filter dropdown */}
            <select
              value={selectedPrice}
              onChange={handlePriceChange}
              className="items"
              style={{
                backgroundColor: "#33321d", // Background color
                color: "white", // Text color
                borderRadius: "4px", // Border radius for rounded corners
                padding: "10px", // Padding for better appearance
                border: "none", // Remove default border
                cursor: "pointer", // Cursor change on hover
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
