import React from "react";
import styles from "./../../styles/user-menu-none-login.module.css";
import { MdLogin } from "react-icons/md";
export default function UserMenuNoneLogin() {
  return (
    <>
      <button className={`${styles["UserMenuLoggedIn"]}`}>
        <span className={`${styles["icon"]}`}>
          <MdLogin />
        </span>
        <span className={`${styles["title"]}`}>login</span>
      </button>
    </>
  );
}
