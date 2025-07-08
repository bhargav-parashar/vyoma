import { createContext } from "react";
import useGetCartWishlist from "../hooks/useGetCartWishlist";

const CartWishlistContext = createContext();

const CartWishlistContextProvider = ({ children }) => {
  const { wishlist, handleToggleWishlist, cart, handleToggleCart } = useGetCartWishlist();

  const value = {
    wishlist,
    handleToggleWishlist,
    cart,
    handleToggleCart,
  };
  return (
    <CartWishlistContext.Provider value={value}>
      {children}
    </CartWishlistContext.Provider>
  );
};

export { CartWishlistContextProvider, CartWishlistContext };
