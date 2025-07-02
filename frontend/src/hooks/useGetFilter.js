import { useSearchParams } from "react-router-dom";
import {useState} from "react"; 

const useGetFilter = () => {
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
        category: [],
        brand: [],
        color: [],
        origin: [],
        size: [],
      });
    }
  };

  return {
    search,
    productsFilters,
    setProductsFilters,
    clearFilters,
    handleSearch
  };

};

export default useGetFilter;
