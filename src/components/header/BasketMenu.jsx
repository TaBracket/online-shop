import React from "react";
import "./../../styles/header/header.css";
import { MdShoppingCart } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
export default function BasketMenu() {
  return (
    <ul className="BasketMenu">
      <li className="BasketMenu-title">
        <MdShoppingCart />
        <ul className="BasketMenu-notifications"></ul>
      </li>
    </ul>
  );
}
