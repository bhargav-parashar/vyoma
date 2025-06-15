import React from "react";
import logo from "../../assets/logo.png";
import { useNavigate} from "react-router-dom";
const tabs = ["MEN", "WOMEN", "KIDS", "HOME"];

const Header = ({
  setIsModalOpen,
  hoveredTab,
  handleMouseLeave,
  handleMouseEnter,
}) => {

  const navigate = useNavigate();

  const getBgColor = (idx) => {
    switch (idx) {
      case 0:
        return "bg-red-400";

      case 1:
        return "bg-pink-500";

      case 2:
        return "bg-orange-400";

      case 3:
        return "bg-yellow-400";

      case 4:
        return "bg-teal-500";

      case 5:
        return "bg-blue-500";

      default:
        return "bg-blue-500";
    }
  };

  const handleSectionClick = (item) =>{
    setIsModalOpen(false);
    navigate(`/${item.toLowerCase()}-products`)
  }

  return (
    <div className="  flex items-center justify-between bg-white h-20 px-10 shadow-lg z-20 fixed w-[100%] ">
      <div className=" h-[100%] flex justify-start items-center gap-10">
        <div className="cursor-pointer h-[100%] flex justify-center items-center p-3">
          <img src={logo} className="h-[100%]" />
        </div>

        <div className="flex justify-start gap-0 text-sm font-bold text-gray-700 h-[100%]">
          {tabs.map((item, idx) => (
            <div key={idx} className="h-[100%]">
              <div
                className={` cursor-pointer  flex justify-center items-center px-5 h-[96%] `}
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={() => handleMouseLeave()}
              >
                <p onClick={()=>handleSectionClick(item)} >{item}</p>
              </div>

              <div
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={() => handleMouseLeave()}
                className={`${idx == hoveredTab ? getBgColor(idx) : ``} h-[4%]`}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <p>{hoveredTab}</p>
    </div>
  );
};

export default Header;
