import React from "react";

const Products = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex justify-between bg-pink-100 h-12 ">
        <p>Header</p>
        <p>Header</p>
      </div>
      <div className="flex flex-1 overflow-hidden ">
        <aside className="w-1/5 border-r border-gray-400 overflow-scroll">
          <h2 className="text-sm font-bold  p-4 ">FILTERS</h2>
          <hr className="text-gray-400 " />
          <div className="p-4">
            <h3 className="text-xs font-bold mb-4">CATEGORIES</h3>
            <div>
              <label className="inline-flex items-center text-sm">
                <input type="checkbox" />
                <span className="ml-2">Tshirts</span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center text-sm">
                <input type="checkbox" />
                <span className="ml-2">Lounge Tshirts</span>
              </label>
            </div>
          </div>
          <hr className="text-gray-400 " />
          <div className="p-4">
            <h3 className="text-xs font-bold mb-4">BRANDS</h3>
            <div>
              <label className="inline-flex items-center text-sm">
                <input type="checkbox" />
                <span className="ml-2">Allen Solly</span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center text-sm">
                <input type="checkbox" />
                <span className="ml-2">ADIDAS</span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center text-sm">
                <input type="checkbox" />
                <span className="ml-2">Blackberrys</span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center text-sm">
                <input type="checkbox" />
                <span className="ml-2">Being Human</span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center text-sm">
                <input type="checkbox" />
                <span className="ml-2">Cantabil</span>
              </label>
            </div>
          </div>
           <div className="p-4">
            <h3 className="text-xs font-bold mb-4">COLORS</h3>
            <div>
              <label className="inline-flex items-center text-sm">
                <input type="checkbox" />
                <span className="ml-2">Black</span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center text-sm">
                <input type="checkbox" />
                <span className="ml-2">Blue</span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center text-sm">
                <input type="checkbox" />
                <span className="ml-2">White</span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center text-sm">
                <input type="checkbox" />
                <span className="ml-2">Green</span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center text-sm">
                <input type="checkbox" />
                <span className="ml-2">Navy</span>
              </label>
            </div>
          </div>
        </aside>

        <main className="w-4/5 p-4 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">Products</h2>
        </main>
      </div>
    </div>
  );
};

export default Products;
