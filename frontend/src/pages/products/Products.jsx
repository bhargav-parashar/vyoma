import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import Header from "../../components/Header/Header";
import Filters from "../../components/Filters/Filters";
import Pill from "../../components/Pill/Pill";
import SortHover from "../../components/SortHover/SortHover";

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
    {
      id: 11,
      name: "product 5",
    },
    {
      id: 12,
      name: "product 5",
    },
    {
      id: 13,
      name: "product 5",
    },
  ];
  return (
    <div className="h-screen flex flex-col overflow-y-auto ">
      <Header />
      <div className="h-screen bg-gray-100 flex flex-col  items-center mt-20  ">
        <div className="flex  overflow-hidden z-10 max-w-400 h-[100%]  ">
          <aside className="w-1/6 ">
            <div className="h-13 ">
              <h2 className="text-sm font-bold  p-4 ">FILTERS</h2>
            </div>
            <Filters />
          </aside>

          <main className="w-5/6  ">
            <div className="h-13 flex justify-start items-center gap-1 px-4">
              <div className="flex justify-start w-[100%]" >
                <Pill label="Country of Origin" />
                <Pill label="Size" />
              </div>
              <SortHover />
            </div>
            <div className="flex flex-wrap gap-4  border-gray-300 border-t p-4">
              {items.map((item) => (
                <div key={item.id}>
                  <ProductCard />
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
