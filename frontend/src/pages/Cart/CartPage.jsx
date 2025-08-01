import { useSelector } from "react-redux";
import CartCard from "../../components/ProductCard/CartCard";
import CartTotal from "../../components/CartTotal/CartTotal";
import { useNavigate } from "react-router-dom";
import { InboxIcon } from "@heroicons/react/24/outline";
import { FilterContext } from "../../contexts/FiltersContext";
import { useContext } from "react";
import CategoryModal from "../../components/CategoryModal/CategoryModal";
import CheckoutModal from "../../components/CheckoutModal/CheckoutModal";

const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const navigate = useNavigate();
  const handleGoToWishlist = () => {
    navigate(`/wishlist`);
  };
  //GET CONTEXT VARIABLES
  const {
    hoveredTab,
    setIsModalOpen, 
    handleMouseEnter,
    handleMouseLeave,
    isModalOpen,
    isCheckoutModalOpen,
    setIsCheckoutModalOpen
  } = useContext(FilterContext);

 

  return (
    <div className={`md:pt-25 sm:pt-30 md:px-20 sm:px-5 bg-gray-200 min-h-screen pb-1 ` }>
      {cartItems.length > 0 && (

        //DESKTOP
        <div className = "sm:hidden md:block">
          <div className="flex gap-5">
            <div className="w-[60%]">
              {cartItems.map((item) => (
                <CartCard key={item.id} item={item} />
              ))}
            </div>
            <div className="w-[40%]  border-gray-300 border-l-1">
              <CartTotal setIsCheckoutModalOpen={setIsCheckoutModalOpen} />
            </div>
          </div>
        </div>
      )}

      {cartItems.length > 0 && (

        //MOBILE
        <div className = "md:hidden">
          <div className="flex-col">
            <div className="w-[100%]">
              {cartItems.map((item) => (
                <CartCard key={item.id} item={item} />
              ))}
            </div>
            <div className="w-[100%]  border-gray-300 border-t-1">
              <CartTotal setIsCheckoutModalOpen={setIsCheckoutModalOpen} />
            </div>
          </div>
        </div>
      )}


      {cartItems.length == 0 && (
        <div className=" sm:pt-10 md:pt-20 flex flex-col items-center ">
          <div className="sm:w-[60%] md:w-[27%]  text-center">
            <p className="font-bold mb-5">YOUR BAG IS EMPTY</p>
            <p className="text-gray-500 text-justify mb-5">
              There is nothing in your bag. Let's add some items.   
            </p>
          </div>
          <InboxIcon className=" text-gray-400 h-20" />
          <button
            className="my-4 border  border-red-400 rounded px-5 py-4 cursor-pointer  hover:brightness-115 font-bold text-red-400 "
            onClick={() => handleGoToWishlist()}
          >
            <span>ADD ITEMS FROM WISHLIST</span>
          </button>
        </div>
      )}
       {isModalOpen && (
        <CategoryModal
          hoveredTab={hoveredTab}
          handleMouseLeave={handleMouseLeave}
          handleMouseEnter={handleMouseEnter}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      {
        isCheckoutModalOpen && (
          <CheckoutModal setIsCheckoutModalOpen={setIsCheckoutModalOpen}/>
        )
      }
    </div>
  );
};

export default CartPage;
