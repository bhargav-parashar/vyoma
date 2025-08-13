import categories from "../../constants/categories.json";
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";

const getBgColor = (idx) => {
  switch (idx) {
    case 1 :
      return "text-red-400";

    case 2 :
      return "text-pink-500";

    case 3 :
      return "text-orange-400";

    case 4 :
      return "text-yellow-400";

    case 5 :
      return "text-teal-500";

    case 6 :
      return "text-blue-500";

    default :
      return "text-blue-500";
  }
};
const CategoryModal = ({ hoveredTab, handleMouseEnter, handleMouseLeave, setIsModalOpen }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleHeaderClick = (hoveredTab, category) =>{
    switch(hoveredTab){
      case 1 :
         navigate(`/products/men?category=${category}`);
         dispatch(handleMouseLeave());
         break;
      case 2 :
         navigate(`/products/women?category=${category}`);
         dispatch(handleMouseLeave());
         break;
      case 3 :
         navigate(`/products/kids?category=${category}`);
         dispatch(handleMouseLeave());
         break;
        
      case 4 :
         navigate(`/products/home?category=${category}`);
         dispatch(handleMouseLeave());
        break;
     
      default :
         navigate(`/products/men`);
         break;
    }

    dispatch(setIsModalOpen(false));
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-10">
      <div
        onMouseEnter={() => dispatch(handleMouseEnter(hoveredTab))}
        onMouseLeave={() => dispatch(handleMouseLeave())}
        className={`
          bg-white  my-20 mx-auto w-[90%] h-[80%] z-20
          transition-opacity duration-700 delay-200
         opacity-100 flex justify-between gap-0
        `}
      >
        {categories.categoryList
          .filter((item) => item.id === hoveredTab)[0]
          .items.map((item, index) => (
            <div
              key={index}
              className={` ${ item.id % 2 === 0 ? `bg-gray-100 dark:bg-primary-dark` : `bg-white dark:bg-gray-600`} h-[100%] w-[20%] p-5`}
            >
              <p className={`${getBgColor(hoveredTab)} text-sm font-bold mb-2`} >
                {item.header}
              </p>
              {item.categories.map((category, idx) => (
                <p key={idx} className="dark:text-primary text-sm font-light cursor-pointer hover:font-bold" onClick={()=>handleHeaderClick(hoveredTab, category.key)} >
                  {category.value}
                </p>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default CategoryModal;
