import React from "react";
import logo from "../../assets/logo.png";
import { useNavigate} from "react-router-dom";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import {tabs} from "../../constants/sectionTabs.json";


const Header = ({
  setIsModalOpen,
  hoveredTab,
  handleMouseLeave,
  handleMouseEnter,
  searchText,
  handleSearch
}) => {

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

  const handleSectionClick = (item) =>{
    setIsModalOpen(false);
    navigate(`/${item.toLowerCase()}-products`);
  }

  return (
    <div className="  flex items-center justify-between bg-white h-20 px-10 shadow-lg z-20 fixed w-[100%]">
      
      <div className="h-[100%] flex justify-start items-center gap-10 w-[40%] ">
        
        {/*HOME IMAGE*/}
        <div className="cursor-pointer h-[100%] flex justify-center items-center p-3">
          <img src={logo} className="h-[100%]" />
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
                <p onClick={()=>handleSectionClick(item.value)} >{item.value}</p>
              </div>

              <div
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={() => handleMouseLeave()}
                className={`${item.id == hoveredTab ? getBgColor(item.id) : ``} h-[4%]`}
              ></div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[100%] w-[60%] flex items-center justify-end ">
      {/*SEARCH BAR*/}
      <div className="relative h-[100%] flex items-center w-[70%] ">
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
        <input
          type="text"
          value={searchText}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search for products or brands"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-sm  bg-gray-100 text-sm focus:outline-none focus:bg-transparent "
        />
      </div>
      
      <div className="h-[100%] flex items-center justify-center w-[30%] ">
        <p>{hoveredTab}</p>
      </div>
      
      </div>
    </div>
  );
};

export default Header;
