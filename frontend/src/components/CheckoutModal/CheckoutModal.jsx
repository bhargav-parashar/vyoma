import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";
import { clearCart } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import useSnackbar from "../../hooks/useSnackbar";

const CheckoutModal = ({setIsCheckoutModalOpen}) => {
  const expectedDelivery = format(
    new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    "do MMMM yyyy"
  );
  const { showSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const onClose = () =>{
    setIsCheckoutModalOpen(false);
    dispatch(clearCart());
     showSnackbar("Ordered all items from bag.", 3000, "success");
  }
  
  return (
    <div className="fixed inset-0 bg-black/60 bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-md text-center relative ">
        <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />

        <h2 className="text-xl font-bold text-gray-800 mb-2">
          Order Placed Successfully!
        </h2>
        <p className="text-gray-600 mb-6">
          Expect delivery by{" "}
          <span className="font-semibold">{expectedDelivery}</span>
        </p>

        <button
          className="mt-2 px-5 py-3 rounded bg-rose-400 text-white font-semibold hover:brightness-90 transition duration-200 cursor-pointer"
          onClick={onClose}
        >
          Continue
        </button>

        
      </div>
    </div>
  );
};

export default CheckoutModal;
