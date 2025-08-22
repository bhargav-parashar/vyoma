import { useParams } from "react-router-dom";
import { useState } from "react";
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
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";
import { addItemToWishlist, removeItemFromWishlist } from "../../redux/slices/wishlistSlice";
import { useSelector } from "react-redux";
import useSnackbar from "../../hooks/useSnackbar";
import ProductCarousel from "../../components/Carousel/ProductCarousel";
import { setIsModalOpen, handleMouseEnter, handleMouseLeave} from "../../redux/slices/modalSlice";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

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

  const [selectedSize, setSelectedSize] = useState(selectedProduct.size[0].toUpperCase());
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };
  const { showSnackbar } = useSnackbar();

  const cartItems = useSelector((store) => store.cart.items);
  const wishlistItems = useSelector((store)=>store.wishlist.items);
  const hoveredTab = useSelector((store)=>store.modal.hoveredTab);
  const isModalOpen = useSelector((store)=>store.modal.isModalOpen);

  const handleGoToBagClick = () =>{
    navigate(`/cart`);
  }

  const dispatch = useDispatch();
  
  const handleAddToBag = () =>{
    // Dispatch an action
    const productToAdd = {
      id : selectedProduct.id,
      name : selectedProduct.name,
      brand : selectedProduct.brand,
      size : selectedSize,
      price : selectedProduct.price,
      quantity : 1,
      image : selectedProduct.images[0],
      section : selectedProduct.section
    }

    dispatch(addItem(productToAdd));

    if(wishlistItems.find((item)=>item.id == selectedProduct.id)){
      dispatch(removeItemFromWishlist(selectedProduct.id));
    }

    showSnackbar("Added item to bag", 3000, "success");
  }

  const handleAddToWishlist = () =>{
    if( cartItems.find((item)=>item.id == selectedProduct.id) ){
       showSnackbar("Cannot wishlist, item is already in bag", 3000, "error");
    }else{
      // Dispatch an action
      const productToAdd = {
        id : selectedProduct.id,
        name : selectedProduct.name,
        brand : selectedProduct.brand,
        size : selectedSize,
        price : selectedProduct.price,
        quantity : 1,
        images : selectedProduct.images,
        rating : selectedProduct.rating,
        section : selectedProduct.section
      }
      dispatch(addItemToWishlist(productToAdd));
      showSnackbar("Added item to wishlist", 3000, "success");
    }
  }
  
  const handleRemoveWishlistItem = () =>{
    // Dispatch an action
    dispatch(removeItemFromWishlist(selectedProduct.id));
    showSnackbar("Removed item from wishlist", 3000, "success");
  }

  return (
    <div className="sm:pt-30 md:pt-25 pb-15 dark:bg-primary-dark">
      <div className="sm:px-5 md:px-15 pb-5"><Breadcrumbs/></div>
      <div className=" h-[80%]  flex sm:flex-col md:flex-row md:gap-2 sm:px-5 md:px-15 ">  
        
        {/* IMAGES  */}
        <div className="sm:hidden md:block h-[80%] w-[60%] flex flex-col gap-2">
          <div className=" h-[100%] w-[100%] flex gap-2 pb-2">
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
         <div className="md:hidden  rounded-2xl overflow-hidden">
          <ProductCarousel  images={selectedProduct.images}/>
         </div> 

        {/* PRODUCT DETAILS SECTION */}
        <div className=" h-[80%] sm:w-[100%] md:w-[40%] dark:text-primary">
          {/* Product Header and rating */}
          <div className="border-b-1 border-gray-300 dark:border-gray-500 p-2">
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
          <div className=" pt-2 px-2 border-b-1 border-gray-300 dark:border-gray-500">
            <SizeSelector
              selectedProduct={selectedProduct}
              selectedSize={selectedSize}
              handleSizeSelect={handleSizeSelect}
            />
            <div className={` flex flex-wrap gap-2 py-5`}>
              {/* BUTTON : Add to cart */}

              {cartItems.find((item) => item.id == selectedProduct.id) ? (
                <button
                  className="border dark:border-rose-400  rounded px-5 py-4 w-[50%] cursor-pointer flex items-center justify-center gap-2 bg-rose-400 text-white font-bold hover:brightness-115"
                  onClick={() =>
                    handleGoToBagClick()
                  }
                >
                  <ArrowRightIcon className="sm:h-3 md:h-5 sm:w-3 md:w-5" />
                  <span className="sm:text-sm md:text-md">GO TO BAG</span>
                </button>
              ) : (
                <button
                  className="border dark:border-rose-400 rounded px-5 py-4   w-[50%] cursor-pointer flex items-center justify-center gap-2 bg-rose-400 text-white font-bold hover:brightness-115"
                  onClick={
                    //handleToggleCart(selectedProduct)
                    handleAddToBag
                  }
                >
                  <ShoppingBagIcon className="sm:h-3 md:h-5 sm:w-3 md:w-5" />
                  <span className="sm:text-sm md:text-md">ADD TO BAG</span>
                </button>
              )}

              {/* BUTTON : Add to wishlist */}
              {wishlistItems.find((item) => item.id == selectedProduct.id) ? (
                <button
                  className={`border border-gray-300 rounded px-5 py-4  sm:w-[45%] md:w-[37%] cursor-pointer flex items-center justify-center gap-2 hover:border-black dark:hover:border-white bg-gray-600`}
                  onClick={handleRemoveWishlistItem}
                >
                  <HeartSolidIcon className="sm:h-3 md:h-5 sm:w-3 md:w-5 text-rose-400" />
                  <span className="font-bold text-white sm:text-sm md:text-md">WISHLISTED</span>
                </button>
              ) : (
                <button
                  className={`border border-gray-300 rounded px-5 py-4 sm:w-[45%] md:w-[37%] cursor-pointer flex items-center justify-center gap-2 hover:border-black dark:hover:border-white`}
                  onClick={handleAddToWishlist}
                >
                  <HeartOutlineIcon className="sm:h-3 md:h-5 sm:w-3 md:w-5" />
                  <span className="sm:text-sm md:text-md">WISHLIST</span>
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