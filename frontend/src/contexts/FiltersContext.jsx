import { createContext } from "react";
import useGetFilter from "../hooks/useGetFilter";

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

  const value = {
    section,
    search,
    productsFilters,
    setProductsFilters,
    clearFilters,
    handleSearch
  };

  return (
    <FilterContext.Provider value = {value}>
        {children}
    </FilterContext.Provider>
  )
}


export  {FilterContextProvider,FilterContext };