import { useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import getProductsById from "../../utilities/getProductsById";
import ProductCard from "../../components/ProductCard/ProductCard";
import useGetCartWishlist from "../../hooks/useGetCartWishlist";

const Wishlist = () => {
  const { wishlist, handleToggleWishlist, cart, handleToggleCart } = useGetCartWishlist();
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    setWishlistItems(getProductsById(wishlist));
  }, [wishlist]);

  const handleRemoveFromWishlist = (e, item) => {
    e.stopPropagation();
    handleToggleWishlist(item, true);
  };

  const handleMoveToCart = (e, item) =>{
    e.stopPropagation();
    handleToggleCart(item);
    handleToggleWishlist(item, false);
  }

  return (
    <div className="h-[100vh] pt-25 px-20 flex flex-wrap flex-row justify-between bg-gray-200">
      {wishlistItems.map((item) => (
        <div key={item.id} className="w-50 my-2">
          <ProductCard
            item={item}
            isForWishlist
            handleRemoveFromWishlist={handleRemoveFromWishlist}
            handleMoveToCart = {handleMoveToCart}
          />
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
