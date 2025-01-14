import React from "react";
import "./../../styles/header/header.css";
import { MdShoppingCart } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
export default function BasketMenu() {
  return (
    <ul className="BasketMenu">
      <li className="header-BasketMenu-title">
        <p>
          <span>
            <MdShoppingCart />
          </span>
          <span>
            <IoMdArrowDropdown />
          </span>
        </p>
      </li>
    </ul>
  );
}
