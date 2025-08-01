import { useSelector } from "react-redux";

const CartTotal = ({setIsCheckoutModalOpen}) => {
  const cartItems = useSelector((store) => store.cart.items);
  const handlePlaceOrder = () =>{
    setIsCheckoutModalOpen(true);
  }
  return (
    <div className="md:ml-5 my-2 bg-white rounded border border-gray-300 p-4">
      <p className="text-sm font-semibold text-gray-600">{`PRICE DETAILS (${cartItems.length} Items) `}</p>
      <p className="my-4 text-sm  flex justify-between">
        <span>{`Total MRP`}</span>
        <span>{`₹ ${cartItems.reduce(
          (acc, curr) => curr.price.original * curr.quantity + acc,
          0
        )}`}</span>
      </p>
      <p className="my-4 text-sm  flex justify-between">
        <span>{`Discount on MRP`}</span>
        <span className="text-green-600 ">{`- ₹ ${cartItems.reduce(
          (acc, curr) => {
            const delta = curr.price.original - curr.price.discounted;
            return delta * curr.quantity + acc;
          },
          0
        )}`}</span>
      </p>
      <p className="pb-4 my-4 text-sm border-gray-300 border-b-1 flex justify-between">
        <span>{`Platform Fee`}</span>
        <span>{`₹ 20`}</span>
      </p>
      <p className="mt-4 mb-8 text-sm  flex justify-between font-bold">
        <span>{`Total Amount`}</span>
        <span>{`₹ ${
          20 +
          cartItems.reduce(
            (acc, curr) => curr.price.original * curr.quantity + acc,
            0
          ) -
          cartItems.reduce((acc, curr) => {
            const delta = curr.price.original - curr.price.discounted;
            return delta * curr.quantity + acc;
          }, 0)
        }  `}</span>
      </p>
      <button
        className="border rounded px-5 py-2 w-[100%] cursor-pointer flex items-center justify-center gap-2 bg-rose-400 text-white font-bold hover:brightness-90"
        onClick={handlePlaceOrder}
      >
        <span>PLACE ORDER</span>
      </button>
    </div>
  );
};

export default CartTotal;
