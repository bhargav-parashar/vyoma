import React from "react";

const Products = () => {
  return (
    <div>
      <div className="flex justify-between bg-pink-100">
        <p>Header</p>
        <p>Header</p>
      </div>
      <div className="h-screen flex">
        <aside className="w-1/4 bg-gray-100 p-4 border-r">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>
        </aside>

        <main className="w-3/4 p-4 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">Products</h2>
        </main>
      </div>
    </div>
  );
};

export default Products;
