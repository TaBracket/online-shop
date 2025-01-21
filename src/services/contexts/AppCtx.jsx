import React, { createContext, useState } from "react";

export const AppCtx = createContext("");

export default function AppCtxProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const changeTheme = () => {
    setDarkMode((prevState) => !prevState);
  };
  return (
    <AppCtx.Provider value={{ darkMode, setDarkMode, changeTheme }}>
      {children}
    </AppCtx.Provider>
  );
}
