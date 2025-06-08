import React, { useState } from "react";
import "./App.css";
import Products from "./pages/Products/Products";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState(-1);

  const handleMouseEnter = (tab) => {
    setIsModalOpen(true);
    setHoveredTab(tab);
  };
  const handleMouseLeave = () => {
    setIsModalOpen(false);
    setHoveredTab(-1);
  };
  return (
    <>
      <Header
        setIsModalOpen={setIsModalOpen}
        setHoveredTab={setHoveredTab}
        hoveredTab={hoveredTab}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
      <Outlet />
    </>
  );
}

export default App;
