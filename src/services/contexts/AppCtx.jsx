import React, { createContext } from "react";

export const AppCtx = createContext("");

export default function AppCtxProvider({ children }) {
  return <AppCtx.Provider>{children}</AppCtx.Provider>;
}
