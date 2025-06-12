import React from "react";

const FilterSection = ({itemKey,value}) => {
  return (
    <div>
      <label className="inline-flex items-center text-sm">
        <input
          className="cursor-pointer"
          type="checkbox"
          value={itemKey}
          // checked={selectedValues.includes(option.key)}
          // onChange={()=>updateParams( group, option.key)}
        />
        <span className="ml-2 cursor-pointer">{value}</span>
      </label>
    </div>
  );
};

export default FilterSection;
