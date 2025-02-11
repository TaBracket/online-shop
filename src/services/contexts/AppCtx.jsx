import React, { useState } from "react";
export const AppCtx = React.createContext();

export default function AppCtxProvider({ children }) {
  // dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);
  const changeThemeHandler = () => {
    setIsDarkMode((prevTheme) => !prevTheme);
  };
  // dark mode
  //main drawer
  const [openMainDrawer, setOpenMainDrawer] = useState(false);
  const openMainDrawerHandler = () => {
    setOpenMainDrawer(true);
    console.log("openDrawer");
  };
  const closeMainDrawerHandler = () => {
    setOpenMainDrawer(false);
    console.log("close drawer");
  };
  //main drawer
  return (
    <AppCtx.Provider
      value={{
        isDarkMode,
        changeThemeHandler,
        // dark mode
        openMainDrawer,
        openMainDrawerHandler,
        closeMainDrawerHandler,
        // main drawer
      }}
    >
      {children}
    </AppCtx.Provider>
  );
}
