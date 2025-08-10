import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard/ProductCard";
import { removeItemFromWishlist } from "../../redux/slices/wishlistSlice";
import { addItem } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import useSnackbar from "../../hooks/useSnackbar";
import { InboxIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
//import { FilterContext } from "../../contexts/FiltersContext";
//import { useContext } from "react";
import CategoryModal from "../../components/CategoryModal/CategoryModal";
import { setIsModalOpen, handleMouseEnter, handleMouseLeave} from "../../redux/slices/modalSlice";

const Wishlist = () => {
  const wishlistItems = useSelector((store) => store.wishlist.items);
  const hoveredTab = useSelector((store)=>store.modal.hoveredTab);
  const isModalOpen = useSelector((store)=>store.modal.isModalOpen);

  const dispatch = useDispatch();
  const { showSnackbar } = useSnackbar();

  const handleRemoveFromWishlist = (e, item) => {
    e.stopPropagation();
    dispatch(removeItemFromWishlist(item.id));
    showSnackbar("Item removed from wishlist", 3000, "success");
  };

  const handleAddToBag = (e, item) => {
    e.stopPropagation();
    // Dispatch an action
    const productToAdd = {
      id: item.id,
      name: item.name,
      brand: item.brand,
      size: item.size,
      price: item.price,
      quantity: 1,
      image: item.images[0],
    };
    dispatch(addItem(productToAdd));
    dispatch(removeItemFromWishlist(item.id));
    showSnackbar("Added item to bag", 3000, "success");
  };
  const navigate = useNavigate();

  const handleGoToProducts = () => {
    navigate(`/`);
  };
  //GET CONTEXT VARIABLES
  //const {
      //hoveredTab,
      //setIsModalOpen,
      //handleMouseEnter,
      //handleMouseLeave,
      //isModalOpen,
  //} = useContext(FilterContext);

  return (
    <div className={`min-h-screen  bg-gray-200 overflow-x-hidden`}>
      {wishlistItems.length > 0 && (
        <p className="md:pt-25 sm:pt-30 md:px-20 sm:px-5">
          <span className="font-bold">{`My Wishlist `}</span>
          <span>{`${wishlistItems.length} items `}</span>
        </p>
      )}
      <div
        className={`${
          wishlistItems.length == 0 ? `pt-25` : `pt-5`
        }  flex flex-wrap flex-row justify-start gap-6 bg-gray-200 sm:px-5 md:px-20`}
      >
        {wishlistItems.map((item) => (
          <div key={item.id} className="sm:w-38 md:w-50 my-2">
            <ProductCard
              item={item}
              isForWishlist
              handleRemoveFromWishlist={(e) =>
                handleRemoveFromWishlist(e, item)
              }
              handleMoveToCart={(e) => handleAddToBag(e, item)}
            />
          </div>
        ))}
      </div>
      {wishlistItems.length == 0 && (
        <div className="sm:pt-10 md:pt-20 flex flex-col items-center ">
          <div className="sm:w-[60%] md:w-[27%]  text-center">
            <p className="font-bold mb-5">YOUR WISHLIST IS EMPTY</p>
            <p className="text-gray-500 text-justify mb-5">
              Add items that you like to your wishlist. Review them anytime and
              easily move them to the bag.
            </p>
          </div>
          <InboxIcon className=" text-gray-400 h-20" />
          <button
            className="my-4 border  border-blue-700 rounded px-5 py-4 cursor-pointer  hover:brightness-115 font-bold text-blue-700"
            onClick={() => handleGoToProducts()}
          >
            <span>CONTINUE SHOPPING</span>
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
    </div>
  );
};

export default Wishlist;
