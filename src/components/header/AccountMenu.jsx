import React from "react";
import "./../../styles/header/header.css";
import AccountMenuBasket from "./AccountMenuBasket";
import AccountMenuUserMenu from "./AccountMenuUserMenu";

export default function AccountMenu() {
  return (
    <div className="header--accountMenu">
      <AccountMenuBasket />
      <div className="header-accountMenu--divider"></div>
      <AccountMenuUserMenu />
    </div>
  );
}
