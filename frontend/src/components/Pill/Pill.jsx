import React from "react";
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const Pill = ({ label }) => {
  return (
    <div className="flex items-center justify-start gap-2 rounded-full  px-3 py-1 hover:bg-gray-200 cursor-pointer">
      <p className="text-sm">{label}</p>
      <ChevronDownIcon className="w-3 h-3 text-gray-600" />
    </div>
  );
};

export default Pill;
