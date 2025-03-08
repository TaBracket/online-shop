import React, { createContext } from "react";

export const AppCtx = createContext("");

export default function AppCtxProvider({ children }) {
  return <AppCtx.Provider value="app context">{children}</AppCtx.Provider>;
}
