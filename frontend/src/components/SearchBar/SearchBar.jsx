import React, { useCallback, useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Suggestion from "../Suggestion/Suggestion";
import debounce from "lodash/debounce";

const SearchBar = ({
  staticData,
  dataKey = "",
  onSelect,
  onChange,
  searchText,
  placeholder,
  clearFilters,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    onChange(e.target.value);
  };

  const getSuggestions = (query) => {
    if (staticData) {
      let result = staticData.men.filter((item) => {
        return item.name.toLowerCase().includes(query.toLowerCase());
      });
      setSuggestions(result);
    }
  };

  const getSuggestionsDebounced = useCallback(
    debounce(getSuggestions, 300),
    []
  );

  useEffect(() => {
    if (inputValue.length > 1 && !searchText) {
      getSuggestionsDebounced(inputValue);
    } else {
      setSuggestions([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion[dataKey]);
    onSelect(suggestion[dataKey]);
    setSuggestions([]);
  };

  const handleClearSearchClick = () => {
    setInputValue("");
    onSelect("");
    clearFilters();
  };
  
  
  return (
    <div className="relative inline-block text-left w-[70%]">
      <div className="relative h-[100%] flex items-center w-[100%]">
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
        {
          inputValue.length > 0 && 
          <XMarkIcon
            onClick={handleClearSearchClick}
            className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          />
        }
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          className={`w-full pl-10 pr-4 py-2 border border-gray-300  bg-gray-100 text-sm focus:outline-none focus:bg-transparent rounded-sm ${
            suggestions.length > 0 &&
            `border-b-transparent rounded-b-none bg-transparent`
          }`}
        />
      </div>
      {suggestions.length > 0 && (
        <Suggestion
          dataKey={dataKey}
          suggestions={suggestions}
          highlight={inputValue}
          onSuggestionClick={handleSuggestionClick}
        />
      )}
    </div>
  );
};

export default SearchBar;
