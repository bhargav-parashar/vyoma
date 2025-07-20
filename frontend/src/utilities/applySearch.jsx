const applySearch = ( arr, searchtext ) =>{
    
    if(searchtext === '') return arr;

    const filteredProducts = arr.filter((product)=>{
        
        return product.name.toLowerCase().includes(searchtext.trim().toLowerCase());
       
    })

    return filteredProducts;
}

export {applySearch};
