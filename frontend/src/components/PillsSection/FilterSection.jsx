import React from "react";

const FilterSection = ({itemKey,value, updateParams, group, selectedValues}) => {
  return (
    <div>
      <label className="inline-flex items-center text-sm">
        <input
          className="cursor-pointer"
          type="checkbox"
          value={itemKey}
          checked={selectedValues.includes(itemKey)}
          onChange={()=>updateParams( group, itemKey)}
        />
        <span className="ml-2 cursor-pointer dark:text-primary">{value}</span>
      </label>
    </div>
  );
};

export default FilterSection;
