import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard/ProductCard";
import { removeItemFromWishlist } from "../../redux/slices/wishlistSlice";
import {addItem} from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import useSnackbar from "../../hooks/useSnackbar";

const Wishlist1 = () => {
  const wishlistItems = useSelector((store) => store.wishlist.items);
  const dispatch = useDispatch();
  const { showSnackbar } = useSnackbar();

  const handleRemoveFromWishlist = (e, item) => {
    e.stopPropagation();
    dispatch(removeItemFromWishlist(item.id));
    showSnackbar("Item removed from wishlist", 3000, "success");
  };
  
  const handleAddToBag = (e,item) =>{
    e.stopPropagation();
    // Dispatch an action
    const productToAdd = {
      id : item.id,
      name : item.name,
      brand : item.brand,
      size : item.size,
      price : item.price,
      quantity : 1,
      image : item.images[0]
    }
    dispatch(addItem(productToAdd));
    dispatch(removeItemFromWishlist(item.id));
    showSnackbar("Added item to bag", 3000, "success");
  }

  return (
    <div className="h-[100vh] pt-25 px-20 flex flex-wrap flex-row justify-between bg-gray-200">
      {wishlistItems.map((item) => (
        <div key={item.id} className="w-50 my-2">
          <ProductCard
            item={item}
            isForWishlist
            handleRemoveFromWishlist={(e)=>handleRemoveFromWishlist(e,item)}
            handleMoveToCart={(e) => handleAddToBag(e,item)}
          />
        </div>
      ))}
    </div>
  );
};

export default Wishlist1;
