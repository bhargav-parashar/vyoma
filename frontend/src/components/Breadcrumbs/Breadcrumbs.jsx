import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Breadcrumbs = () => {
  //MAINTAIN STATE FOR SEARCH PARAMS
  const currLocation = useLocation();
  const crumbs = currLocation.pathname.split("/").filter((item) => item != "");
  const navigate = useNavigate();
  const handleSectionClick = (item, idx) => {

      if (item == "/") {
        navigate(`/`);
      } else if(idx !== crumbs.length - 1) {
        let section = item.split("/")[0].trim();
        navigate(`/${section.toLowerCase()}`);
      }
    };

  return (
    <div className="   flex gap-1 pt-[1%] px-[1%] ">
      <p className={` ${crumbs.length == 0 ? `text-primary dark:text-primary-dark` : ` dark:text-primary  `  } cursor-pointer`} onClick={()=>handleSectionClick("/")} >Home / </p>
      {crumbs.map((item, idx) => {
       
        if (idx < crumbs.length - 1) {
          item += ` /`;
        }
       return <p key={idx} className={`dark:text-primary ${idx == crumbs.length - 1 ? `font-bold` : `cursor-pointer` }`} onClick={()=>handleSectionClick(item,idx)} >{item}</p>;
      })}
    </div>
  );
};

export default Breadcrumbs;
