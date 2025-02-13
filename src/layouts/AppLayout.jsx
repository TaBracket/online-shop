import React, { useEffect } from "react";
import "./../styles/app/layout.css";
import App from "../App";
import DevPanel from "../components/devPanel/DevPanel";
import MainHeader from "../components/main-header/MainHeader";
import { AppCtx } from "../services/contexts/AppCtx";
import Drawer from "./../components/main-header/Drawer";
export default function AppLayout() {
  const appContext = React.useContext(AppCtx);
  const { isDarkMode } = appContext;
  useEffect(() => {
    const htmlElement = document.documentElement;

    if (isDarkMode) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <div className="appLayout">
      {/* <DevPanel /> */}
      <MainHeader />
      <Drawer />
      <App />
    </div>
  );
}
