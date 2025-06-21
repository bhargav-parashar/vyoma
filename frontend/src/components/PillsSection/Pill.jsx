import {
  ChevronDownIcon,
  ChevronUpIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Pill = ({
  itemKey,
  value,
  selectedPill,
  handlePillClick,
  secondary,
  updateParams
}) => {
  return (
    <div
      className={` flex items-center justify-start gap-2 rounded-full  px-3 py-1   ${
        secondary
          ? `mt-2 mb-7 box-border border border-gray-400 hover:border-gray-600 cursor-default`
          : `box-border border border-transparent hover:bg-gray-200 cursor-pointer`
      } `}
      onClick={ () =>{ 
        if(!secondary)
          handlePillClick(itemKey)
      } }
    >
      <p className={secondary ? "text-xs font-thin" : "text-sm"}>{value}</p>
      {itemKey === selectedPill && !secondary ? (
        <ChevronUpIcon className="w-3 h-3 text-gray-600" />
      ) : !secondary ? (
        <ChevronDownIcon className="w-3 h-3 text-gray-600" />
      ) : (
        <XMarkIcon
          className=" h-3 text-gray-600 cursor-pointer"
          onClick={() => updateParams(itemKey, value)}
        />
      )}
    </div>
  );
};

export default Pill;
