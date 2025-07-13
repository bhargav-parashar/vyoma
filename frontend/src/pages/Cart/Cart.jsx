import useLocalStorage from "../../hooks/useLocalStorage";

const Cart = () => {
  const [cartItems, setCartItems] = useLocalStorage("cart", []);
  return (
    <div className=" pt-25">
      {cartItems.map((item) => (
        <div key={item}>
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
