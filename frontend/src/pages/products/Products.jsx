import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import Header from "../../components/Header/Header";

const Products = () => {
  const items = [
    {
      id: 1,
      name: "product 5",
    },
    {
      id: 2,
      name: "product 5",
    },
    {
      id: 3,
      name: "product 5",
    },
    {
      id: 4,
      name: "product 5",
    },
    {
      id: 5,
      name: "product 5",
    },
    {
      id: 6,
      name: "product 5",
    },
    {
      id: 7,
      name: "product 5",
    },
    {
      id: 8,
      name: "product 5",
    },
    {
      id: 9,
      name: "product 5",
    },
    {
      id: 10,
      name: "product 5",
    },
  ];
  return (
    <div className="h-screen flex flex-col">
      <Header/>
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
          <div className="flex flex-wrap gap-4">
            {items.map((item) => (
              <div key={item.id}>
                <ProductCard />
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Products;
