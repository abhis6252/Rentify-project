import React, { useEffect, useState } from "react";
import WishlistIcon from "./WishListPage/WishlistIcon";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { items, clouth, jewelry, womenClouth } from "./Data";
import { FaCartPlus } from "react-icons/fa";
import userAccount from "../assets/images/account.png";
import axios from "axios";

const Navbar = ({ setData, cart }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showSubcategory, setShowSubcategory] = useState(false);
  const [showWomenSubcategory, setShowWomenSubcategory] = useState(false);
  const [allCategory, setAllCategory] = useState([]);
  // Subcategories ke liye state
  const [allProducts, setAllProducts] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  // Filtered subcategories ke liye state
  const [filteredSubCategories, setFilteredSubCategories] = useState([]);

  const filterByCategory = (category) => {
    const element = clouth.filter((product) => product.category === category);
    setData(element);
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://localhost:7229/api/Category/GetAllCategory"
  //       );
  //       console.log(">>>>>>>>>>>>>>>>>>>response", response);
  //       setAllCategory(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  const getSubCategory = async (categoryId) => {
    const subcategoryResponse = await axios.get(
      `https://localhost:7229/api/SubCategory/${categoryId}`
    );
    setSubCategories(subcategoryResponse.data);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Categories ke liye API call
        const categoryResponse = await axios.get(
          "https://localhost:7229/api/Category/GetAllCategory"
        );
        setAllCategory(categoryResponse.data);

        // Subcategories ke liye API call
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
    getSubCategory(category);
    setSelectedCategory(category);
    setShowSubcategory(category === "men");
    setShowWomenSubcategory(category === "women");

    if (
      category === "clothes" ||
      category === "laptops" ||
      category === "mobiles" ||
      category === "tablets"
    ) {
      if (
        category === "laptops" ||
        category === "mobiles" ||
        category === "tablets"
      ) {
        filterByElectronicsCategory(category);
      } else {
        filterByCategory(category);
      }
    } else if (
      category === "jeans" ||
      category === "shirts" ||
      category === "t-shirts"
    ) {
      handleClouthCategoryChange(category);
    } else if (
      category === "necklaces" ||
      category === "earrings" ||
      category === "rings"
    ) {
      handleJewelryCategoryChange(category);
    }
  };

  const handleClouthCategoryChange = (category) => {
    const filteredItems = clouth.filter(
      (product) => product.category === category
    );
    setData(filteredItems);
  };

  const handleJewelryCategoryChange = (category) => {
    const element = jewelry.filter((product) => product.category === category);
    setData(element);
  };

  const handleWomenClouthCategoryChange = (category) => {
    const element = womenClouth.filter(
      (product) => product.category === category
    );
    setData(element);
  };

  // Electronics filter function
  const filterByElectronicsCategory = (category) => {
    const element = items.filter((product) => product.category === category);
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

          {/* Cart logo */}
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
            <select
              className="items"
              style={{
                padding: "10px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onChange={handleCategoryChange}
            >
              <option value="">Select Category</option>
              {allCategory.map((category) => {
                return (
                  <option value={category.categoryId}>
                    {category.categoryName}
                  </option>
                );
              })}
            </select>
            <div className="items">All Products</div>

            {/* Subcategory Dropdown for Men */}
            {showSubcategory && (
              <select
                className="items"
                onChange={(e) => handleClouthCategoryChange(e.target.value)}
                style={{
                  backgroundColor: "rgb(254, 249, 217)",
                  //color: "white",
                  borderRadius: "4px",
                  padding: "10px",
                  border: "none",
                  cursor: "pointer",
                  //opacity: "0.5",
                  fontWeight: "bold",
                }}
              >
                <option value="">Men's Subcategory</option>
                <option value="jeans">Jeans</option>
                <option value="shirts">Shirts</option>
                <option value="t-shirts">T-Shirts</option>
                <option value="shoes">Shoes</option>
              </select>
            )}

            {/* Subcategory Dropdown for Women */}
            {showWomenSubcategory && (
              <select
                className="items"
                onChange={(e) =>
                  handleWomenClouthCategoryChange(e.target.value)
                }
                style={{
                  backgroundColor: "rgb(254, 249, 217)",
                  //color: "white",
                  borderRadius: "4px",
                  padding: "10px",
                  border: "none",
                  cursor: "pointer",
                  //opacity: "0.5",
                  fontWeight: "bold",
                }}
              >
                <option value="">Women's Subcategory</option>
                <option value="sarees">Sarees</option>
                <option value="suit">Suit</option>
                <option value="top-kurties">Top-Kurties</option>
              </select>
            )}

            {/* Clothes Dropdown */}
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="items"
              style={{
                backgroundColor: "rgb(254, 249, 217)",
                // color: "white",
                borderRadius: "4px",
                padding: "10px",
                border: "none",
                cursor: "pointer",
                //opacity: "0.5",
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
              onChange={handleCategoryChange}
              className="items"
              style={{
                backgroundColor: "rgb(254, 249, 217)",
                //color: "white",
                borderRadius: "4px",
                padding: "10px",
                border: "none",
                cursor: "pointer",
                //opacity: "0.5",
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
              onChange={handleCategoryChange}
              className="items"
              style={{
                backgroundColor: "rgb(254, 249, 217)",
                //color: "white",
                borderRadius: "4px",
                padding: "10px",
                border: "none",
                cursor: "pointer",
                //opacity: "0.5",
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
                backgroundColor: "rgb(254, 249, 217)",
                //color: "white",
                borderRadius: "4px",
                padding: "10px",
                border: "none",
                cursor: "pointer",
                //opacity: "0.5",
                fontWeight: "bold",
              }}
            >
              <option value="">Select Price</option>
              <option value="500">500</option>
              <option value="1000">1000</option>
              <option value="1500">1500</option>
            </select>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
