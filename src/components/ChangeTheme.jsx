import React from "react";
import "./../styles/components/theme-changer.css";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { AppCtx } from "../services/contexts/AppCtx";

export default function ChangeTheme() {
  const appContext = React.useContext(AppCtx);
  const { isDarkMode, changeThemeHandler } = appContext;
  return (
    <button
      className={`changeTheme ${isDarkMode ? "bg-zinc-700" : "bg-zinc-100"}`}
      onClick={changeThemeHandler}
    >
      {isDarkMode ? (
        <MdLightMode className="changeTheme--icon-light" />
      ) : (
        <MdDarkMode className="changeTheme--icon-dark" />
      )}
    </button>
  );
}
