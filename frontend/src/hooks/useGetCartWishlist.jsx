import { useState } from "react";
import useSnackbar from "./useSnackbar";

const useGetCartWishlist = () =>{
    const[wishlist, setWishlist] = useState([]);
    const[cart, setCart] = useState([]);
     const { showSnackbar } = useSnackbar();
    
    //ADD OR REMOVE FROM WISHLST
    const handleToggleWishlist = (product) =>{
      
        const isExists = wishlist.find((item)=>item.id == product.id);
        if(!isExists){
            setWishlist(prev=>[...prev, product]);
            showSnackbar("Added item to wishlist", 3000, "success");
        }
        else{
            setWishlist(prev=>prev.filter((item)=>item.id != product.id));
            showSnackbar("Removed item from wishlist", 3000, "success");
        }
    }


    //ADD OR REMOVE FROM CART
    const handleToggleCart = (product) =>{
        const isExists = cart.find((item)=>item.id == product.id);
        if(!isExists){
            setCart(prev=>[...prev, product]);
            showSnackbar("Added item to cart", 3000, "success");
        }
        else{
            setCart(prev=>prev.filter((item)=>item.id != product.id));
            showSnackbar("Removed item from cart", 3000, "success");
        }
    }

    return { wishlist, handleToggleWishlist, cart, handleToggleCart };

 
}

export default useGetCartWishlist;