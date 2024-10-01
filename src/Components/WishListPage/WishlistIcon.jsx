import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const WishlistIcon = () => {
  const handleWishlistClick = () => {
    alert("Wishlist item clicked!");
  };

  return (
    <div
      onClick={handleWishlistClick}
      style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
    >
      <FontAwesomeIcon
        icon={faHeart}
        style={{
          height: "34px",
          width: "34px",
          marginTop: "25px",
          color: "red",
        }}
      />
      {/* <span>Wishlist</span> */}
    </div>
  );
};

export default WishlistIcon;
