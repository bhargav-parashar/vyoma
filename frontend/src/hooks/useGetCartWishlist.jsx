import { useState } from "react";

const useGetCartWishlist = () =>{
    const[wishlist, setWishlist] = useState([]);
    const[cart, setCart] = useState([]);
   
    
    //ADD OR REMOVE FROM WISHLST
    const handleToggleWishlist = (product) =>{
        const isExists = wishlist.find((item)=>item.id == product.id);
        if(!isExists)
            setWishlist(prev=>[...prev, product]);
        else
            setWishlist(prev=>prev.filter((item)=>item.id != product.id));
    }


    //ADD OR REMOVE FROM CART
    const handleToggleCart = (product) =>{
        const isExists = cart.find((item)=>item.id == product.id);
        if(!isExists)
            setCart(prev=>[...prev, product]);
        else
            setCart(prev=>prev.filter((item)=>item.id != product.id));
    }

    return { wishlist, handleToggleWishlist, cart, handleToggleCart };

 
}

export default useGetCartWishlist;