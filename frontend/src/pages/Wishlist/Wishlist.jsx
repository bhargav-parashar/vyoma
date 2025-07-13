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
    <div className=" pt-25 flex flex-wrap flex-row gap-5">
      {wishlistItems.map((item) => (
        <div key={item.id} className="w-50 border">
          <ProductCard item={item} />
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
