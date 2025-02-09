import React, { useState } from "react";
export const AppCtx = React.createContext();

export default function AppCtxProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const changeThemeHandler = () => {
    setIsDarkMode((prevTheme) => !prevTheme);
  };
  return (
    <AppCtx.Provider value={{ isDarkMode, changeThemeHandler }}>
      {children}
    </AppCtx.Provider>
  );
}
