import { useContext } from "react";
import useGetCartWishlist from "../../hooks/useGetCartWishlist";

const Cart = () => {
  const { cart } = useGetCartWishlist();
  return (
    <div className=" pt-25">
      {cart.map((item) => (
        <div>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
