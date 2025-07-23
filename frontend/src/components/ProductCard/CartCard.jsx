import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { removeItem } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const CartCard = ({ item }) => {
  const imageSrc = `/assets/${item.image}`;
  const dispatch = useDispatch();
  
  const handleRemoveItem = (id) =>{
    dispatch(removeItem(id));
  }
  return (
    <div className=" w-[100] h-40 flex relative bg-white rounded my-2">
      <div className=" w-3/12 p-2">
        <img alt="product" src={imageSrc} className="h-[100%]" />
      </div>
      <div className=" w-9/12 p-2">
        <p className="text-sm font-bold">{item.brand}</p>
        <p className="text-sm ">{item.name}</p>
        <p className="text-sm text-gray-500">Sold by: RetailNet</p>
        <p className="mt-2 text-sm font-bold">
          <span className="mr-2">Size: S</span>
          <span>Qty: - 1 + </span>
        </p>
        <p className="mt-2 text-sm">
          <span className="font-semibold ">{`Rs. ${item.price.discounted}`}</span>
          <span className=" text-gray-600 line-through ">{` Rs. ${item.price.original}`}</span>
          <span className=" text-orange-400 ">{` (${item.price.discount}% OFF)`}</span>
        </p>
        <p className="mt-2 text-sm ">7 days return available</p>
      </div>
      <div
        className="absolute top-2 right-3 flex items-center justify-center bg-gray-200 p-1 w-7 h-7 rounded-full cursor-pointer"
        onClick={() => handleRemoveItem(item.id)}
      >
        <XMarkIcon className="h-4 w-4 text-gray-700 " />
      </div>
    </div>
  );
};

export default CartCard;
