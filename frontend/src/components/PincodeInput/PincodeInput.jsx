import { useState } from "react";
import { TruckIcon } from "@heroicons/react/24/outline";
import { BanknotesIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { ArrowsRightLeftIcon  } from "@heroicons/react/24/outline";
import useSnackbar from "../../hooks/useSnackbar";
import {format, addDays} from "date-fns";

const PincodeInput = () => {
  const [pin, setPin] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const { showSnackbar } = useSnackbar();

  const handlePinChange = (val) => {
    if (/^\d*$/.test(val)) {
      setPin(val);
    }
  };
  const checkDeliveryTime = () => {
    if(showDetails){
      setShowDetails(false);
      setPin("");
    }else{
         if (pin.length !== 6) {
      
            setShowDetails(false);
            //show toast - Please Enter Valid Pincode
            showSnackbar("Please enter a valid pincode", 3000, "error");
          } else {
            setShowDetails(true);
          }
     }
    
   
  };

  return (
    <div className=" p-2 ">
      {/* HEADER */}
      <div className="flex items-center gap-2 mb-2">
        <span className="py-2 font-semibold ">DELIVERY OPTIONS</span>
        <TruckIcon className="h-5 w-5 " />
      </div>

      {/* INPUT BOX */}
      <div className="flex items-center justify-between border border-gray-300 rounded-md px-4 py-2 w-fit">
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="Enter pincode"
          className="outline-none text-sm text-gray-700 placeholder-gray-400 w-32"
          value={pin}
          onChange={(e) => handlePinChange(e.target.value)}
          onWheel={(e) => e.target.blur()}
        />
        {
          showDetails && <CheckCircleIcon className="h-5 w-5 text-emerald-500" />
        }
        <button
          className="text-sm text-rose-500 font-medium hover:cursor-pointer ml-2"
          onClick={() => checkDeliveryTime()}
        >
          {showDetails ? `Change` : `Check`}
        </button>
      </div>
      <p className=" mt-2 mb-5 text-xs text-gray-600">
        Please enter PIN code to check delivery time & Pay on Delivery
        Availability
      </p>

      {/* DETAILS SECTION */}
      {showDetails ? (
        <div>
          <div className="flex items-center justify-start gap-2 mb-1">
            <TruckIcon className="h-5 w-5 " />
            <span>{`Get it by ${ format(addDays(new Date(), 4),'E, LLL dd')}`}</span>
          </div>
          <div className="flex items-center justify-start gap-2 mb-1">
            <BanknotesIcon className="h-5 w-5 " />
            <span>{`Pay on delivery available`}</span>
          </div>
          <div className="flex items-center justify-start gap-2 mb-1">
            <ArrowsRightLeftIcon  className="h-5 w-5 " />
            <span>{`Easy 14 days return & exchange available`}</span>
          </div>
        </div>
      ) : (
        <div className=" text-gray-600">
          <p>100% Original Products</p>
          <p>Pay on delivery might be available</p>
          <p>Easy 14 days returns and exchanges</p>
        </div>
      )}
    </div>
  );
};

export default PincodeInput;
