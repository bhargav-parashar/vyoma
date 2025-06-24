import { useState } from "react";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';


const SearchBar = ({handleSearch, filteredProducts, searchText=''}) => {
 
  const [isFocused, setIsFocused] = useState(false);
  const [localSearchText, setLocalSearchText] = useState(searchText);

  const handleLocalSearchTextChange = (val) =>{
    setLocalSearchText(val)
  }
  
  return (
    <div
      className="relative inline-block text-left w-[70%]"
    >
     
      <div className="relative h-[100%] flex items-center w-[100%]">
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
        <input
          type="text"
          value={localSearchText}
          onChange={(e) => handleLocalSearchTextChange(e.target.value)}
          onFocus={()=>setIsFocused(true)}
          placeholder="Search for products or brands"
          className={`w-full pl-10 pr-4 py-2 border border-gray-300  bg-gray-100 text-sm focus:outline-none focus:bg-transparent rounded-sm ${filteredProducts  && filteredProducts.length > 0 && localSearchText.length > 2 && isFocused && `border-b-transparent rounded-b-none bg-transparent`}`}
        />
      </div>

      { filteredProducts && filteredProducts.length > 0 && localSearchText.length > 2 && isFocused && (
        <div className="absolute z-10  w-[100%]  bg-white  border-l border-r border-b border-gray-300 shadow-lg rounded-b">
          <ul className="py-2">
            {
            filteredProducts?.slice(0,10).map((option) => (
              
              <li
                key={option.key}
                className={`px-4 py-2 text-sm text-gray-700  hover:bg-gray-100 cursor-pointer`}
                onClick={()=>{
                    handleSearch(option.name);
                    setIsFocused(false);
                }}
              >
                {`${option.name}`}
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
