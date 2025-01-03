import React, { useContext } from "react";
import styles from "./../styles/auth.module.css";
import FormsSwitchersBtns from "./FormsSwitchersBtns";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { AuthCtx } from "../../../services/contexts/AuthCtx";
export default function FormsContainer() {
  const authContext = useContext(AuthCtx);
  return (
    <div className={`${styles["forms-container"]}`}>
      <div className={`${styles["forms-switchers"]}`}>
        <FormsSwitchersBtns />
      </div>
      <div className={`${styles["form-container"]}`}>
        {authContext.loginPanel ? <LoginForm /> : <SignUpForm />}
      </div>
    </div>
  );
}
