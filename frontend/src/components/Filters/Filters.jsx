import { useEffect, useState } from "react";
import FilterGroup from "./FilterGroup";
import filters from "../../constants/filters.json";
import {useLocation, useNavigate, useSearchParams} from 'react-router-dom';

const Filters = ({ products, setFilteredProducts }) => {

  const location = useLocation();
  const navigate = useNavigate();
  
  //MAINTAIN STATE FOR APPLIED FILTERS
  const [appliedFilters, setAppliedFilters] = useState({
    categories: [],
    brand: [],
    colors: [],
  });

  //MAINTAIN STATE FOR SEARCH PARAMS
  const [searchParams, setSearchParams] = useSearchParams(); 
  
  // APPLY FILTER
  const handleChange = (group, value) => {
    const updatedFilter = appliedFilters[group].includes(value)
      ? appliedFilters[group].filter((item) => item != value)
      : [...appliedFilters[group], value];

    setAppliedFilters((prev) => ({ ...prev, [group]: updatedFilter }));
  };

  
  // FILTER PRODUCTS ON APPLIED FILTER CHANGE
  useEffect(() => {
    const filteredProducts = products.filter((product) => {

      const matchColor     = appliedFilters.colors.length == 0  ||  appliedFilters.colors.includes(product.color);
      const matchBrand     = appliedFilters.brand.length == 0  ||  appliedFilters.brand.includes(product.brandKey);
      const matchCategory  = appliedFilters.categories.length == 0 ||  appliedFilters.categories.includes(product.category);

      return matchColor && matchBrand && matchCategory;
    });

    setFilteredProducts(filteredProducts);
  }, [appliedFilters, products]);



  // UPDATE SEARCH PARAMS
  const updateParams = (section, key, val) =>{
    
    switch(section){
      case "men" :

        if(key =="brand"){
          addBrand(val);
        }
        break;

      case "women" :
         navigate(`/women-products?${key}=${val}`)
         break;
      case "kids" :
         navigate(`/kids-products?${key}=${val}`)
         break;
      case  "home" :
         navigate(`/home-products?${key}=${val}`)
         break;

      default :
         navigate(`/men-products?${key}=${val}`)
         break;
    }
   
  }

  
  const addBrand = (newBrand) => {
    const currentBrands = searchParams.getAll("brand");

    // Avoid duplicates
    if (!currentBrands.includes(newBrand)) {
      const updatedBrands = [...currentBrands, newBrand];

      // Create a new URLSearchParams object
      const newParams = new URLSearchParams(searchParams.toString());

      // Delete existing brand keys
      newParams.delete("brand");

      // Add each brand
      updatedBrands.forEach(brand => newParams.append("brand", brand));

      setSearchParams(newParams);
    }else{
      //Remove brand filter if clicked again

      //Get a list of all brands minus the select brand
      const updatedBrands = currentBrands.filter(brand => brand != newBrand ) ;

      // Create a new URLSearchParams object
      const newParams = new URLSearchParams(searchParams.toString());

      // Delete existing brand keys
      newParams.delete("brand");

      // Add each brand
      updatedBrands.forEach(brand => newParams.append("brand", brand));

      setSearchParams(newParams);
    }

  };

  


  // CALL HANDLE CHANGE IF SEARCH PARAMETERS ARE CHANGED
  useEffect(()=>{
    const params = new URLSearchParams(location.search);
    for(let [key,val] of params){
      handleChange (key, val);
    }
  },[location.search]);



  


  return (
    <div className="h-screen flex flex-col">
      <hr className="text-gray-300 " />

      <FilterGroup
        section = "men"
        title={"CATEGORIES"}
        options={filters.men.categories}
        group={"categories"}
        selectedValues={appliedFilters.categories}
        handleChange={handleChange}
        updateParams={updateParams}
      />
      <hr className="text-gray-300 " />
      <FilterGroup
        section = "men"
        title={"BRANDS"}
        options={filters.men.brand}
        group={"brand"}
        selectedValues={appliedFilters.brand}
        handleChange={handleChange}
        updateParams={updateParams}
      />
      <hr className="text-gray-300 " />
      <FilterGroup
        section = "men"
        title={"COLORS"}
        options={filters.men.colors}
        group={"colors"}
        selectedValues={appliedFilters.colors}
        handleChange={handleChange}
        updateParams={updateParams}
      />
    </div>
  );
};

export default Filters;
