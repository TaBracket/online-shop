import React from "react";
import "./../../styles/header/header.css";
import NavBar from "./NavBar";
import Drawer from "./Drawer";

export default function Header() {
  return (
    <div className="header-container">
      <NavBar />
      <Drawer />
    </div>
  );
}
