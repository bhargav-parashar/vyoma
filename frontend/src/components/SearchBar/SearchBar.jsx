import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import {sortList} from "../../constants/sortFilters.json";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';


const SearchBar = ({handleSort, sortBy, handleSearch}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className="relative inline-block text-left w-[70%]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        
      {/* <div className={`border-l border-r border-t ${!isHovered ? 'border-b' : '' } border-gray-300   px-4 py-2 bg-white cursor-pointer flex items-center gap-2 w-60 justify-between`}>
        <span className="text-sm">
          <span className="text-gray-500">Sort by :</span>{" "}
          
        </span>
        <ChevronDownIcon className="w-4 h-4 text-gray-600" />
      </div> */}

      <div className="relative h-[100%] flex items-center w-[100%]">
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
        <input
          type="text"
        //   value={searchText}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search for products or brands"
          className={`w-full pl-10 pr-4 py-2 border border-gray-300  bg-gray-100 text-sm focus:outline-none focus:bg-transparent rounded-sm ${isHovered && `border-b-transparent rounded-b-none bg-transparent`}`}
        />
      </div>

      {isHovered && (
        <div className="absolute z-10  w-[100%]  bg-white  border-l border-r border-b border-gray-300 shadow-lg rounded-b">
          <ul className="py-2">
            {
            sortList.map((option) => (
              
              <li
                key={option.key}
                className={`px-4 py-2 text-sm text-gray-700 ${ sortBy === option.key && `font-bold bg-gray-100` } hover:bg-gray-100 cursor-pointer`}
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

export default SearchBar;
