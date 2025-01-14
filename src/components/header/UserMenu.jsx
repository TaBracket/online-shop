import React from "react";
import "./../../styles/header/header.css";
import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
export default function UserMenu() {
  return (
    <ul className="header-userMenu">
      <li className="header-userMenu-title">
        <p>
          <span>
            <FaUserCircle />
          </span>
          <span>
            <IoMdArrowDropdown />
          </span>
        </p>
      </li>
    </ul>
  );
}
