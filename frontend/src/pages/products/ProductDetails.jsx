import { useParams } from "react-router-dom";
import FilterContext from "../../contexts/FilterContext";
import { useContext } from "react";
import CategoryModal from "../../components/CategoryModal/CategoryModal";

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

  return (
    <div className="border pt-50">
      <h2>{`Product Id - ${id}`}</h2>
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
