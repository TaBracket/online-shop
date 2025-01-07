import React from "react";
import styles from "./../../styles/header.module.css";
import UserMenu from "./UserMenu";
import NavMenu from "./NavMenu";
import SiteMenu from "./SiteMenu";

export default function Header() {
  return (
    <div className={`${styles["container"]}`}>
      <UserMenu />
      <NavMenu />
      <SiteMenu />
    </div>
  );
}
