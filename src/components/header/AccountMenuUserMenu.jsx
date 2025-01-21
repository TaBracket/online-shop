import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";
export default function AccountMenuUserMenu() {
  return (
    <div className="header_accountMenu--userMenu header_accountMenu--menus">
      <div className="header_accountMenu_menus--icon">
        <CgProfile />
        <IoMdArrowDropdown />
      </div>
    </div>
  );
}
