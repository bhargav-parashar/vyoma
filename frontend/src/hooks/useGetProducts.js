import { useState } from "react";
import allProducts from "../constants/products.json";

const useGetProducts = ({section}) => {
  const [products] = useState(allProducts[`${section}`]);
  const [filteredProducts, setFilteredProducts] = useState(
    allProducts[`${section}`]
  );

  return {products, filteredProducts, setFilteredProducts}
};

export default useGetProducts;
