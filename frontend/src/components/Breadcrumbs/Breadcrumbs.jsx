import React from 'react';
import { useSearchParams } from "react-router-dom";

const Breadcrumbs = () => {
  //MAINTAIN STATE FOR SEARCH PARAMS
  const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams);
  return (
    <div >
      
    </div>
  )
}

export default Breadcrumbs
