import {useState, useEffect} from 'react';
import {useSearchParams } from "react-router-dom";

const useFilter = ({products, setFilteredProducts}) => {
 
 //MAINTAIN STATE FOR APPLIED FILTERS
  const [appliedFilters, setAppliedFilters] = useState({
    category: [],
    brand: [],
    color: [],
  });

  //MAINTAIN STATE FOR SEARCH PARAMS
  const [searchParams, setSearchParams] = useSearchParams();


  // FILTER PRODUCTS ON APPLIED FILTER CHANGE
  useEffect(() => {
    const filteredProducts = products.filter((product) => {
      const matchColor =
        appliedFilters.color.length == 0 ||
        appliedFilters.color.includes(product.color);
      const matchBrand =
        appliedFilters.brand.length == 0 ||
        appliedFilters.brand.includes(product.brandKey);
      const matchCategory =
        appliedFilters.category.length == 0 ||
        appliedFilters.category.includes(product.category);

      return matchColor && matchBrand && matchCategory;
    });

    setFilteredProducts(filteredProducts);
  }, [appliedFilters, products]);

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

      // Create a new URLSearchParams object
      const newParams = new URLSearchParams(searchParams.toString());

      // Delete existing brand keys
      newParams.delete(key);

      // Add each brand
      updatedParams.forEach((param) => newParams.append(key, param));

      setSearchParams(newParams);
    }
  };

  // CALL HANDLE CHANGE IF SEARCH PARAMETERS ARE CHANGED
  useEffect(() => {
    const updatedCategory = searchParams.getAll("category") || [];
    const updatedBrand = searchParams.getAll("brand") || [];
    const updatedColor = searchParams.getAll("color") || [];

    setAppliedFilters((prev) => ({
      ...prev,
      category: updatedCategory,
      brand: updatedBrand,
      color: updatedColor
    }));
  }, [searchParams]);

  return {updateParams, appliedFilters}

}

export default useFilter;