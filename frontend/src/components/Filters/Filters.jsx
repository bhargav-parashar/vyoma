import React from "react";

const Filters = () => {
  return (
    <div className="h-[100%] border-gray-300 border-r">
      <hr className="text-gray-300 " />
      <div className="p-4 ">
        <h3 className="text-xs font-bold mb-4">CATEGORIES</h3>
        <div>
          <label className="inline-flex items-center text-sm">
            <input className="cursor-pointer" type="checkbox" />
            <span className="ml-2 cursor-pointer">Tshirts</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center text-sm">
            <input className="cursor-pointer" type="checkbox" />
            <span className="ml-2 cursor-pointer">Lounge Tshirts</span>
          </label>
        </div>
      </div>
      <hr className="text-gray-300 " />
      <div className="p-4 ">
        <h3 className="text-xs font-bold mb-4">BRANDS</h3>
        <div>
          <label className="inline-flex items-center text-sm">
            <input className="cursor-pointer" type="checkbox" />
            <span className="ml-2 cursor-pointer">Allen Solly</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center text-sm">
            <input className="cursor-pointer" type="checkbox" />
            <span className="ml-2 cursor-pointer">ADIDAS</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center text-sm">
            <input className="cursor-pointer" type="checkbox" />
            <span className="ml-2 cursor-pointer">Blackberrys</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center text-sm">
            <input className="cursor-pointer" type="checkbox" />
            <span className="ml-2 cursor-pointer">Being Human</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center text-sm">
            <input className="cursor-pointer" type="checkbox" />
            <span className="ml-2 cursor-pointer">Cantabil</span>
          </label>
        </div>
      </div>
      <hr className="text-gray-300 " />
      <div className="p-4 ">
        <h3 className="text-xs font-bold mb-4">COLORS</h3>
        <div>
          <label className="inline-flex items-center text-sm">
            <input className="cursor-pointer" type="checkbox" />
            <span className="ml-2 cursor-pointer">Black</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center text-sm">
            <input className="cursor-pointer" type="checkbox" />
            <span className="ml-2 cursor-pointer">Blue</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center text-sm">
            <input className="cursor-pointer" type="checkbox" />
            <span className="ml-2 cursor-pointer">White</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center text-sm">
            <input className="cursor-pointer" type="checkbox" />
            <span className="ml-2 cursor-pointer">Green</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center text-sm">
            <input className="cursor-pointer" type="checkbox" />
            <span className="ml-2 cursor-pointer">Navy</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
