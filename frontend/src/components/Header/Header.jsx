import React from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-white h-20 px-10 shadow-lg z-20 ">
      <div className="h-[70%]">
        <img src={logo} className="h-[100%]" />
      </div>
      <p>Header</p>
    </div>
  );
};

export default Header;
