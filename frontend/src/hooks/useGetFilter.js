import { useSearchParams, useParams } from "react-router-dom";
import {useState} from "react"; 

const useGetFilter = () => {

  //GET REQUEST PARAM FROM URL
  const { section ="men" } = useParams();
  
  //MAINTAIN STATE FOR SEARCH PARAMS
  const [searchParams, setSearchParams] = useSearchParams();

  //MAINTAIN STATE FOR SEARCH TEXT
  const [search, setSearch] = useState("");

  //HANDLE SEARCH TEXT CHANGE
  const handleSearch = (val) => {
    setSearch(val);
  };

  //MAINTAIN STATE FOR APPLIED FILTERS
  const [productsFilters, setProductsFilters] = useState({
    section :[section],
    category: [],
    brand: [],
    color: [],
    origin: [],
    size: [],
  });

  //CLEAR FILTERS
  const clearFilters = () => {
    if (searchParams.size > 0) {
     
      setSearchParams({});
    } else {
      setProductsFilters({
        section :[section],
        category: [],
        brand: [],
        color: [],
        origin: [],
        size: [],
      });
    }
  };

  return {
    section,
    search,
    productsFilters,
    setProductsFilters,
    clearFilters,
    handleSearch
  };

};

export default useGetFilter;
