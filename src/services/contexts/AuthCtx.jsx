import React, { createContext } from "react";

export const AuthCtx = createContext("");

export default function AuthCtxProvider({ children }) {
  const [loginPanel, setLoginPanel] = React.useState(true);
  return (
    <AuthCtx.Provider value={{ loginPanel, setLoginPanel }}>
      {children}
    </AuthCtx.Provider>
  );
}
