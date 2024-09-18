import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="nav-bar">
          <Link to={"/"} className="brand">
            Rentify
          </Link>
          <div className="search-bar">
            <input
              type="text"
              name=""
              id=""
              placeholder="search products"
              className="bg-white"
            />
          </div>
          <Link to={"/cart"} className="cart">
            Cart
          </Link>
        </div>
        <div className="nav-bar-wrapper">
          <div className="items">Filter by{"->"}</div>
          <div className="items">NO Filter</div>
          <div className="items">Mobile</div>
          <div className="items">Laptops</div>
          <div className="items">{">="}29999</div>
          <div className="items">{">="}49999</div>
          <div className="items">{">="}59999</div>
          <div className="items">{">="}39999</div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
