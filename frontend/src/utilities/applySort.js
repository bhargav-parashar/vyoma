const compareDates = (date1, date2) =>{
    if(date1 > date2 ){
        return 1;
    }else if(date1 < date2){
        return -1;
    }else{
        return 0;
    }
}


const applySort = (arr, val) =>{
    switch(val){
        case "recommended" : 
        return arr;
         
        case "date":
        return arr.slice().sort((a,b)=>compareDates(b.launchDate, a.launchDate));
        
        case "popularity":
        return arr.slice().sort((a,b)=> parseInt(b.rating.count) - parseInt(a.rating.count) );
            
        case "discount":
        return arr.slice().sort((a,b)=> parseInt(b.price.discount) - parseInt(a.price.discount) );
            
        case "price-high-low":
        return arr.slice().sort((a,b)=> parseInt(b.price.discounted) - parseInt(a.price.discounted) );
            
        case "price-low-high":
        return arr.slice().sort((a,b)=> parseInt(a.price.discounted) - parseInt(b.price.discounted) );

        case "rating":
        return arr.slice().sort((a,b)=> parseFloat(b.rating.average) - parseFloat(a.rating.average) );
           
        default :
        return arr;
    }
  }

export {applySort};