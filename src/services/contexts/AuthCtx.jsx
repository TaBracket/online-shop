import React, { createContext } from "react";

export const AuthCtx = createContext("");

export default function AuthCtxProvider({ children }) {
  return <AuthCtx.Provider value="auth context">{children}</AuthCtx.Provider>;
}
