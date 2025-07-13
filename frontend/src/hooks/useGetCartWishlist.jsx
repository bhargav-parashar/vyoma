import useSnackbar from "./useSnackbar";
import useLocalStorage from "./useLocalStorage";

const useGetCartWishlist = () =>{
    const[wishlist, setWishlist] = useLocalStorage("wishlist",[]);
    const[cart, setCart] = useLocalStorage("cart",[]);
    const { showSnackbar } = useSnackbar();
    
    //ADD OR REMOVE FROM WISHLST
    const handleToggleWishlist = (product) =>{
        
        const isExists = wishlist.find((item)=>item == product.id);
        if(!isExists){
            setWishlist(prev=>[...prev, product.id]);
            showSnackbar("Added item to wishlist", 3000, "success");
        }
        else{
            setWishlist(prev=>prev.filter((item)=>item != product.id));
            showSnackbar("Removed item from wishlist", 3000, "success");
        }
    }


    //ADD OR REMOVE FROM CART
    const handleToggleCart = (product) =>{
        const isExists = cart.find((item)=>item == product.id);
        if(!isExists){
            setCart(prev=>[...prev, product.id]);
            showSnackbar("Added item to cart", 3000, "success");
        }
        else{
            setCart(prev=>prev.filter((item)=>item != product.id));
            showSnackbar("Removed item from cart", 3000, "success");
        }
    }

    return { wishlist, handleToggleWishlist, cart, handleToggleCart };

 
}

export default useGetCartWishlist;