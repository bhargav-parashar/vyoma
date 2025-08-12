import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import {sortList} from "../../constants/sortFilters.json";

const SortDropdown = ({handleSort, sortBy}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className="relative inline-block text-left "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        
      <div className={`border-l border-r border-t ${!isHovered ? 'border-b' : '' } border-gray-300 dark:border-gray-500  px-4 py-2 bg-white dark:bg-primary-dark cursor-pointer flex items-center gap-2 w-60 justify-between`}>
        <span className="text-sm">
          <span className="text-gray-500 dark:text-primary">Sort by :</span>{" "}
          <span className="font-semibold text-black dark:text-primary">{ sortList.find((item)=>item.key===sortBy).value }</span>
        </span>
        <ChevronDownIcon className="w-4 h-4 text-gray-600 dark:text-primary" />
      </div>

      {isHovered && (
        <div className="absolute z-10  w-60 bg-white dark:bg-gray-700  border-l border-r border-b border-gray-300 dark:border-gray-500  shadow-lg">
          <ul className="py-2">
            {
            sortList.map((option) => (
              
              <li
                key={option.key}
                className={`px-4 py-2 text-sm text-gray-700 dark:text-primary  ${ sortBy === option.key && `font-bold bg-gray-100 dark:bg-gray-600` } hover:bg-gray-100 dark:hover:bg-gray-500 cursor-pointer`}
                onClick={()=>handleSort(option.key)}
              >
                {option.value}
              </li>
            ))
            }
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
