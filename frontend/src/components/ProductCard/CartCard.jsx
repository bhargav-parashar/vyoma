import React from "react";

const CartCard = ({ item }) => {
  const imageSrc = `/assets/${item.image}`;

  return (
    <div className="border w-[100] h-40 flex">
      <div className="border w-3/12 p-2">
        <img alt="product" src={imageSrc} className="h-[100%]" />
      </div>
      <div className="border w-9/12">{item.name}</div>
    </div>
  );
};

export default CartCard;
