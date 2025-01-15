import React from "react";
import "./../../styles/header/header.css";
import AccountMenu from "./AccountMenu";
import NavMenu from "./NavMenu";
import OptionsBar from "./OptionsBar";

export default function NavBar() {
  return (
    <div className="header-navBar">
      <AccountMenu />
      <NavMenu />
      <OptionsBar />
    </div>
  );
}
