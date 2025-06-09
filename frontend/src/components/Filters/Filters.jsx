import { useEffect, useState } from "react";
import FilterGroup from "./FilterGroup";
import filters from "../../constants/filters.json";
import {useLocation} from 'react-router-dom';

const Filters = ({ products, setFilteredProducts }) => {
  const [appliedFilters, setAppliedFilters] = useState({
    categories: [],
    brands: [],
    colors: [],
  });

  const location = useLocation();
  
  
  
  
 
  const handleChange = (group, value) => {
    //add option to group keyed array of appliedFilters
    //if it is already present, remove it

    const updatedFilter = appliedFilters[group].includes(value)
      ? appliedFilters[group].filter((item) => item != value)
      : [...appliedFilters[group], value];

    setAppliedFilters((prev) => ({ ...prev, [group]: updatedFilter }));
  };

  //get the params if available
  //update the filters in an useEffect

  // useEffect(()=>{
  //   const params = new URLSearchParams(location.search);
  //   for(let [key,val] of params){
  //     handleChange (key, val);
  //   }
  // },[]);

  useEffect(() => {
    const filteredProducts = products.filter((product) => {

      const matchColor     = appliedFilters.colors.length == 0  ||  appliedFilters.colors.includes(product.color);
      const matchBrand     = appliedFilters.brands.length == 0  ||  appliedFilters.brands.includes(product.brandkey);
      const matchCategory  = appliedFilters.categories.length == 0 ||  appliedFilters.categories.includes(product.category);

      return matchColor && matchBrand && matchCategory;
    });

    setFilteredProducts(filteredProducts);
  }, [appliedFilters]);

  


  return (
    <div className="h-screen flex flex-col">
      <hr className="text-gray-300 " />

      <FilterGroup
        title={"CATEGORIES"}
        options={filters.men.categories}
        group={"categories"}
        selectedValues={appliedFilters.categories}
        handleChange={handleChange}
      />
      <hr className="text-gray-300 " />
      <FilterGroup
        title={"BRANDS"}
        options={filters.men.brands}
        group={"brands"}
        selectedValues={appliedFilters.brands}
        handleChange={handleChange}
      />
      <hr className="text-gray-300 " />
      <FilterGroup
        title={"COLORS"}
        options={filters.men.colors}
        group={"colors"}
        selectedValues={appliedFilters.colors}
        handleChange={handleChange}
      />
    </div>
  );
};

export default Filters;
