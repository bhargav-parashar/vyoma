import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { removeItem, updateQty } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import useSnackbar from "../../hooks/useSnackbar";
import { useNavigate } from "react-router-dom";

const CartCard = ({ item }) => {
  const imageSrc = `/assets/${item.image}`;
  const dispatch = useDispatch();
  const { showSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleRemoveItem = (e, id) => {
    e.stopPropagation();
    dispatch(removeItem(id));
    showSnackbar("Removed item from bag", 3000, "success");
  };

  const handleIncreaseQty = (e, id) => {
    e.stopPropagation();
    const payload = { itemId: id, delta: 1 };
    dispatch(updateQty(payload));
  };

  const handleDecreaseQty = (e,id) => {
    e.stopPropagation();
    const payload = { itemId: id, delta: -1 };
    if (item.quantity > 1){
      dispatch(updateQty(payload));
    }
    else{
       dispatch(removeItem(id));
       showSnackbar("Removed item from bag", 3000, "success");
    }
  };
  
  const handleItemClick = () =>{
     navigate(`/${item.section}/${item.id}`);
  }

  return (
    <div
      className=" w-[100%]  sm:h-30 md:h-40 flex relative bg-white dark:bg-gray-600 rounded my-2 border border-gray-300 dark:border-gray-600 cursor-pointer"
      onClick={() => handleItemClick()}
    >
      <div className=" w-3/12 p-2">
        <img alt="product" src={imageSrc} className="h-[100%]" />
      </div>
      <div className=" w-9/12 p-2 dark:text-primary">
        <p className="sm:text-xs md:text-sm font-bold">{item.brand}</p>
        <p className="sm:text-xs md:text-sm ">{item.name}</p>
        <p className="sm:text-xs md:text-sm text-gray-500 dark:text-gray-400">Sold by: RetailNet</p>
        <p className="sm:mt-1 md:mt-2 sm:text-xs md:text-sm font-bold">
          <span className="mr-2">{`Size: ${item.size}`}</span>
          <span className="pr-2">Qty: </span>
          <span>
            <button
              className="border w-5 rounded cursor-pointer"
              onClick={(e) => handleDecreaseQty(e,item.id)}
            >
              -
            </button>
          </span>
          <span className="px-2">{item.quantity}</span>
          <span>
            <button
              className="border w-5 rounded cursor-pointer"
              onClick={(e) => handleIncreaseQty(e, item.id)}
            >
              +
            </button>
          </span>
        </p>
        <p className="sm:mt-1 md:mt-2 sm:text-xs md:text-sm">
          <span className="font-semibold ">{`Rs. ${item.price.discounted}`}</span>
          <span className=" text-gray-600 dark:text-primary line-through ">{` Rs. ${item.price.original}`}</span>
          <span className=" text-orange-400 ">{` (${item.price.discount}% OFF)`}</span>
        </p>
        <p className="sm:mt-1 md:mt-2 sm:text-xs md:text-sm">7 days return available</p>
      </div>
      <div
        className="absolute top-2 right-3 flex items-center justify-center bg-gray-200 p-1 w-7 h-7 rounded-full cursor-pointer"
        onClick={(e) => handleRemoveItem(e, item.id)}
      >
        <XMarkIcon className="h-4 w-4 text-gray-700 " />
      </div>
    </div>
  );
};

export default CartCard;
