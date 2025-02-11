import React, { useContext } from "react";
import "./../../styles/main-header/drawer.css";
import { IoMdClose } from "react-icons/io";
import { AppCtx } from "../../services/contexts/AppCtx";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
export default function Drawer() {
  const appContext = useContext(AppCtx);
  const { openMainDrawer, openMainDrawerHandler, closeMainDrawerHandler } =
    appContext;
  return (
    <div
      className={`mainDrawer ${openMainDrawer ? "openDrawer" : "closeDrawer"}`}
    >
      <div className="mainDrawer--closeDrawer">
        <button
          className="mainDrawer_closeDrawer--btn"
          onClick={closeMainDrawerHandler}
        >
          <IoMdClose />
        </button>
      </div>
      <div className="mainDrawer--accordionMenus">
        <div className="mainDrawer_accordionMenu--userMenu mainDrawer_accordionMenu--items">
          <div className="mainDrawer_accordionMenu_items--hero">
            <span>
              <FaUserCircle />
            </span>
            <span>user menu</span>
            <span>
              <IoMdArrowDropdown />
            </span>
          </div>
        </div>
        <div className="mainDrawer_accordionMenu--basketMenu mainDrawer_accordionMenu--items">
          <div className="mainDrawer_accordionMenu_items--hero">
            <span>
              <FaShoppingCart />
            </span>
            <span>basket</span>
            <span>
              <IoMdArrowDropdown />
            </span>
          </div>
        </div>
      </div>
      <div className="mainDrawer--navMenu"></div>
    </div>
  );
}
