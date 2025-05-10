import React from "react";

const Products = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex justify-between bg-pink-100 h-12 ">
        <p>Header</p>
        <p>Header</p>
      </div>
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-1/5 bg-gray-100 border-r">
          <h2 className="text-xl font-semibold  p-4 ">FILTERS</h2>
          <hr />
          <div className="p-4">
            <h3 className="text-sm font-semibold mb-4">CATEGORIES</h3>
            <div>
              <label className="inline-flex items-center text-sm">
                <input
                  type="radio"
                  name="option"
                  value="option1"
                  className="form-radio text-blue-600"
                />
                <span className="ml-2">Tshirts</span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center text-sm">
                <input
                  type="radio"
                  name="option"
                  value="option2"
                  className="form-radio text-blue-600"
                />
                <span className="ml-2">Lounge Tshirts</span>
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
