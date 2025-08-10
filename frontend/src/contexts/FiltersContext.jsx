import { createContext } from "react";
import useGetFilter from "../hooks/useGetFilter";
//import useSectionHoverModal from "../hooks/useSectionHoverModal";


const FilterContext = createContext();

const FilterContextProvider = ({children}) =>{

  //GET FILTERS
  const {
    section,
    search,
    productsFilters,
    setProductsFilters,
    clearFilters,
    handleSearch,
  } = useGetFilter();

  //GET HOVER MENU VARIABLES
  // const {
  //   hoveredTab,
  //   setIsModalOpen,
  //   handleMouseEnter,
  //   handleMouseLeave,
  //   isModalOpen,
  //   isCheckoutModalOpen,
  //   setIsCheckoutModalOpen
  // } = useSectionHoverModal();

  const value = {
    section,
    search,
    productsFilters,
    setProductsFilters,
    // hoveredTab,
    // setIsModalOpen,
    // handleMouseEnter,
    // handleMouseLeave,
    // isModalOpen,
    clearFilters,
    handleSearch,
    // isCheckoutModalOpen,
    // setIsCheckoutModalOpen
  };

  return (
    <FilterContext.Provider value = {value}>
        {children}
    </FilterContext.Provider>
  )
}


export  {FilterContextProvider,FilterContext };