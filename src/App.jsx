import React, { useContext } from "react";
import "./styles/App.css";
import { UserMenu, BasketMenu, NavMenu, Logo, DarkMode } from "./components";
import { AuthCtx } from "./services/contexts/AuthCtx";
export default function App() {
  const authContext = useContext(AuthCtx);
  const { isLogin, moveToLoginPageHandler } = authContext;
  return (
    <div className="app">
      <div className="app--header">
        {!isLogin ? (
          <div className="app_header--authBtn" onClick={moveToLoginPageHandler}>
            <button>register</button>
          </div>
        ) : (
          <div className="app_header--userMenu">
            <UserMenu />
            <BasketMenu />
          </div>
        )}

        <div className="app_header--navMenu">
          <NavMenu />
        </div>
        <div className="app_header--utilsMenu">
          <Logo />
          <DarkMode />
        </div>
      </div>
      <div className="app--main">main</div>
      <div className="app--footer">footer</div>
    </div>
  );
}
