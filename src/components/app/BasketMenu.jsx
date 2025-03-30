import React from "react";
import "./../../styles/app/header/BasketMenu.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
export default function BasketMenu() {
  return (
    <div className="basketMenu">
      <div className="basketMenu--hero">
        <AiOutlineShoppingCart />
      </div>
    </div>
  );
}
