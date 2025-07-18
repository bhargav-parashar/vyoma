import { useParams } from "react-router-dom";
import { FilterContext } from "../../contexts/FilterContext";
import { useContext, useState } from "react";
import CategoryModal from "../../components/CategoryModal/CategoryModal";
import { allProducts } from "../../constants/productList.json";
import Rating from "../../components/ProductCard/Rating";
import { useNavigate } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HeartOutlineIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/24/solid";
import PincodeInput from "../../components/PincodeInput/PincodeInput";
import SizeSelector from "../../components/SizeSelector/SizeSelector";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { CalendarDateRangeIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon  } from "@heroicons/react/24/outline";
import { format } from "date-fns";
import useGetCartWishlist from "../../hooks/useGetCartWishlist";

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

  //GET FILTER CONTEXT VARIABLES
  const {
    hoveredTab,
    setIsModalOpen,
    handleMouseEnter,
    handleMouseLeave,
    isModalOpen,
  } = useContext(FilterContext);

  //GET CART AND WISHLIST CONTEXT VARIABLES
  const { wishlist, handleToggleWishlist, cart, handleToggleCart } =
    useGetCartWishlist();
  
  const handleGoToBagClick = () =>{
    navigate(`/cart`);
  }


  return (
    <div className=" pt-25">
      <div className=" h-screen flex px-15 gap-2">
        {/* IMAGES  */}
        <div className=" h-[80%] w-[60%] flex flex-col gap-2">
          <div className=" h-[100%] w-[100%] flex gap-2">
            <div className=" h-[100%] w-[100%]">
              <img
                alt="product"
                src={`/assets/${selectedProduct.images[0]}`}
                className="h-[100%] w-[100%]"
              />
            </div>
            <div className=" h-[100%] w-[100%]">
              <img
                alt="product"
                src={`/assets/${selectedProduct.images[1]}`}
                className="h-[100%] w-[100%]"
              />
            </div>
          </div>
          <div className=" h-[100%] w-[100%] flex gap-2">
            <div className=" h-[100%] w-[100%]">
              <img
                alt="product"
                src={`/assets/${selectedProduct.images[1]}`}
                className="h-[100%] w-[100%]"
              />
            </div>
            <div className=" h-[100%] w-[100%]">
              <img
                alt="product"
                src={`/assets/${selectedProduct.images[0]}`}
                className="h-[100%] w-[100%]"
              />
            </div>
          </div>
        </div>

        {/* PRODUCT DETAILS SECTION */}
        <div className=" h-[80%] w-[40%]">
          {/* Product Header and rating */}
          <div className="border-b-1 border-gray-300 p-2">
            <p className="text-2xl font-semibold">{selectedProduct.brand}</p>
            <p className="text-gray-400 sm:text-l 2xl:text-xl ">
              {selectedProduct.name}
            </p>
            <Rating item={selectedProduct} />
          </div>

          {/* Product Price and discount*/}
          <div className=" px-2">
            <p>
              <span className="font-semibold sm:text-xl 2xl:text-2xl">{`₹${selectedProduct.price.discounted}`}</span>
              <span className=" text-gray-400 sm:text-l 2xl:text-xl pl-2">
                MRP
              </span>{" "}
              <span className=" text-gray-400 line-through sm:text-l 2xl:text-xl ">{` ₹${selectedProduct.price.original}`}</span>
              <span className=" text-orange-400 sm:text-l 2xl:text-xl pl-2">{` (${selectedProduct.price.discount}% OFF)`}</span>
            </p>
            <p className="py-2 font-semibold text-emerald-600">
              Inclusive of all taxes
            </p>
          </div>

          {/* Similar Products section  */}
          <div className=" px-2">
            <p className="py-2 font-semibold ">SIMILAR PRODUCTS</p>
            <div className="flex flex-wrap gap-2 pt-1">
              {similarProducts &&
                similarProducts.map((product) => (
                  <img
                    key={product.id}
                    alt="product"
                    src={`/assets/${product.images[0]}`}
                    className="h-[8%] w-[8%] cursor-pointer"
                    onClick={() => handleItemClick(product.id)}
                  />
                ))}
            </div>
          </div>

          {/* Size selector and add to bag buttons */}
          <div className=" pt-2 px-2 border-b-1 border-gray-300">
            <SizeSelector
              selectedProduct={selectedProduct}
              selectedSize={selectedSize}
              handleSizeSelect={handleSizeSelect}
            />
            <div className={` flex flex-wrap gap-2 py-5`}>
              {/* BUTTON : Add to cart */}

              {cart.find((item) => item == selectedProduct.id) ? (
                <button
                  className="border rounded px-5 py-4 w-[50%] cursor-pointer flex items-center justify-center gap-2 bg-rose-400 text-white font-bold hover:brightness-115"
                  onClick={() =>
                    handleGoToBagClick()
                  }
                >
                  <ArrowRightIcon className="h-5 w-5" />
                  <span>GO TO BAG</span>
                </button>
              ) : (
                <button
                  className="border rounded px-5 py-4 w-[50%] cursor-pointer flex items-center justify-center gap-2 bg-rose-400 text-white font-bold hover:brightness-115"
                  onClick={() =>
                    handleToggleCart(selectedProduct)
                  }
                >
                  <ShoppingBagIcon className="h-5 w-5" />
                  <span>ADD TO BAG</span>
                </button>
              )}

              {/* BUTTON : Add to wishlist */}
              {wishlist.find((item) => item == selectedProduct.id) ? (
                <button
                  className={`border border-gray-300 rounded px-5 py-4 w-[37%] cursor-pointer flex items-center justify-center gap-2 hover:border-black bg-gray-600`}
                  onClick={() => handleToggleWishlist(selectedProduct, true)}
                >
                  <HeartSolidIcon className="h-5 w-5 text-rose-400" />
                  <span className="font-bold text-white">WISHLISTED</span>
                </button>
              ) : (
                <button
                  className={`border border-gray-300 rounded px-5 py-4 w-[37%] cursor-pointer flex items-center justify-center gap-2 hover:border-black`}
                  onClick={() => handleToggleWishlist(selectedProduct, )}
                >
                  <HeartOutlineIcon className="h-5 w-5" />
                  <span>WISHLIST</span>
                </button>
              )}
            </div>
          </div>

          {/* Delivery options  */}
          <PincodeInput />

          {/* Product details  */}
          <div className=" p-2">
            <p className="py-2 font-semibold ">PRODUCTS DETAILS</p>
            <div>
              <div className="flex items-center justify-start gap-2 mb-1">
                <CalendarDateRangeIcon className="h-5 w-5 " />
                <span>{`Launced on ${format(
                  new Date(selectedProduct.launchDate),
                  "MMM dd yyy"
                )} `}</span>
              </div>
              <div className="flex items-center justify-start gap-2 mb-1">
                <MapPinIcon className="h-5 w-5 " />
                <span>{`Origin : ${
                  selectedProduct?.origin.charAt(0).toUpperCase() +
                  selectedProduct?.origin.substring(1)
                }`}</span>
              </div>
            </div>
          </div>
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
