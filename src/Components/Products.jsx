import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer/Footer";

const Products = ({ items, cart, setCart, wishlist, setWishlist }) => {
  const addToCart = (id, price, title, description, imgSrc) => {
    console.log("idofcart>", id);
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
    setCart([...cart, obj]);
    console.log("cart element =", cart);
    toast.success("Item added to cart!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const addToWishlist = (id, title, description, imgSrc) => {
    const obj = { id, title, description, imgSrc };

    // Check if item is already in the wishlist
    if (wishlist.find((item) => item.id === id)) {
      toast.error("Item is already in the wishlist!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return; // Prevent krega duplicate items add krne se
    }

    // Update wishlist
    setWishlist([...wishlist, obj]);
    toast.success("Item added to wishlist!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="container my-5">
        <div className="row">
          {items.map((product) => (
            <div className="col-lg-3 col-md-6 text-center" key={product.id}>
              <div className="card" style={{ width: "18rem" }}>
                <Link
                  to={`/product/${product.id}`}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={product.imgSrc}
                    className="card-img-top"
                    alt={product.title}
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <button className="btn btn-primary mx-3">
                    {product.price} ₹
                  </button>
                  <button
                    onClick={() =>
                      addToCart(
                        product.id,
                        product.price,
                        product.title,
                        product.description,
                        product.imgSrc
                      )
                    }
                    className="btn btn-warning"
                  >
                    Add To Cart
                  </button>
                  <br />
                  <br />
                  <button
                    onClick={() =>
                      addToWishlist(
                        product.id,
                        product.title,
                        product.description,
                        product.imgSrc
                      )
                    }
                    className="btn btn-danger"
                  >
                    Add To Wishlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
