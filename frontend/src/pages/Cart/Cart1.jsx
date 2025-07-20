import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard/ProductCard';

const Cart1 = () => {
    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems);
  return (
      <div className=" pt-25 px-20 flex flex-wrap flex-row justify-between bg-gray-200">
      {/* {
     
      
      cartItems.map((item) => (
        <div key={item.id} className="w-50 my-2">
          {item.name}
        </div>
      ))} */}
    </div>
  )
}

export default Cart1
