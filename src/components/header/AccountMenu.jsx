import React, { useContext, useState } from "react";
import "./../../styles/header/header.css";
import { MdOutlineLogin } from "react-icons/md";
import { AuthCtx } from "../../services/contexts/AuthCtx";
import UserMenu from "./UserMenu";
import BasketMenu from "./BasketMenu";

export default function AccountMenu() {
  const authContext = useContext(AuthCtx);
  return (
    <div className="header-accountMenu">
      {authContext.isLogin ? (
        <div className="header-accountMenu-loggedIn">
          <BasketMenu />
          <UserMenu />
        </div>
      ) : (
        <div className="header-accountMenu-none-login">
          <button>
            <span>login</span>
            <span>
              <MdOutlineLogin />
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
