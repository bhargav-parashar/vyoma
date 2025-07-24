import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard/ProductCard";
import CartCard from "../../components/ProductCard/CartCard";


const Cart1 = () => {
  const cartItems = useSelector((store) => store.cart.items);
 
  
  return (
    <div className=" pt-25 px-20 bg-gray-200 h-[100vh]">
      {cartItems.map((item) => (
       <CartCard item={item}/>
      ))}
    </div>
  );
};

export default Cart1;
