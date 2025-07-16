import { useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import getProductsById from "../../utilities/getProductsById";
import ProductCard from "../../components/ProductCard/ProductCard";
import useGetCartWishlist from "../../hooks/useGetCartWishlist";

const Cart = () => {
  const [cartItemIds, setCartItemIds] = useLocalStorage("cart", []);
  const [cartItems, setCartItems] = useState([]);
  
  useEffect(() => {
    setCartItems(getProductsById(cartItemIds));
  }, [cartItemIds]);

  const {  cart, handleToggleCart } =
    useGetCartWishlist();

  const handleRemoveFromCart = (e, item) => {
    e.stopPropagation();
    handleToggleCart(item);
    setCartItemIds(localStorage.getItem("cart"));
    //setWishlistItemIds(localStorage.getItem("wishlist"));
  };
  console.log(cartItemIds);
  // useEffect(() => {
  //   setWishlistItems(getProductsById(wishlistItemIds));
  // }, [wishlistItemIds]);

  return (
    <div className=" pt-25 px-20 flex flex-wrap flex-row justify-between bg-gray-200">
      {cartItems.map((item) => (
        <div key={item.id} className="w-50 my-2">
          <ProductCard
            item={item}
            isForWishlist
            handleRemoveFromCart={handleRemoveFromCart}
          />
        </div>
      ))}
    </div>
  );
};

export default Cart;
