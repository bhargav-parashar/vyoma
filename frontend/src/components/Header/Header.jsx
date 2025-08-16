import { useNavigate } from "react-router-dom";
import { tabs } from "../../constants/sectionTabs.json";
import SearchBar from "../SearchBar/SearchBar";
import { allProducts } from "../../constants/productList.json";
import { useContext } from "react";
import { FilterContext } from "../../contexts/FiltersContext";
import { UserIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  setIsModalOpen,
  handleMouseEnter,
  handleMouseLeave,
} from "../../redux/slices/modalSlice";

import Toggler from "../Toggler/Toggler";

const Header = () => {
  // Selector hook
  const cartItems = useSelector((store) => store.cart.items);
  const currTheme = useSelector((store) => store.theme.currTheme);
  const hoveredTab = useSelector((store) => store.modal.hoveredTab);
  const dispatch = useDispatch();

  const { search, clearFilters, handleSearch, productsFilters } =
    useContext(FilterContext);

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
    dispatch(setIsModalOpen(false));
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

  return (
    <div>
      {/* DESKTOP HEADER*/}
      <div className=" sm:hidden md:flex items-center justify-between bg-primary-extra-light dark:bg-primary-extra-dark h-20 px-10 shadow-lg z-20 fixed w-[100%]  ">
        <div className="h-[100%] flex justify-start items-center gap-10 w-[40%] ">
          {/*HOME IMAGE*/}
          <div
            className="cursor-pointer h-[100%] flex justify-center items-center p-3"
            onClick={() => handleSectionClick("men")}
          >
            {currTheme == "dark" ? (
              <img src={"/assets/logoDark.png"} className="h-[100%]" />
            ) : (
              <img src={"/assets/logo.png"} className="h-[100%]" />
            )}
          </div>

          {/*SECTION TABS*/}
          <div className="flex justify-start gap-0 text-sm font-bold text-gray-700 h-[100%]">
            {tabs.map((item) => (
              <div key={item.id} className="h-[100%]">
                <div
                  className={` cursor-pointer  flex justify-center items-center px-5 h-[96%] `}
                  onMouseEnter={() => dispatch(handleMouseEnter(item.id))}
                  onMouseLeave={() => dispatch(handleMouseLeave())}
                >
                  <p
                    className="dark:text-primary-extra-light"
                    onClick={() => handleSectionClick(item.value)}
                  >
                    {item.value}
                  </p>
                </div>

                <div
                  onMouseEnter={() => dispatch(handleMouseEnter(item.id))}
                  onMouseLeave={() => dispatch(handleMouseLeave())}
                  className={`${
                    item.id == hoveredTab ? getBgColor(item.id) : ``
                  } h-[4%]`}
                ></div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-[100%] w-[60%] flex items-center justify-end">
          {/*SEARCH BAR*/}

          <SearchBar
            placeholder={"Search products"}
            staticData={allProducts}
            dataKey={"name"}
            onSelect={(val) => handleSelect(val)}
            onChange={onInputChange}
            search={search}
            clearFilters={clearFilters}
          />

          <div className="h-[100%] flex items-center justify-end w-[30%] gap-7 ">
            <div
              className="flex flex-col items-center justify-end hover:cursor-pointer dark:text-primary gap-0.5"
              onClick={handleWishlistClick}
            >
              <HeartIcon className="h-5 w-5 " />
              <p className="text-xs font-bold">Wishlist</p>
            </div>
            <div
              className="relative flex flex-col items-center justify-end hover:cursor-pointer dark:text-primary gap-0.5"
              onClick={handleCartClick}
            >
              <ShoppingBagIcon className="h-5 w-5 " />
              <p className="text-xs font-bold ">Bag</p>
              {cartItems.length > 0 && (
                <div className="absolute bottom-6 left-3 flex items-center justify-center rounded-full bg-rose-400  h-5 w-5 text-xs font-bold text-white">
                  {cartItems.length}
                </div>
              )}
            </div>
            <div className="flex flex-col items-center justify-end cursor-pointer dark:text-primary gap-0.5">
              <Toggler />
              <p className="text-xs font-bold ">Dark</p>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE HEADER*/}
      <div className=" md:hidden sm:flex-col  bg-white dark:bg-primary-extra-dark h-25 shadow-lg z-22 fixed w-[100%] ">
        <div className="flex items-center justify-between bg-white dark:bg-primary-extra-dark h-15 px-5 mt-2 w-[100%] ">
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

          <div className="h-[100%] flex items-center justify-end w-[30%] gap-4 dark:text-primary-extra-light ">
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
            <div className="flex flex-col items-center justify-end hover:cursor-default">
              <Toggler />
              <p className="text-xs font-bold ">Dark</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center  gap-3 text-sm font-bold text-gray-700">
          {tabs.map((item) => (
            <div key={item.id} className="h-[100%]">
              <div
                className={` cursor-pointer  flex justify-center items-center px-5 h-[96%] `}
              >
                <p
                  className={`${
                    item.value.toLowerCase() == productsFilters.section[0]
                      ? getBgColor(item.id).replace("bg", "text")
                      : `dark:text-primary-extra-light`
                  } `}
                  onClick={() => handleSectionClick(item.value)}
                >
                  {item.value}
                </p>
              </div>

              <div
                className={`${
                  item.id == hoveredTab ? getBgColor(item.id) : ``
                } h-[4%]`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
