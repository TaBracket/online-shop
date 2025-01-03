import React, { useContext } from "react";
import styles from "./../styles/auth.module.css";
import { AuthCtx } from "../../../services/contexts/AuthCtx";
export default function FormsSwitchersBtns() {
  const authContext = useContext(AuthCtx);
  console.log(authContext.loginPanel);

  return (
    <>
      <button
        onClick={() => {
          authContext.setLoginPanel(true);
        }}
        className={`${styles["switcher-btns"]} ${authContext.loginPanel ? styles["active-btn"] : styles["deactive-btn"]}`}
      >
        login
      </button>
      <button
        onClick={() => {
          authContext.setLoginPanel(false);
        }}
        className={`${styles["switcher-btns"]} ${authContext.loginPanel ? styles["deactive-btn"] : styles["active-btn"]}`}
      >
        sign-up
      </button>
    </>
  );
}
// `${styles["login-btn"]} ${styles["switcher-btns"]}`
// `${styles["sign-up-btn"]} ${styles["switcher-btns"]}`
