import React, { useState } from "react";
import styles from "./styles/auth.module.css";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
export default function Auth() {
  const [openSignUpForm, setOpenSignUpForm] = useState(false);
  return (
    <div className={`${styles["container"]}`}>
      <div className={`${styles["auth-container"]}`}>
        <div className={`${styles["banner-container"]} bg-auth`}>
          <h2>some features</h2>
          <ol>
            <li>you'll experience the easiest shopping ever!</li>
            <li>stay up to date with our latest news!</li>
            <li>easily compare products all in one place!</li>
            <li>assemble your system on the site using smart assembly!</li>
            <li>professional purchasing advisors</li>
            <li>24/7 support</li>
          </ol>
        </div>
        <div className={`${styles["forms-container"]}`}>
          <div className={`${styles["infos"]}`}>
            <h1>taBracket online shop</h1>
            <h2>
              experience the best digital product shopping you've ever had
            </h2>
          </div>
          <div className={`${styles["forms"]}`}></div>
        </div>
      </div>
    </div>
  );
}
