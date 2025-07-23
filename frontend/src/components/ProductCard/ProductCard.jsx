import { XMarkIcon } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
  item,
  isForWishlist,
  handleRemoveFromWishlist,
  handleMoveToCart
}) => {
  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate(`/products/details/${item.id}`);
  };

  const imageSrc = `/assets/${item.images[0]}`;

  return (
    <div
      onClick={() => handleItemClick()}
      className="hover:shadow-xl w-[100%] h-[cover] bg-white cursor-pointer relative border border-gray-300"
    >
      <img alt="product" src={imageSrc} className="h-[77%]" />
      <div className="px-4 py-2">
        {!isForWishlist && <p className="font-semibold">{item.brand}</p>}
        <p className="text-sm">{item.name}</p>
        <p>
          <span className="font-semibold text-sm">{`Rs. ${item.price.discounted}`}</span>
          <span className=" text-gray-600 line-through text-xs">{` Rs. ${item.price.original}`}</span>
          <span className=" text-orange-400 text-xs">{` (${item.price.discount}% OFF)`}</span>
        </p>
        {!isForWishlist && (
          <div className="absolute bottom-22 left-3 flex items-center gap-1 bg-white p-1 w-[35%] rounded">
            <p className="text-xs flex items-center gap-1">
              {item.rating.average}
              <StarIcon className="h-3 w-3 text-emerald-700" />|{" "}
              {item.rating.count}
            </p>
          </div>
        )}
      </div>
      {isForWishlist && (
        <div
          className="cursor-pointer flex justify-center items-center p-2 border border-gray-300"
          onClick={(e) => handleMoveToCart(e, item)}
        >
          <p className="text-rose-400 font-bold text-sm">MOVE TO BAG</p>
        </div>
      )}
      {isForWishlist && (
        <div
          className="absolute top-2 right-3 flex items-center justify-center bg-gray-300 p-1 w-7 h-7 rounded-full cursor-pointer"
          onClick={(e) => handleRemoveFromWishlist(e, item)}
        >
          <XMarkIcon className="h-4 w-4 text-gray-700" />
        </div>
      )}
    </div>
  );
};

export default ProductCard;
