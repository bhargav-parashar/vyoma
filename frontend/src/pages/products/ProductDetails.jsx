import { useParams } from "react-router-dom";
import FilterContext from "../../contexts/FilterContext";
import { useContext } from "react";
import CategoryModal from "../../components/CategoryModal/CategoryModal";
import productList from "../../constants/products.json";


const ProductDetails = () => {
  const {id} = useParams();

  //GET CONTEXT VARIABLES
  const {
    hoveredTab,
    setIsModalOpen,
    handleMouseEnter,
    handleMouseLeave,
    isModalOpen
  } = useContext(FilterContext);

  //GET SELECTED PRODUCT


  return (
    <div className="border pt-25">
      <div className="border border-black-300 h-screen flex px-15">
        <div className="border border-amber-600 h-[80%] w-[30%]"></div>
        <div className="border border-amber-600 h-[80%] w-[30%]"></div>
        <div className="border border-amber-600 h-[80%] w-[40%]">
          {`Product id - ${id}`}
        </div>
      </div>
      {isModalOpen && (
        <CategoryModal
          hoveredTab={hoveredTab}
          handleMouseLeave={handleMouseLeave}
          handleMouseEnter={handleMouseEnter}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  )
}

export default ProductDetails
