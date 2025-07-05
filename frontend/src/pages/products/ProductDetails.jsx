import { useParams } from "react-router-dom";
import FilterContext from "../../contexts/FilterContext";
import { useContext } from "react";
import CategoryModal from "../../components/CategoryModal/CategoryModal";
import {allProducts} from "../../constants/productList.json";


const ProductDetails = () => {
  const {id} = useParams();
  const selectedProduct = allProducts.find((product)=>product.id == id);
 
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
      <div className="border border-black-300 h-screen flex px-15 gap-2">
        <div className="border border-amber-600 h-[80%] w-[30%]">
           <img alt="product" src={`/assets/${selectedProduct.images[0]}`} className="h-[100%] w-[100%]"   />
        </div>
        <div className="border border-amber-600 h-[80%] w-[30%]">
          <img alt="product" src={`/assets/${selectedProduct.images[1]}`} className="h-[100%] w-[100%]"   />
        </div>
        <div className="border border-amber-600 h-[80%] w-[40%]">
          <h1>{selectedProduct.brand}</h1>
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
