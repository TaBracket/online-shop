import React, { createContext, useState } from "react";
import { Navigate } from "react-router-dom";

export const AuthCtx = createContext("");
const userName = "tabracket";
const password = "123456";
export default function AuthCtxProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const moveToLoginPageHandler = () => {
    Navigate("/login");
  };
  return (
    <AuthCtx.Provider value={{ isLogin, setIsLogin, moveToLoginPageHandler }}>
      {children}
    </AuthCtx.Provider>
  );
}
