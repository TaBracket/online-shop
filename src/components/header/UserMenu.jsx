import React from "react";
import "./../../styles/header/header.css";
import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
export default function UserMenu() {
  return (
    <ul className="UserMenu">
      <li className="UserMenu-title">
        <FaUserCircle />
        <IoMdArrowDropdown />
        <ul className="UserMenu-menu"></ul>
      </li>
    </ul>
  );
}
