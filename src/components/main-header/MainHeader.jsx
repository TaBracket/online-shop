import React from "react";
import "./../../styles/main-header/mainHeader.css";
import { IoMdMenu, IoMdArrowDropdown } from "react-icons/io";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import NavMenu from "./NavMenu";
import Search from "./Search";
import ChangeTheme from "../ChangeTheme";
import Logo from "../Logo";

export default function MainHeader() {
  return (
    <div className="mainHeader">
      <div className="mainHeader--accountMenu">
        <div className="mainHeader_accountMenu--openDrawerBtn">
          <button>
            <IoMdMenu />
          </button>
        </div>
        <div className="mainHeader_accountMenu--menusContainer">
          <div className="mainHeader_accountMenu_menusContainer--userMenu">
            <FaUserCircle />
            <IoMdArrowDropdown />
          </div>
          <div className="mainHeader_accountMenu_menusContainer--basketMenu">
            <FaShoppingCart />
            <IoMdArrowDropdown />
          </div>
        </div>
      </div>
      <div className="mainHeader--navMenu">
        <NavMenu />
      </div>
      <div className="mainHeader--utilsMenu">
        <div className="mainHeader_utilsMenu--search">
          <Search />
        </div>
        <div className="mainHeader_utilsMenu--theme">
          <ChangeTheme />
        </div>
        <div className="mainHeader_utilsMenu--logo">{/* <Logo /> */}</div>
      </div>
    </div>
  );
}
