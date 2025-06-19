const applySearch = ( arr, searchtext ) =>{
    
    if(searchtext === '') return arr;

    const filteredProducts = arr.filter((product)=>{
        
        const productMatch = product.name.toLowerCase().includes(searchtext.trim().toLowerCase());
        const brandMatch = product.brand.toLowerCase().includes(searchtext.trim().toLowerCase());
        const res =  productMatch || brandMatch ;
        
        return res;
    })

    return filteredProducts;
}

export {applySearch};
