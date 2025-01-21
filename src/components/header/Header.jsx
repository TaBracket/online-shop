import React from "react";
import "./../../styles/header/header.css";
import AccountMenu from "./AccountMenu";
import NavMenu from "./NavMenu";
import OptionsBar from "./OptionsBar";

export default function Header() {
  return (
    <div className="header">
      <AccountMenu />
      <NavMenu />
      <OptionsBar />
    </div>
  );
}
