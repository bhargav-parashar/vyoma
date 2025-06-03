import React from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-white h-20 px-10 shadow-lg z-20 fixed w-[100%] ">
      <div className="h-[70%] flex justify-start items-center gap-10">
        <img src={logo} className="h-[100%]" />
        <div className=" flex justify-start gap-8 text-sm font-bold text-gray-700">
          <p>MEN</p>
          <p>WOMEN</p>
          <p>KIDS</p>
          <p>HOME</p>
          <p>BEAUTY</p>
          <p>GENZ</p>
        </div>
      </div>
      
      <p>Header</p>
    </div>
  );
};

export default Header;
