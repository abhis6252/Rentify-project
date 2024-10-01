import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Products from "./Products";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = ({ cart, setCart }) => {
  const { id } = useParams();
  const [product, setproduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const filterProducts = items.filter((product) => product.id == id);
    setproduct(filterProducts[0]);
    const relatedProducts = items.filter(
      (suman) => suman.category == product.category
    );
    setRelatedProducts(relatedProducts);
  }, [id, product.category]);

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
    toast.success("item added", {
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
      <div className="container con">
        <div className="img">
          <img src={product.imgSrc} alt="" />
        </div>
        <div className="text-center">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          {/* <ul>
            <li>
              <p className="card-text">{product.heighlight}</p>
            </li>
          </ul> */}
          <button className="btn btn-primary mx-3">{product.price} ₹</button>
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
        </div>
      </div>
      <h1 className="text-center">Related Products</h1>
      <Products cart={cart} setCart={setCart} items={relatedProducts} />
    </>
  );
};

export default ProductDetail;
