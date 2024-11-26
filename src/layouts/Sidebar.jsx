import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { MdOutlineMenuOpen } from "react-icons/md";
import { RiMenuFold2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItem";
import menuItems from "./MenuItem";

const Sidebar = ({
  handleIsSideBarOpen,
  isSideBarOpen,
  handleItemClick,
  selectedColor,
  selectedItem,
}) => {

   const [openSubMenu, setOpenSubMenu] = useState(null); 
 const handleSubMenuToggle = (id) => {
   if (openSubMenu === id) {
     setOpenSubMenu(null);
   } else {
     setOpenSubMenu(id);
   }
 };

  return (
    <div className="scrollable  h-full ">
      <div className="text-white   ">
        <div className="flex justify-between  ">
          <Link
            to="/"
            className={`${
              isSideBarOpen ? "block" : "hidden"
            } mt-2 px-4 text-sm text-orange-600 font-bold`}
          >
            <p>LeagderPro</p>
          </Link>

          {isSideBarOpen ? (
            <MdOutlineMenuOpen
              onClick={handleIsSideBarOpen}
              className="text-xl mt-2 mr-4 cursor-pointer"
            />
          ) : (
            <RiMenuFold2Line
              onClick={handleIsSideBarOpen}
              className="text-xl  ml-2 mt-2 cursor-pointer scale-110"
            />
          )}
        </div>

        {isSideBarOpen ? (
          <ul className="mt-2">
            {menuItems.map((item) => (
              <li key={item.id} className="py-1 relative">
                <Link
                  to={item.link}
                  onClick={() => handleItemClick("bg-white", item.text)}
                  className={`rounded px-2 p-2 flex items-center hover:font-semibold hover:text-yellow-400 ${
                    selectedItem === item.text
                      ? `${selectedColor} text-black font-bold rounded-none`
                      : ""
                  }`}
                >
                  <div className="relative lg:w-72 md:w-72 xl:w-[20rem] flex justify-between items-center">
                    <li className="flex text-xs">
                      <item.icon className="mr-2" />
                      {item.text}
                    </li>
                    {/* Add arrow icon based on submenu state */}
                    {item.subMenu && item.subMenu.length > 0 && (
                      <span
                        onClick={(e) => {
                          e.preventDefault();
                          handleSubMenuToggle(item.id);
                        }}
                        className="cursor-pointer text-xl"
                      >
                        {openSubMenu === item.id ? (
                          <FaAngleUp />
                        ) : (
                          <FaAngleDown />
                        )}
                      </span>
                    )}
                  </div>
                </Link>

                {item.subMenu &&
                  item.subMenu.length > 0 &&
                  openSubMenu === item.id && (
                    <div
                      className={`submenu-container overflow-hidden transition-all duration-7000 ease-in-out ${
                        openSubMenu === item.id
                          ? "max-h-[500px] opacity-100 transform scale-y-100"
                          : "max-h-0 opacity-0 transform scale-y-0"
                      }`}
                    >
                      <ul className=" shadow-md rounded p-2">
                        {item.subMenu.map((subItem) => (
                          <li key={subItem.id} className="flex justify-start  ">
                            <Link
                              to={subItem.link}
                              onClick={() => handleItemClick("text-black", subItem.text)}
                              className={` block px-4 py-2 text-sm hover:text-yellow-400 ${
                                selectedItem === subItem.text
                                  ? `${selectedColor} bg-white w-full flex items-start font-bold rounded-none`
                                  : ""
                              }`}
                            >
                              <p className="flex justify-center items-center text-xs">
                                <item.icon className="mr-2" />
                                {subItem.text}
                              </p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex justify-center">
            <ul>
              {MenuItems.map((item) => (
                <li key={item.id} className="py-[0.5rem] cursor-pointer ">
                  <item.icon className="text-xl" />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
