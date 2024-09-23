// import React, { useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { items } from "./Data";
// import { FaCartPlus } from "react-icons/fa";
// import userAccount from "../assets/images/account.png";
// import LogInPage from "./SignUp-LogIn/LogInPage";

// const Navbar = ({ setData, cart }) => {
//   // console.log(useLocation());
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState("");

//   const filterByCategory = (category) => {
//     const element = items.filter((product) => product.category === category);

//     setData(element);
//   };

//   const filterByPrice = (price) => {
//     const element = items.filter((product) => product.price >= price);
//     setData(element);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate(`/search/${searchTerm}`);
//     setSearchTerm("");
//   };

//   const handleUserLogIn = () => {
//     e.preventDefault();
//     navigate(`/LogInPage`);
//   };

//   return (
//     <>
//       <header className="sticky-top">
//         <div className="nav-bar">
//           <Link to={"/"} className="brand">
//             Rentify
//           </Link>

//           <form onSubmit={handleSubmit} className="search-bar">
//             <input
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               type="text"
//               placeholder="search products"
//               className="bg-white"
//             />
//           </form>
//           {/* Added Cart logo */}
//           <Link to={"/cart"} className="cart">
//             <button
//               type="button"
//               style={{
//                 backgroundColor: "purple",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "4px 4px",
//                 marginTop: "5px",
//               }}
//               className=" position-relative"
//             >
//               {/* cart icon add kiya */}
//               <FaCartPlus style={{ fontSize: "1.5rem" }} />
//               <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//                 {cart.length}
//                 <span className="visually-hidden">unread messages</span>
//               </span>
//             </button>
//           </Link>
//           <div className="login-div" onClick={handleUserLogIn}>
//             <img className="login-img" src={userAccount} alt="user" />
//           </div>
//         </div>

//         {location.pathname == "/" && (
//           <div style={{ cursor: "pointer" }} className="nav-bar-wrapper">
//             <div className="items">Filter by{"->"}</div>
//             <div onClick={() => setData(items)} className="items">
//               NO Filter
//             </div>
//             <div onClick={() => filterByCategory("mobiles")} className="items">
//               Mobiles
//             </div>
//             <div onClick={() => filterByCategory("laptops")} className="items">
//               Laptops
//             </div>
//             <div onClick={() => filterByCategory("tablets")} className="items">
//               Tablets
//             </div>

//             <div onClick={() => filterByPrice(29999)} className="items">
//               {">="}29999
//             </div>
//             <div onClick={() => filterByPrice(49999)} className="items">
//               {">="}49999
//             </div>
//             <div onClick={() => filterByPrice(69999)} className="items">
//               {">="}69999
//             </div>
//             <div onClick={() => filterByPrice(89999)} className="items">
//               {">="}89999
//             </div>
//           </div>
//         )}
//       </header>
//     </>
//   );
// };

// export default Navbar;

// NEW CODE......................................................................

import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { items } from "./Data";
import { FaCartPlus } from "react-icons/fa";
import userAccount from "../assets/images/account.png";
import LogInPage from "./SignUp-LogIn/LogInPage";

const Navbar = ({ setData, cart }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

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

  return (
    <>
      <header className="sticky-top">
        <div className="nav-bar">
          <Link to={"/"} className="brand">
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

          {/* User account icon */}
          <div className="login-div" onClick={handleUserLogIn}>
            <img className="login-img" src={userAccount} alt="user" />
          </div>
        </div>

        {/* Filters only on the home page */}
        {location.pathname === "/" && (
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

            <div onClick={() => filterByPrice(29999)} className="items">
              {">="}29999
            </div>
            <div onClick={() => filterByPrice(49999)} className="items">
              {">="}49999
            </div>
            <div onClick={() => filterByPrice(69999)} className="items">
              {">="}69999
            </div>
            <div onClick={() => filterByPrice(89999)} className="items">
              {">="}89999
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
