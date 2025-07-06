import { useState } from "react";

const usePill = () => {
  const [selectedPill, setSelectedPill] = useState(-1);
  
  const handlePillClick = (id) => {
    if (id === selectedPill) {
      setSelectedPill(-1);
    } else {
      setSelectedPill(id);
    }
  };

  return { selectedPill, handlePillClick };
};

export default usePill;
