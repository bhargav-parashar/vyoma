import ProductCard from "../../components/ProductCard/ProductCard";
import Filters from "../../components/Filters/Filters";
import Pill from "../../components/PillsSection/Pill";
import SortHover from "../../components/SortHover/SortHover";
import CategoryModal from "../../components/CategoryModal/CategoryModal";
import CountryList from "../../constants/countries.json";
import FilterSection from "../../components/PillsSection/FilterSection";
import SizeList from "../../constants/sizes.json";
import Pills from "../../constants/pills.json";
import usePill from "../../hooks/usePill";
import useApplyFilter from "../../hooks/useApplyFilter";
import { useContext } from "react";
import { FilterContext } from "../../contexts/FiltersContext";
import { InboxIcon } from "@heroicons/react/24/outline";
import SortFilterFooter from "../../components/SortFilterFooter/SortFilterFooter";

const ProductsPage = () => {
  //GET CONTEXT VARIABLES
  const {
    section,
    search,
    productsFilters,
    setProductsFilters,
    hoveredTab,
    setIsModalOpen,
    handleMouseEnter,
    handleMouseLeave,
    isModalOpen,
    clearFilters,
  } = useContext(FilterContext);

  //APPLY FILTERS
  const {
    products,
    filteredProducts,
    setFilteredProducts,
    updateParams,
    sortBy,
    handleSort,
  } = useApplyFilter({ section, productsFilters, setProductsFilters, search });

  //HANDLE PILLS SECTION
  const { selectedPill, handlePillClick } = usePill();

  return (
    <div className="h-screen flex flex-col overflow-y-auto bg-gray-200">
      <div className="sm:mt-28 md:mt-20 sm:px-[1%] md:px-[5%] flex  overflow-hidden z-10 w-[100%]  h-screen overflow-y-auto ">
        <aside className=" sm:hidden md:block w-1/6 h-screen border-r border-gray-300 ">
          <div className="h-13 flex justify-between">
            <h2 className="text-sm font-bold  p-4 ">FILTERS</h2>
            {(productsFilters.category.length > 0 ||
              productsFilters.brand.length > 0 ||
              productsFilters.color.length > 0 ||
              productsFilters.origin.length > 0 ||
              productsFilters.size.length > 0) && (
              <h2
                className="text-xs font-bold p-4 cursor-pointer text-red-400"
                onClick={() => clearFilters()}
              >
                CLEAR ALL
              </h2>
            )}
          </div>
          <Filters
            products={products}
            setFilteredProducts={setFilteredProducts}
            section={section}
            productsFilters={productsFilters}
            updateParams={updateParams}
          />
        </aside>

        <main className=" sm:w-6/6 md:w-5/6 h-cover">
          <div className="h-13 flex justify-start items-center gap-1 px-4">
            <div className="flex justify-start w-[100%] gap-2">
              {Pills.filterPills.map((pill) => (
                <Pill
                  key={pill.id}
                  itemKey={pill.id}
                  value={pill.value}
                  selectedPill={selectedPill}
                  handlePillClick={handlePillClick}
                />
              ))}
            </div>
            <SortHover
              handleSort={handleSort}
              sortBy={sortBy}
              products={products}
            />
          </div>
          {
            //ORIGIN COUNTRY FILTER SECTION
            selectedPill == 1 && (
              <div
                className="grid grid-cols-[repeat(auto-fit,_minmax(100px,100px))] pt-1 pb-5 px-4 gap-x-8 gap-y-1"
                style={{ boxShadow: "0 4px 4px -4px rgba(0, 0, 0, 0.2)" }}
              >
                {CountryList.originCountries.map((country) => (
                  <FilterSection
                    key={country.id}
                    itemKey={country.key}
                    value={country.value}
                    updateParams={updateParams}
                    group="origin"
                    selectedValues={productsFilters.origin}
                  />
                ))}
              </div>
            )
          }
          {
            //SIZE FILTER SECTION
            selectedPill == 2 && (
              <div
                className=" grid grid-cols-[repeat(auto-fit,_minmax(100px,100px))] pt-1 pb-5  px-4 gap-x-8 gap-y-1 shadow-b-lg"
                style={{ boxShadow: "0 4px 4px -4px rgba(0, 0, 0, 0.2)" }}
              >
                {SizeList.availableSizes.map((size) => (
                  <FilterSection
                    key={size.id}
                    itemKey={size.key}
                    value={size.value}
                    updateParams={updateParams}
                    group="size"
                    selectedValues={productsFilters.size}
                  />
                ))}
              </div>
            )
          }
          <div className="flex justify-start w-[100%] gap-2 px-4">
            {productsFilters.origin.map((pill, idx) => (
              <Pill
                key={idx}
                itemKey={"origin"}
                value={pill}
                updateParams={updateParams}
                secondary
              />
            ))}
            {productsFilters.size.map((pill, idx) => (
              <Pill
                key={idx}
                itemKey={"size"}
                value={pill}
                updateParams={updateParams}
                secondary
              />
            ))}
          </div>

          <div className="grid sm:grid-cols-[repeat(auto-fit,_minmax(160px,160px))] md:grid-cols-[repeat(auto-fit,_minmax(200px,200px))] sm:gap-2 md:gap-7 sm:p-1 md:p-4 sm:justify-center md:justify-start ">
            {filteredProducts.map((item) => (
              <div key={item.id}>
                <ProductCard item={item} />
              </div>
            ))}
          </div>
          <div>
            {filteredProducts.length == 0 && (
              <div className="sm:pt-10 md:pt-20 flex flex-col items-center w-[screen]">
                <div className="sm:w-[60%] md:w-[27%]  text-center">
                  <p className="font-bold mb-5">NO PRODUCTS FOUND</p>
                  <p className="text-gray-500 mb-5">
                    There are no products available for the applied filters.
                  </p>
                </div>
                <InboxIcon className=" text-gray-400 h-20" />
              </div>
            )}
          </div>
          <SortFilterFooter/>
        </main>
      </div>
      {isModalOpen && (
        <CategoryModal
          hoveredTab={hoveredTab}
          handleMouseLeave={handleMouseLeave}
          handleMouseEnter={handleMouseEnter}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default ProductsPage;
