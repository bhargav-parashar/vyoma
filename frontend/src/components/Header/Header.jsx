import React from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="flex justify-between bg-pink-100 h-12 ">
      <div>
        <img src={logo} className="h-15" />


      </div>
      <p>Header</p>
    </div>
  );
};

export default Header;
