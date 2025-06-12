import { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import Header from "../../components/Header/Header";
import Filters from "../../components/Filters/Filters";
import Pill from "../../components/PillsSection/Pill";
import SortHover from "../../components/SortHover/SortHover";
import allProducts from "../../constants/products.json";
import CategoryModal from "../../components/CategoryModal/CategoryModal";
import CountryList from "../../constants/countries.json";
import FilterSection from "../../components/PillsSection/FilterSection";
import SizeList from "../../constants/sizes.json";
import Pills from "../../constants/pills.json";

const Products = ({ section = "men" }) => {
  const [products, setProducts] = useState(allProducts[`${section}`]);
  const [filteredProducts, setFilteredProducts] = useState(
    allProducts[`${section}`]
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState(-1);

  const [selectedPill, setSelectedPill] = useState(-1);

  const handleMouseEnter = (tab) => {
    setIsModalOpen(true);
    setHoveredTab(tab);
  };
  const handleMouseLeave = () => {
    setIsModalOpen(false);
    setHoveredTab(-1);
  };
  const handlePillClick = (id) => {
    if (id === selectedPill) {
      setSelectedPill(-1);
    } else {
      setSelectedPill(id);
    }
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
            section={section}
          />
        </aside>

        <main className="w-5/6 h-cover">
          <div className="h-13 flex justify-start items-center gap-1 px-4">
            <div className="flex justify-start w-[100%]">
              {Pills.filterPills.map((pill) => (
                <Pill
                  itemKey={pill.id}
                  value={pill.value}
                  selectedPill={selectedPill}
                  handlePillClick={handlePillClick}
                />
              ))}
            </div>
            <SortHover />
          </div>
          {
            /* ORIGIN COUNTRY FILTER SECTION */
            selectedPill == 1 && (
              <div
                className="grid grid-cols-[repeat(auto-fit,_minmax(100px,100px))] py-2  px-4 gap-x-8 gap-y-1"
                style={{ boxShadow: "0 4px 4px -4px rgba(0, 0, 0, 0.2)" }}
              >
                {CountryList.originCountries.map((country) => (
                  <FilterSection
                    key={country.id}
                    itemKey={country.key}
                    value={country.value}
                  />
                ))}
              </div>
            )
          }
          {
            /* SIZE FILTER SECTION */
            selectedPill == 2 && (
              <div
                className="grid grid-cols-[repeat(auto-fit,_minmax(100px,100px))] py-2  px-4 gap-x-8 gap-y-1 shadow-b-lg"
                style={{ boxShadow: "0 4px 4px -4px rgba(0, 0, 0, 0.2)" }}
              >
                {SizeList.availableSizes.map((size) => (
                  <FilterSection
                    key={size.id}
                    itemKey={size.key}
                    value={size.value}
                  />
                ))}
              </div>
            )
          }

          <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,200px))] gap-7 p-4">
            {filteredProducts.map((item) => (
              <div key={item.id}>
                <ProductCard item={item} />
              </div>
            ))}
          </div>
        </main>
      </div>
      {isModalOpen && (
        <CategoryModal
          hoveredTab={hoveredTab}
          handleMouseLeave={handleMouseLeave}
          handleMouseEnter={handleMouseEnter}
          setModsetIsModalOpenalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default Products;
