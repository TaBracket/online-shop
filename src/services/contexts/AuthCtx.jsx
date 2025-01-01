import React, { createContext } from "react";

export const AuthCtx = createContext("");

export default function AuthCtxProvider({ children }) {
  return <AuthCtx.Provider value={"1"}>{children}</AuthCtx.Provider>;
}
