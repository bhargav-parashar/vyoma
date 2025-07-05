const applyFilter = (products, appliedFilters) => {
  const filteredProducts = products.filter((product) => {
    const matchSection =
      appliedFilters.section.length == 0 ||
      appliedFilters.section === product.section;
    
      const matchColor =
      appliedFilters.color.length == 0 ||
      appliedFilters.color.includes(product.color);

    const matchBrand =
      appliedFilters.brand.length == 0 ||
      appliedFilters.brand.includes(product.brandKey);

    const matchCategory =
      appliedFilters.category.length == 0 ||
      appliedFilters.category.includes(product.category);

    const matchOrigin =
      appliedFilters.origin.length == 0 ||
      appliedFilters.origin.includes(product.origin);

    const matchSize =
      appliedFilters.size.length == 0 ||
      product.size.filter((item) => appliedFilters.size.includes(item)).length >
        0;

    return (
      matchSection && matchColor && matchBrand && matchCategory && matchOrigin && matchSize
    );
  });

  return filteredProducts;
};

export { applyFilter };
