import React from "react";
import { FunnelIcon } from '@heroicons/react/24/solid';
import { ArrowsUpDownIcon } from '@heroicons/react/24/solid';

const SortFilterFooter = () => {
  return (
    <div className="hidden w-[100%] h-12 bg-white z-20 fixed bottom-0 left-0 flex justify-between  text-gray-600 font-bold py-2">
      <div className=" border-r-1 border-gray-600 w-[100%] px-[15%] flex items-center justify-between">
        <ArrowsUpDownIcon className="h-5 " />
        <p>SORT</p>
      </div>
      <div className=" w-[100%] px-[15%] flex items-center justify-between ">
        <FunnelIcon className="h-5 " />
        <p>FILTER</p>
      </div>
    </div>
  );
};

export default SortFilterFooter;
