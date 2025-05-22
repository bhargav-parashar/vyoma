import React from "react";
import card from "../../assets/product-image.jpg";

const ProductCard = () => {
  return (
    <div className="hover:shadow-xl w-50 bg-white cursor-pointer">
      <img alt="product" src={card} />
      <div className="px-4 py-2">
        <p className="font-semibold">CULT</p>
        <p className="text-sm">Men Pure Cotton T-shirt</p>
        <p>
          <span className="font-semibold text-sm">Rs. 755</span>{" "}
          <span className=" text-gray-600 line-through text-xs">Rs. 1399</span>
          <span className=" text-orange-400 text-xs"> (46% OFF)</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
