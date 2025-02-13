import React, { useContext, useState } from "react";
import "./../../styles/main-header/drawer.css";
import { IoMdClose } from "react-icons/io";
import { AppCtx } from "../../services/contexts/AppCtx";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import BasketMenu from "./BasketMenu";
import UserMenu from "./UserMenu";

export default function Drawer() {
  const appContext = useContext(AppCtx);
  const { openMainDrawer, openMainDrawerHandler, closeMainDrawerHandler } =
    appContext;
  const { basketItems, setBasketItems } = appContext;
  const { openUserMenu, setOpenUserMenu } = appContext;
  const { openBasketMenu, setOpenBasketMenu } = appContext;

  const openUserMenuHandler = () => {
    setOpenBasketMenu(false);
    setOpenUserMenu((prevState) => !prevState);
  };
  const openBasketMenuHandler = () => {
    setOpenUserMenu(false);
    setOpenBasketMenu((prevState) => !prevState);
  };
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
          <div
            className="mainDrawer_accordionMenu_items--hero"
            onClick={openUserMenuHandler}
          >
            <span>
              <FaUserCircle />
            </span>
            <span>user menu</span>
            <span>
              {!openUserMenu ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
            </span>
          </div>
          <div className="mainDrawer_accordionMenu_userMenu--subMenu">
            <UserMenu />
          </div>
        </div>
        <div className="mainDrawer_accordionMenu--basketMenu mainDrawer_accordionMenu--items">
          <div
            className="mainDrawer_accordionMenu_items--hero"
            onClick={openBasketMenuHandler}
          >
            <span>
              <FaShoppingCart />
            </span>
            <span>basket</span>
            <span>
              {!openBasketMenu ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
            </span>
            {basketItems.length > 0 && <span>{basketItems.length}</span>}
          </div>
          <div className="mainDrawer_accordionMenu_basketMenu--subMenu">
            <BasketMenu />
          </div>
        </div>
      </div>
      <div className="mainDrawer--navMenu"></div>
    </div>
  );
}
