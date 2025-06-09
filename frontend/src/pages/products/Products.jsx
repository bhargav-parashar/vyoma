import { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import Header from "../../components/Header/Header";
import Filters from "../../components/Filters/Filters";
import Pill from "../../components/Pill/Pill";
import SortHover from "../../components/SortHover/SortHover";
import allProducts from "../../constants/products.json";
import CategoryModal from "../../components/CategoryModal/CategoryModal";


const Products = ({section="men"}) => {
  const [products, setProducts] = useState(allProducts[`${section}`]);
  const [filteredProducts, setFilteredProducts] = useState(
    allProducts[`${section}`]
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState(-1);

  const handleMouseEnter = (tab) => {
    setIsModalOpen(true);
    setHoveredTab(tab);
  };
  const handleMouseLeave = () => {
    setIsModalOpen(false);
    setHoveredTab(-1);
  };

  return (
    <div className="h-screen flex flex-col overflow-y-auto bg-gray-50">
      <Header
        setIsModalOpen={setIsModalOpen}
        setHoveredTab={setHoveredTab}
        hoveredTab={hoveredTab}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />

      <div className="mt-20 px-[5%] flex  overflow-hidden z-10 w-[100%]  h-screen overflow-y-auto ">
        <aside className="w-1/6 h-screen border-r border-gray-300 ">
          <div className="h-13 ">
            <h2 className="text-sm font-bold  p-4 ">FILTERS</h2>
          </div>
          <Filters
            products={products}
            setFilteredProducts={setFilteredProducts}
          />
        </aside>

        <main className="w-5/6 h-cover">
          <div className="h-13 flex justify-start items-center gap-1 px-4 ">
            <div className="flex justify-start w-[100%]">
              <Pill label="Country of Origin" />
              <Pill label="Size" />
            </div>
            <SortHover />
          </div>
          <div class="grid grid-cols-[repeat(auto-fit,_minmax(200px,200px))] gap-7 p-4  ">
            {filteredProducts.map((item) => (
              <div key={item.id}>
                <ProductCard item={item} />
              </div>
            ))}
          </div>
        </main>
      </div>
      {isModalOpen && <CategoryModal hoveredTab={hoveredTab} handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter} setModsetIsModalOpenalOpen={setIsModalOpen} />}
      
    </div>
  );
};

export default Products;
