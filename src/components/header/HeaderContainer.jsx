import React from "react";
import "./../../styles/header/header-container.css";
import Header from "./Header";
import Drawer from "./Drawer";

export default function HeaderContainer() {
  return (
    <div className="HeaderContainer">
      <Header />
      <Drawer />
    </div>
  );
}
