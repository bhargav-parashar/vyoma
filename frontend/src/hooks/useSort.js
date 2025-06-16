import { useState, useEffect } from "react";

const useSort = ({setFilteredProducts, products, filteredProducts}) => {
   const[sortBy, setSortBy] = useState("recommended");

  const handleSort = (val) =>{
    setSortBy(val);
  }

  const compareDates = (date1, date2) =>{
    if(date1 > date2 ){
        return 1;
    }else if(date1 < date2){
        return -1;
    }else{
        return 0;
    }
  }

  useEffect(()=>{
    switch(sortBy){
        case "recommended" : 
         setFilteredProducts(products);
         break;
        
        case "date":{
            const sortedProducts = [...filteredProducts];
            sortedProducts.sort((a,b)=>compareDates(b.launchDate, a.launchDate));
            setFilteredProducts(sortedProducts);
            break;
        }

        case "popularity":{
            const sortedProducts = [...filteredProducts];
            sortedProducts.sort((a,b)=> parseInt(b.rating.count) - parseInt(a.rating.count) );
            setFilteredProducts(sortedProducts);
            break;
        }

        case "discount":{
            const sortedProducts = [...filteredProducts];
            sortedProducts.sort((a,b)=> parseInt(b.price.discount) - parseInt(a.price.discount) );
            setFilteredProducts(sortedProducts);
            break;
        }

        case "price-high-low":{
            const sortedProducts = [...filteredProducts];
            sortedProducts.sort((a,b)=> parseInt(b.price.discounted) - parseInt(a.price.discounted) );
            setFilteredProducts(sortedProducts);
            break;
        }

        case "price-low-high":{
            const sortedProducts = [...filteredProducts];
            sortedProducts.sort((a,b)=> parseInt(a.price.discounted) - parseInt(b.price.discounted) );
            setFilteredProducts(sortedProducts);
            break;
        }

        case "rating":{
            const sortedProducts = [...filteredProducts];
            sortedProducts.sort((a,b)=> parseFloat(b.rating.average) - parseFloat(a.rating.average) );
            setFilteredProducts(sortedProducts);
            break;
        }

        default :
         break;
    }
  },[sortBy]);

  return {sortBy, setSortBy, handleSort};
};

export default useSort;
