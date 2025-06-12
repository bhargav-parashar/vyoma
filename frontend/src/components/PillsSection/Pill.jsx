import React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const Pill = ({ itemKey, value, selectedPill, handlePillClick }) => {
  return (
    <div
      className="flex items-center justify-start gap-2 rounded-full  px-3 py-1 hover:bg-gray-200 cursor-pointer"
      onClick={() => handlePillClick(itemKey)}
    >
      <p className="text-sm">{value}</p>
      {itemKey === selectedPill ? (
        <ChevronUpIcon className="w-3 h-3 text-gray-600" />
      ) : (
        <ChevronDownIcon className="w-3 h-3 text-gray-600" />
      )}
    </div>
  );
};

export default Pill;
