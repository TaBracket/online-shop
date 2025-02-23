import React, { createContext } from "react";
const AuthCtx = createContext("");
export default function AuthCtxProvider({ children }) {
  return <AuthCtx.Provider>{children}</AuthCtx.Provider>;
}
