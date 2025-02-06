import React from "react";
import "./../styles/app/layout.css";
import App from "../App";
import DevPanel from "../components/devPanel/DevPanel";
import MainHeader from "../components/main-header/MainHeader";

export default function AppLayout() {
  return (
    <div className="appLayout">
      <DevPanel />
      <MainHeader />
      <App />
    </div>
  );
}
