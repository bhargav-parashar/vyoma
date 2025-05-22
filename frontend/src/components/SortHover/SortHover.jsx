import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const SortDropdown = () => {
  const [isHovered, setIsHovered] = useState(false);
  const options = [
    "Recommended",
    "What's New",
    "Popularity",
    "Better Discount",
    "Price: High to Low",
    "Price: Low to High",
    "Customer Rating",
  ];

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        
      <div className={`border-l border-r border-t ${!isHovered ? 'border-b' : '' } border-gray-300   px-4 py-2 bg-white cursor-pointer flex items-center gap-2 w-56`}>
        <span className="text-sm">
          <span className="text-gray-500">Sort by :</span>{" "}
          <span className="font-semibold text-black">Recommended</span>
        </span>
        <ChevronDownIcon className="w-4 h-4 text-gray-600" />
      </div>

      {isHovered && (
        <div className="absolute z-10  w-56 bg-white  border-l border-r border-b border-gray-300   shadow-lg">
          <ul className="py-2">
            {options.map((option) => (
              <li
                key={option}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
