import React, { useContext, useEffect } from "react";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";
import { AppCtx } from "../../services/contexts/AppCtx";
export default function Theme() {
  const appContext = useContext(AppCtx);
  useEffect(() => {
    if (appContext.darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [appContext.darkMode]);
  return (
    <button className="header_themeBtn" onClick={appContext.changeTheme}>
      <div className="header_theme--insideContainer">
        {appContext.darkMode ? (
          <div className="header_theme_insideContainer--lightMode">
            <MdLightMode className="header_changeTheme--icons" />
            <h2>light mode</h2>
          </div>
        ) : (
          <div className="header_theme_insideContainer--darkMode">
            <MdOutlineDarkMode className="header_changeTheme--icons" />
            <h2>dark mode</h2>
          </div>
        )}
      </div>
    </button>
  );
}
