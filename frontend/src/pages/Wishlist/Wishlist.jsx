import {useContext} from "react";
import { CartWishlistContext } from "../../contexts/CartWishlistContext";

const Wishlist = () => {
  const { wishlist, handleToggleWishlist, cart, handleToggleCart } =
    useContext(CartWishlistContext);

  return (
    <div className=" pt-25">
      {wishlist.map((item) => (
        <div>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
