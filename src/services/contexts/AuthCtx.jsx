import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthCtx = createContext("");
const userName = "tabracket";
const password = "123456";
export default function AuthCtxProvider({ children }) {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const moveToLoginPageHandler = () => {
    navigate("/auth");
  };
  return (
    <AuthCtx.Provider value={{ isLogin, setIsLogin, moveToLoginPageHandler }}>
      {children}
    </AuthCtx.Provider>
  );
}
