import { useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import getProductsById from "../../utilities/getProductsById";
import ProductCard from "../../components/ProductCard/ProductCard";
import useGetCartWishlist from "../../hooks/useGetCartWishlist";

const Wishlist = () => {
  const [wishlistItemIds, setWishlistItemIds] = useLocalStorage("wishlist", []);
  const [wishlistItems, setWishlistItems] = useState([]);
  
  useEffect(() => {
    setWishlistItems(getProductsById(wishlistItemIds));
  }, [wishlistItemIds]);

  const { wishlist, handleToggleWishlist, cart, handleToggleCart } =
    useGetCartWishlist();

  const handleRemoveFromWishlist = (e, item) => {
    e.stopPropagation();
    handleToggleWishlist(item);
    setWishlistItemIds(localStorage.getItem("wishlist"));
    //setWishlistItemIds(localStorage.getItem("wishlist"));
  };
  console.log(wishlistItemIds);
  // useEffect(() => {
  //   setWishlistItems(getProductsById(wishlistItemIds));
  // }, [wishlistItemIds]);

  return (
    <div className=" pt-25 px-20 flex flex-wrap flex-row justify-between bg-gray-200">
      {wishlistItems.map((item) => (
        <div key={item.id} className="w-50 my-2">
          <ProductCard
            item={item}
            isForWishlist
            handleRemoveFromWishlist={handleRemoveFromWishlist}
          />
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
