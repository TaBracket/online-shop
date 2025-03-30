import React from "react";
import "./../../styles/app/header/UserMenu.css";
import { AiOutlineUser } from "react-icons/ai";
export default function UserMenu() {
  return (
    <div className="userMenu">
      <div className="userMenu--hero">
        <AiOutlineUser />
      </div>
      <ul className="userMenu--menu"></ul>
    </div>
  );
}
