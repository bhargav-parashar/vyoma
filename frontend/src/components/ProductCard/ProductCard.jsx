import React from "react";
import card from "../../assets/product-image.jpg";

const ProductCard = () => {
  return (
    <div className="hover:shadow-xl  h-70 w-50 bg-pink-200 cursor-pointer ">
      <img alt="product" src={card} />
    </div>
  );
};

export default ProductCard;
