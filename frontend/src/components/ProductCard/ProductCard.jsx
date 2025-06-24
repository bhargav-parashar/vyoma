import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const ProductCard = ({ item }) => {
  const imageSrc = new URL(`/src/assets/${item.images[0]}`, import.meta.url)
    .href;
  return (
    <div className="hover:shadow-xl w-[100%] h-[100%] bg-white cursor-pointer relative">
      <img alt="product" src={imageSrc} className="h-[77%]" />
      <div className="px-4 py-2">
        <p className="font-semibold">{item.brand}</p>
        <p className="text-sm">{item.name}</p>
        <p>
          <span className="font-semibold text-sm">{`Rs. ${item.price.discounted}`}</span>{" "}
          <span className=" text-gray-600 line-through text-xs">{`Rs. ${item.price.original}`}</span>
          <span className=" text-orange-400 text-xs">{` (${item.price.discount}% OFF)`}</span>
        </p>
        <div className="absolute bottom-22 left-3 flex items-center gap-1 bg-white p-1 w-[35%] rounded">
          <p className="text-xs flex items-center gap-1">
            {item.rating.average}
            <StarIcon className="h-3 w-3 text-emerald-700" />|{" "}
            {item.rating.count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
