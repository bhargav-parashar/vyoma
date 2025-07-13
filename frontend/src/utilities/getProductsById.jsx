import React from 'react';
import {allProducts} from "../constants/productList.json";

const getProductsById = (id) => {
  if(!id)
    return allProducts;
 else
    return allProducts.filter((product)=>id.includes(product.id));
}

export default getProductsById
