import React, { useState } from "react";
import styles from "./styles/auth.module.css";
import FormsContainer from "./components/FormsContainer";

export default function Auth() {
  return (
    <div className={`${styles["container"]}`}>
      <div className={`${styles["auth-panel"]} bg-auth`}>
        <FormsContainer />
      </div>
    </div>
  );
}
