import React from "react";

const WishlistPage = ({ wishlist, setCart, setWishlist }) => {
  // Function to add item to cart
  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
    setCart((prevCart) => [...prevCart, obj]);
  };

  // Function to remove item from wishlist
  const removeFromWishlist = (id) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="wishlist-container container my-5">
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No items in your wishlist.</p>
      ) : (
        <div className="row">
          {wishlist.map((item) => (
            <div className="col-lg-3 col-md-6 text-center" key={item.id}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={item.imgSrc}
                  className="card-img-top"
                  alt={item.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <button
                    className="btn btn-warning mx-1"
                    onClick={() =>
                      addToCart(
                        item.id,
                        item.price,
                        item.title,
                        item.description,
                        item.imgSrc
                      )
                    }
                  >
                    Add To Cart
                  </button>
                  <button
                    className="btn btn-danger mx-1"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
