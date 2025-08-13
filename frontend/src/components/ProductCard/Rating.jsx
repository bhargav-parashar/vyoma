import { StarIcon } from "@heroicons/react/24/solid";

const Rating = ({ item, isProductCard }) => {
  return (
    <div
      className={`${
        isProductCard
          ? `absolute bottom-22 left-3 flex items-center gap-1 bg-white p-1 w-[35%] rounded opacity-50`
          : `flex items-center gap-1 bg-white  p-1  rounded border border-gray-300 w-30 mt-4 mb-1 dark:text-black`
      } `}
    >
      <p className="text-xs flex items-center gap-1">
        {item.rating.average}
        <StarIcon className="h-3 w-3 text-emerald-600" />
        <span className="text-gray-300 dark:text-gray-500">|</span>
        {` ${item.rating.count} ${!isProductCard ? `Ratings` : ""}`}
      </p>
    </div>
  );
};

export default Rating;
