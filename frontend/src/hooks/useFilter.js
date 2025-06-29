import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { applyFilter } from "../utilities/applyFilter";
import { applySort } from "../utilities/applySort";
import { applySearch } from "../utilities/applySearch";

const useFilter = ({ products, setFilteredProducts }) => {
  //MAINTAIN STATE FOR APPLIED FILTERS
  const [appliedFilters, setAppliedFilters] = useState({
    category: [],
    brand: [],
    color: [],
    origin: [],
    size: [],
  });

  //MAINTAIN STATE FOR SORT
  const [sortBy, setSortBy] = useState("recommended");

  //MAINTAIN STATE FOR SEARCH
  const [searchText, setSearchText] = useState("");

  // HANDLE SORT BY CHANGE
  const handleSort = (val) => {
    setSortBy(val);
  };

  //HANDLE SEARCH TEXT CHANGE
  const handleSearch = (val) => {
    setSearchText(val);
  };

  //MAINTAIN STATE FOR SEARCH PARAMS
  const [searchParams, setSearchParams] = useSearchParams();

  // APPLY COMBINED FILTERS
  const applyCombinedFilters = () => {
    // 1. Apply filter
    let filteredProducts = applyFilter(products, appliedFilters);

    // 2. Apply Sort
    filteredProducts = applySort(filteredProducts, sortBy);

    setFilteredProducts(filteredProducts);
  };

  // FILTER PRODUCTS ON APPLIED FILTER CHANGE
  useEffect(() => {
    applyCombinedFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appliedFilters, products, sortBy]);

  useEffect(() => {
    if (searchText.length > 0) {
      const searchedProduct = applySearch(products, searchText);
      setFilteredProducts(searchedProduct);
    }
  }, [searchText]);

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

    setAppliedFilters((prev) => ({
      ...prev,
      category: updatedCategory,
      brand: updatedBrand,
      color: updatedColor,
      origin: updatedOrigin,
      size: updatedSize,
    }));
  }, [searchParams]);

  //CLEAR FILTERS
  const clearFilters = () => {
    if (searchParams.size > 0) {
      setSearchParams({});
    } else {
      setAppliedFilters({
        category: [],
        brand: [],
        color: [],
        origin: [],
        size: [],
      });
    }
 
   
  };

  return {
    updateParams,
    appliedFilters,
    handleSort,
    sortBy,
    handleSearch,
    searchText,
    clearFilters,
  };
};

export default useFilter;
