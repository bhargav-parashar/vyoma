import FilterGroup from "./FilterGroup";
import filters from "../../constants/filters.json";

const Filters = ({ section, appliedFilters, updateParams }) => {
  
  return (
    <div className="h-screen flex flex-col">
      <hr className="text-gray-300 " />

      <FilterGroup
        section={section}
        title={"CATEGORIES"}
        options={filters[section].category}
        group={"category"}
        selectedValues={appliedFilters.category}
        updateParams={updateParams}
      />
      <hr className="text-gray-300 " />
      <FilterGroup
        section={section}
        title={"BRANDS"}
        options={filters[section].brand}
        group={"brand"}
        selectedValues={appliedFilters.brand}
        updateParams={updateParams}
      />
      <hr className="text-gray-300 " />
      <FilterGroup
        section={section}
        title={"COLORS"}
        options={filters[section].color}
        group={"color"}
        selectedValues={appliedFilters.color}
        updateParams={updateParams}
      />
    </div>
  );
};

export default Filters;
