import React, { createContext, useState } from "react";

export const AuthCtx = createContext("");

export default function AuthCtxProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <AuthCtx.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </AuthCtx.Provider>
  );
}
