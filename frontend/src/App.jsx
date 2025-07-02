import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import useSectionHoverModal from "./hooks/useSectionHoverModal";
import FilterContext from "./contexts/FilterContext";
import useGetFilter from "./hooks/useGetFilter";

function App() {
  
  //GET FILTERS
  const {
    search,
    productsFilters,
    setProductsFilters,
    clearFilters,
    handleSearch,
  } = useGetFilter();

  //GET HOVER MENU VARIABLES
  const {
    hoveredTab,
    setIsModalOpen,
    handleMouseEnter,
    handleMouseLeave,
    isModalOpen,
  } = useSectionHoverModal();

  const value = {
    search,
    productsFilters,
    setProductsFilters,
    hoveredTab,
    setIsModalOpen,
    handleMouseEnter,
    handleMouseLeave,
    isModalOpen,
    clearFilters,
    handleSearch,
  };

  return (
    <FilterContext.Provider value={value}>
      <Header />
      <Outlet />
    </FilterContext.Provider>
  );
}

export default App;
