import { useState } from "react";

const useSectionHoverModal = () => {
  const [hoveredTab, setHoveredTab] = useState(-1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleMouseEnter = (tab) => {
    setIsModalOpen(true);
    setHoveredTab(tab);
  };
  
  const handleMouseLeave = () => {
    setIsModalOpen(false);
    setHoveredTab(-1);
  };

  return {hoveredTab, setHoveredTab, isModalOpen, setIsModalOpen, handleMouseEnter, handleMouseLeave};
};

export default useSectionHoverModal;
