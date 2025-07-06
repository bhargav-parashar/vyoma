import React from "react";

const SizeSelector = ({selectedProduct, selectedSize,handleSizeSelect }) => {
  return (
    <>
      <p className="py-2 font-semibold ">SELECT SIZE</p>
      <div className="flex flex-wrap gap-2 pt-1">
        {selectedProduct.size.map((size, idx) => (
          <div
            key={idx}
            className={`border ${
              size.toUpperCase() === selectedSize
                ? `border-red-400 `
                : `border-gray-400 hover:border-red-400`
            }  rounded-full sm:w-9 sm:h-9  2xl:w-12 2xl:h-12   flex items-center justify-center cursor-pointer`}
            onClick={() => handleSizeSelect(size.toUpperCase())}
          >
            <p
              className={` sm:text-xs 2xl:text-sm ${
                size.toUpperCase() === selectedSize
                  ? `text-rose-400 font-bold`
                  : ``
              }`}
            >
              {size.toUpperCase()}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SizeSelector;
