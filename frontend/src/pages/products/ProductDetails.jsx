import { useParams } from "react-router-dom";
import FilterContext from "../../contexts/FilterContext";
import { useContext, useState } from "react";
import CategoryModal from "../../components/CategoryModal/CategoryModal";
import { allProducts } from "../../constants/productList.json";
import Rating from "../../components/ProductCard/Rating";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const selectedProduct = allProducts.find((product) => product.id == id);
  const similarProducts = allProducts
    .filter((product) => {
      return (
        product.brand == selectedProduct.brand &&
        product.section == selectedProduct.section &&
        product.category == selectedProduct.category &&
        product.id != selectedProduct.id
      );
    })
    .slice(0, 4);

  const navigate = useNavigate();
  const handleItemClick = (id) => {
    navigate(`/products/details/${id}`);
  };

  const [selectedSize, setSelectedSize] = useState("");
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  //GET CONTEXT VARIABLES
  const {
    hoveredTab,
    setIsModalOpen,
    handleMouseEnter,
    handleMouseLeave,
    isModalOpen,
  } = useContext(FilterContext);

  //GET SELECTED PRODUCT

  return (
    <div className="border pt-25">
      <div className="border border-black-300 h-screen flex px-15 gap-2">
        <div className="border border-amber-600 h-[80%] w-[30%]">
          <img
            alt="product"
            src={`/assets/${selectedProduct.images[0]}`}
            className="h-[100%] w-[100%]"
          />
        </div>
        <div className="border border-amber-600 h-[80%] w-[30%]">
          <img
            alt="product"
            src={`/assets/${selectedProduct.images[1]}`}
            className="h-[100%] w-[100%]"
          />
        </div>

        <div className="border border-amber-600 h-[80%] w-[40%]">
          <div className="border-b-1 border-gray-300 p-2">
            <h2 className="text-2xl font-semibold">{selectedProduct.brand}</h2>
            <p className="text-gray-400  text-xl">{selectedProduct.name}</p>
            <Rating item={selectedProduct} />
          </div>

          <div className="border border-gray-300 p-2">
            <p>
              <span className="font-semibold text-2xl">{`₹${selectedProduct.price.discounted}`}</span>
              <span className=" text-gray-400 text-xl pl-2">MRP</span>{" "}
              <span className=" text-gray-400 line-through text-xl ">{` ₹${selectedProduct.price.original}`}</span>
              <span className=" text-orange-400 text-xl pl-2">{` (${selectedProduct.price.discount}% OFF)`}</span>
            </p>
            <p className="py-2 font-semibold text-emerald-600">
              Inclusive of all taxes
            </p>
          </div>

          <div className="border border-gray-300 p-2">
            <p className="py-2 font-semibold ">SIMILAR PRODUCTS</p>
            <div className="flex flex-wrap gap-2 pt-1">
              {similarProducts &&
                similarProducts.map((product) => (
                  <img
                    alt="product"
                    src={`/assets/${product.images[0]}`}
                    className="h-[8%] w-[8%] cursor-pointer"
                    onClick={() => handleItemClick(product.id)}
                  />
                ))}
            </div>
          </div>

          <div className="border border-gray-300 p-2">
            <p className="py-2 font-semibold ">SELECT SIZE</p>
            <div className="flex flex-wrap gap-2 pt-1">
              {selectedProduct.size.map((size) => (
                <div
                  className={`border ${
                    size.toUpperCase() === selectedSize
                      ? `border-red-400 `
                      : `border-gray-400 hover:border-red-400`
                  }  rounded-full w-12 h-12 flex items-center justify-center cursor-pointer`}
                  onClick={() => handleSizeSelect(size.toUpperCase())}
                >
                  <p
                    className={`text-sm ${
                      size.toUpperCase() === selectedSize
                        ? `text-red-400 font-bold`
                        : ``
                    }`}
                  >
                    {size.toUpperCase()}
                  </p>
                </div>
              ))}
            </div>
            <div className={`border flex flex-wrap gap-2 py-5`}>
              <button className="border rounded px-5 py-4 w-[45%] cursor-pointer">ADD TO BAG</button>
              <button className="border rounded px-5 py-4 w-[25%] cursor-pointer">WISHLIST</button>
            </div>
          </div>

          <div></div>
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
  );
};

export default ProductDetails;
