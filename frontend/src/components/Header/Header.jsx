import { useNavigate } from "react-router-dom";
import { tabs } from "../../constants/sectionTabs.json";
import SearchBar from "../SearchBar/SearchBar";
import { allProducts } from "../../constants/productList.json";
import { useContext } from "react";
import { FilterContext } from "../../contexts/FilterContext";
import { UserIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const {
    search,
    hoveredTab,
    setIsModalOpen,
    handleMouseEnter,
    handleMouseLeave,
    clearFilters,
    handleSearch,
  } = useContext(FilterContext);

  
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

  return (
    <div className="  flex items-center justify-between bg-white h-20 px-10 shadow-lg z-20 fixed w-[100%]">
      <div className="h-[100%] flex justify-start items-center gap-10 w-[40%] ">
        {/*HOME IMAGE*/}
        <div
          className="cursor-pointer h-[100%] flex justify-center items-center p-3"
          onClick={() => handleSectionClick("men")}
        >
          <img src={"/assets/logo.png"} className="h-[100%]" />
        </div>

        {/*SECTION TABS*/}
        <div className="flex justify-start gap-0 text-sm font-bold text-gray-700 h-[100%]">
          {tabs.map((item) => (
            <div key={item.id} className="h-[100%]">
              <div
                className={` cursor-pointer  flex justify-center items-center px-5 h-[96%] `}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={() => handleMouseLeave()}
              >
                <p onClick={() => handleSectionClick(item.value)}>
                  {item.value}
                </p>
              </div>

              <div
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={() => handleMouseLeave()}
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
          <div className="flex flex-col items-center justify-end hover:cursor-default">
            <UserIcon className="h-5 w-5" />
            <p className="text-xs font-bold">Profile</p>
          </div>
          <div
            className="flex flex-col items-center justify-end hover:cursor-pointer "
            onClick={handleWishlistClick}
          >
            <HeartIcon className="h-5 w-5" />
            <p className="text-xs font-bold">Wishlist</p>
          </div>
          <div
            className="flex flex-col items-center justify-end hover:cursor-pointer"
            onClick={handleCartClick}
          >
            <ShoppingBagIcon className="h-5 w-5" />
            <p className="text-xs font-bold ">Bag</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
