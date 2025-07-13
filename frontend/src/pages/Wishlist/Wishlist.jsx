import { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import getProductsById from "../../utilities/getProductsById";
import ProductCard from "../../components/ProductCard/ProductCard";

const Wishlist = () => {
  const [wishlistItemIds, setWishlistItemIds] = useLocalStorage("wishlist", []);
  const [wishlistItems, setWishlistItems] = useState(
    getProductsById(wishlistItemIds)
  );

  return (
    <div className=" pt-25 px-20 flex flex-wrap flex-row justify-between bg-gray-200">
      {wishlistItems.map((item) => (
        <div key={item.id} className="w-50 my-2">
          <ProductCard item={item} isForWishlist/>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
