import React, { useState } from "react";
import styles from "./../../styles/user-menu.module.css";
import UserMenuNoneLogin from "./UserMenuNoneLogin";
import UserMenuLoggedIn from "./UserMenuLoggedIn";

export default function UserMenu() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={`${styles["container"]}`}>
      {isLogin ? <UserMenuLoggedIn /> : <UserMenuNoneLogin />}
    </div>
  );
}
