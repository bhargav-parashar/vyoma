import React from "react";
import logo from "../../assets/logo.png";
const tabs = ["MEN", "WOMEN", "KIDS", "HOME", "BEAUTY", "GENZ"];
const Header = ({ setIsModlaOpen }) => {
  return (
    <div className="flex items-center justify-between bg-white h-20 px-10 shadow-lg z-20 fixed w-[100%] ">
      <div className="h-[100%] flex justify-start items-center gap-10">
        <div className="cursor-pointer h-[100%] flex justify-center items-center p-3">
          <img src={logo} className="h-[100%]" />
        </div>
        <div className=" flex justify-start gap-0 text-sm font-bold text-gray-700 h-[100%]">
          {tabs.map((item, idx) => (
            <div
              className="border-b border-red-500 cursor-pointer h-[100%] flex justify-center items-center p-5"
              onMouseEnter={() => setIsModlaOpen(true)}
              onMouseLeave={() => setIsModlaOpen(false)}
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
