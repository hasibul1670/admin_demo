/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Sidebar from "./Sidebar";

const DefaultLayout= ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (color, text) => {
    setSelectedColor(color);
    setSelectedItem(text);
  };

  const handleIsSideBarOpen = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
 

  return (
    <div className="flex h-screen ">
      <div
        className={`${
          isSideBarOpen ? "w-[13rem]" : "lg:w-12 "
        } bg-gradient-to-r from-blue-900 to-cyan-600 transition-all duration-400 `}
      >
        <Sidebar
          handleIsSideBarOpen={handleIsSideBarOpen}
          isSideBarOpen={isSideBarOpen}
          selectedColor={selectedColor}
          selectedItem={selectedItem}
          handleItemClick={handleItemClick}
        />
      </div>

      {/* Main Content */}
      <div
        className={`${
          isSideBarOpen ? "w-5/6" : "w-dvw"
        }  flex flex-col  overflow-y-auto h-full `}
      >
        <main className={`ml flex-1  transition-all duration-600 `}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default DefaultLayout;
