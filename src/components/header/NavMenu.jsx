import React from "react";
import { Link } from "react-router-dom";
import { IoMdMenu, IoIosSearch } from "react-icons/io";
import { RiToolsFill } from "react-icons/ri";
import { GoMirror, GoQuestion } from "react-icons/go";
export default function NavMenu() {
  return (
    <div className="header-navMenu">
      <Link to={"/"} className="header_navMenu--links header_navMenu--products">
        <span>
          <IoMdMenu />
        </span>
        <span>products</span>
      </Link>
      <Link to={"/"} className="header_navMenu--links header_navMenu--assembly">
        <span>
          <RiToolsFill />
        </span>
        <span>smart assembly</span>
      </Link>
      <Link to={"/"} className="header_navMenu--links header_navMenu--compare">
        <span>
          <GoMirror />
        </span>
        <span>compare</span>
      </Link>
      <Link to={"/"} className="header_navMenu--links header_navMenu--support">
        <span>
          <GoQuestion />
        </span>
        <span>support</span>
      </Link>
    </div>
  );
}
