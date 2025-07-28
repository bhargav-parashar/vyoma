import { useNavigate } from "react-router-dom";
import { tabs } from "../../constants/sectionTabs.json";
import SearchBar from "../SearchBar/SearchBar";
import { allProducts } from "../../constants/productList.json";
import { useContext } from "react";
import { FilterContext } from "../../contexts/FiltersContext";
//import {CartWishlistContext} from "../../contexts/CartWishlistContext";
import { UserIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";

const MobileHeader = () => {
  const {
    search,
    hoveredTab,
    setIsModalOpen,
    handleMouseEnter,
    handleMouseLeave,
    clearFilters,
    handleSearch,
  } = useContext(FilterContext);

  // const {cart} = useContext(CartWishlistContext);

  const navigate = useNavigate();

  const getBgColor = (id) => {
    switch (id) {
      case 1:
        return "bg-red-400";

      case 2:
        return "bg-pink-500";

      case 3:
        return "bg-orange-400";

      case 4:
        return "bg-yellow-400";

      default:
        return "bg-blue-500";
    }
  };

  const handleSectionClick = (item) => {
    setIsModalOpen(false);
    navigate(`/products/${item.toLowerCase()}`);
  };

  const handleSelect = (val) => {
    handleSearch(val);
  };

  const onInputChange = () => {
    handleSearch("");
  };

  const handleWishlistClick = () => {
    navigate(`/wishlist`);
  };

  const handleCartClick = () => {
    navigate(`/cart`);
  };

  // Selector hook - gives access to store
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="  flex items-center justify-between bg-blue-600 h-20 px-10 shadow-lg z-20 fixed w-[100%]">
      {/*SEARCH BAR*/}
     
     <div className="h-[100%] flex items-center justify-start w-[70%] gap-7 ">
      <SearchBar
        placeholder={"Search products"}
        staticData={allProducts}
        dataKey={"name"}
        onSelect={(val) => handleSelect(val)}
        onChange={onInputChange}
        search={search}
        clearFilters={clearFilters}
      />
      </div>

      <div className="h-[100%] flex items-center justify-end w-[30%] gap-7 ">
        <div className="flex flex-col items-center justify-end hover:cursor-default">
          <UserIcon className="h-5 w-5" />
          <p className="text-xs font-bold">Guest</p>
        </div>
        <div
          className="flex flex-col items-center justify-end hover:cursor-pointer "
          onClick={handleWishlistClick}
        >
          <HeartIcon className="h-5 w-5" />
          <p className="text-xs font-bold">Wishlist</p>
        </div>
        <div
          className="relative flex flex-col items-center justify-end hover:cursor-pointer"
          onClick={handleCartClick}
        >
          <ShoppingBagIcon className="h-5 w-5" />
          <p className="text-xs font-bold ">Bag</p>
          {cartItems.length > 0 && (
            <div className="absolute bottom-6 left-3 flex items-center justify-center rounded-full bg-rose-400  h-5 w-5 text-xs font-bold text-white">
              {cartItems.length}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
