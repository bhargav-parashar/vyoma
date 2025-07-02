import FilterGroup from "./FilterGroup";
import filters from "../../constants/filters.json";

const Filters = ({ section, productsFilters, updateParams }) => {
  
  return (
    <div className="h-screen flex flex-col">
      <hr className="text-gray-300 " />

      <FilterGroup
        section={section}
        title={"CATEGORIES"}
        options={filters[section].category}
        group={"category"}
        selectedValues={productsFilters.category}
        updateParams={updateParams}
      />
      <hr className="text-gray-300 " />
      <FilterGroup
        section={section}
        title={"BRANDS"}
        options={filters[section].brand}
        group={"brand"}
        selectedValues={productsFilters.brand}
        updateParams={updateParams}
      />
      <hr className="text-gray-300 " />
      <FilterGroup
        section={section}
        title={"COLORS"}
        options={filters[section].color}
        group={"color"}
        selectedValues={productsFilters.color}
        updateParams={updateParams}
      />
    </div>
  );
};

export default Filters;
