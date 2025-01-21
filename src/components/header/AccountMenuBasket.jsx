import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function AccountMenuBasket() {
  return (
    <div className="header_accountMenu--Basket header_accountMenu--menus">
      <div className="header_accountMenu_menus--icon">
        <MdOutlineShoppingCart />
        <IoMdArrowDropdown />
      </div>
    </div>
  );
}
