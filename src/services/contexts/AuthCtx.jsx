import React, { createContext } from "react";
export const AuthCtx = createContext("");
export default function AuthCtxProvider({ children }) {
  return <AuthCtx.Provider>{children}</AuthCtx.Provider>;
}
