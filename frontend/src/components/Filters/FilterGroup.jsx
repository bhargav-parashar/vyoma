import React from "react";

const FilterGroup = ({ title, options, group, selectedValues, handleChange }) => {
  return (
    <div className="p-4 ">
      <h3 className="text-xs font-bold mb-4">{title}</h3>
      {options.map((option, idx) => (
        <div key={idx}>
          <label className="inline-flex items-center text-sm">
            <input
              className="cursor-pointer"
              type="checkbox"
              value={option}
              checked={selectedValues.includes(option)}
              onChange={()=>handleChange(group, option)}
            />
            <span className="ml-2 cursor-pointer">{option}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default FilterGroup;
