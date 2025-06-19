import {useState, useEffect} from 'react';
import {useSearchParams } from "react-router-dom";
import useSort from './useSort';


const useDebug = ({products, setFilteredProducts}) => {
 
 //MAINTAIN STATE FOR APPLIED FILTERS
  const [appliedFilters, setAppliedFilters] = useState({
    category: [],
    brand: [],
    color: [],
    origin:[],
    size:[]
  });
  
  // SORT BY
  const [sortBy, setSortBy] = useState("recommended");
  
  // HANDLE SORTBY CHANGE
    const handleSort = (val) =>{
        setSortBy(val);
    }
  
  // APPLY SORT
  const applySort = (arr, val) =>{
    
    switch(val){
        case "recommended" : 
         return products;
         
        
        case "date":
            return arr.slice().sort((a,b)=>compareDates(b.launchDate, a.launchDate));
        

        case "popularity":
            return arr.slice().sort((a,b)=> parseInt(b.rating.count) - parseInt(a.rating.count) );
            
        case "discount":
            return arr.slice().sort((a,b)=> parseInt(b.price.discount) - parseInt(a.price.discount) );
            
        case "price-high-low":
            return arr.slice().sort((a,b)=> parseInt(b.price.discounted) - parseInt(a.price.discounted) );
            
        case "price-low-high":
            return arr.slice().sort((a,b)=> parseInt(a.price.discounted) - parseInt(b.price.discounted) );

        case "rating":
            return arr.slice().sort((a,b)=> parseFloat(b.rating.average) - parseFloat(a.rating.average) );
           
        default :
         return products;
    }
  }
 
  //MAINTAIN STATE FOR SEARCH PARAMS
  const [searchParams, setSearchParams] = useSearchParams();


  // FILTER PRODUCTS ON APPLIED FILTER CHANGE
  useEffect(() => {
   
   //Apply filter
    let filteredProducts = products.filter((product) => {
      const matchColor =
        appliedFilters.color.length == 0 ||
        appliedFilters.color.includes(product.color);

      const matchBrand =
        appliedFilters.brand.length == 0 ||
        appliedFilters.brand.includes(product.brandKey);

      const matchCategory =
        appliedFilters.category.length == 0 ||
        appliedFilters.category.includes(product.category);

      const matchOrigin = 
        appliedFilters.origin.length == 0 ||
        appliedFilters.origin.includes(product.origin);
      
      const matchSize = 
        appliedFilters.size.length == 0 ||
        product.size.filter((item)=> appliedFilters.size.includes( item ) ).length > 0
      


      return matchColor && matchBrand && matchCategory && matchOrigin && matchSize;
    });

    //Apply Sort
    filteredProducts = applySort(filteredProducts, sortBy);

    setFilteredProducts(filteredProducts);
  
}, [appliedFilters, products, sortBy]);

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
    const updatedOrigin = searchParams.getAll("origin") || [];
    const updatedSize = searchParams.getAll("size") || [];

    setAppliedFilters((prev) => ({
      ...prev,
      category: updatedCategory,
      brand: updatedBrand,
      color: updatedColor,
      origin: updatedOrigin,
      size: updatedSize
    }));
  }, [searchParams]);

 

  return {updateParams, appliedFilters, handleSort, sortyBy}

}

export default useDebug;