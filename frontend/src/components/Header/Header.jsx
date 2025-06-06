import React from "react";
import logo from "../../assets/logo.png";
const tabs = ["MEN", "WOMEN", "KIDS", "HOME", "BEAUTY", "GENZ"];
const Header = ({ setIsModlaOpen, setHoveredTab, hoveredTab }) => {
  const getBorderColor = (idx) => {
    switch (idx) {
      case 0:
        return "border-red-400";

      case 1:
        return "border-pink-500";

      case 2:
        return "border-orange-400";

      case 3:
        return "border-yellow-400";

      case 4:
        return "border-teal-500";

      case 5:
        return "border-blue-500";

      default:
        return "border-blue-500";
    }
  };
  const handleMouseEnter = (tab) => {
    setIsModlaOpen(true);
    setHoveredTab(tab);
  };
  const handleMouseLeave = () => {
    setIsModlaOpen(false);
    setHoveredTab(-1);
  };
  return (
    <div className="flex items-center justify-between bg-white h-20 px-10 shadow-lg z-20 fixed w-[100%] ">
      <div className="h-[100%] flex justify-start items-center gap-10">
        <div className="cursor-pointer h-[100%] flex justify-center items-center p-3">
          <img src={logo} className="h-[100%]" />
        </div>
        <div className=" flex justify-start gap-0 text-sm font-bold text-gray-700 h-[100%]">
          {tabs.map((item, idx) => (
            <div
              key={idx}
              className={`${
                idx == hoveredTab ? ` border-b-4` : ``
              } ${getBorderColor(idx)} cursor-pointer h-[100%] flex justify-center items-center px-5`}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={() => handleMouseLeave()}
            >
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>

      <p>Header</p>
    </div>
  );
};

export default Header;
