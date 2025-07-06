import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { applyFilter } from "../utilities/applyFilter";
import { applySort } from "../utilities/applySort";
import { applySearch } from "../utilities/applySearch";
//import allProducts from "../constants/products.json";
import {allProducts} from "../constants/productList.json";

const useApplyFilter = ({
  section = "men",
  productsFilters,
  setProductsFilters,
  search
}) => {

 

  // GET ALL PRODUCTS 
  const [products] =  useState(allProducts);
 
  //MAINTAIN STATE FOR FILTERED PRODUCTS
  const [filteredProducts, setFilteredProducts] = useState(allProducts);


  //UPDATE FILTERED PRODUCTS ON SECTION CHANGE
  useEffect(() => {
   
    setFilteredProducts(
      allProducts.filter((product)=>product.section === section)
    );
  }, [section]);




  //MAINTAIN STATE FOR SORT
  const [sortBy, setSortBy] = useState("recommended");




  // HANDLE SORT BY CHANGE
  const handleSort = (val) => {
    setSortBy(val);
  };




  //MAINTAIN STATE FOR SEARCH PARAMS
  const [searchParams, setSearchParams] = useSearchParams();




  // APPLY COMBINED FILTERS
  const applyCombinedFilters = () => {
    // 1. Apply filter
    let filteredProducts = applyFilter(products, productsFilters);

    // 2. Apply Sort
    filteredProducts = applySort(filteredProducts, sortBy);

    setFilteredProducts(filteredProducts);
  };



  
  // FILTER PRODUCTS ON APPLIED FILTER CHANGE
  useEffect(() => {
    applyCombinedFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsFilters, products, sortBy]);

  useEffect(() => {
    if (search.length > 0) {
      const searchedProduct = applySearch(products, search);
      setFilteredProducts(searchedProduct);
    }
  }, [search]);

  

  // UPDATE SEARCH PARAMS
  const updateParams = (key, val) => {
    const currentParams = searchParams.getAll(key);

    // Avoid duplicates
    if (!currentParams.includes(val)) {
      const updatedParams = [...currentParams, val];

      // Create a new URLSearchParams object
      const newParams = new URLSearchParams(searchParams.toString());

      // Delete existing brand keys
      newParams.delete(key);

      // Add each brand
      updatedParams.forEach((param) => newParams.append(key, param));

      setSearchParams(newParams);
    } else {
      //Remove brand filter if clicked again

      //Get a list of all brands minus the select brand
      const updatedParams = currentParams.filter((param) => param != val);

      const newParams = new URLSearchParams(searchParams.toString());
      newParams.delete(key);
      updatedParams.forEach((param) => newParams.append(key, param));
      setSearchParams(newParams);
    }
  };

  // CALL HANDLE CHANGE IF SEARCH PARAMETERS ARE CHANGED
  useEffect(() => {
    const updatedCategory = searchParams.getAll("category") || [];
    const updatedBrand = searchParams.getAll("brand") || [];
    const updatedColor = searchParams.getAll("color") || [];
    const updatedOrigin = searchParams.getAll("origin") || [];
    const updatedSize = searchParams.getAll("size") || [];

    setProductsFilters((prev) => ({
      ...prev,
      section : [section],
      category: updatedCategory,
      brand: updatedBrand,
      color: updatedColor,
      origin: updatedOrigin,
      size: updatedSize,
    }));
  }, [searchParams,section]);

  return {
    products,
    filteredProducts,
    setFilteredProducts,
    updateParams,
    sortBy,
    handleSort  
  };
};

export default useApplyFilter;
