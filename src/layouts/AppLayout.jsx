import React from "react";
import "./../styles/app/app-layout.css";
import App from "../App";
import Dev from "../components/dev-panel/Dev";
import { Header, Drawer } from "../components";
export default function AppLayout() {
  return (
    <div className="appLayout-container">
      <header className="appLayout-header-container">
        <Header />
        <Drawer />
      </header>
      <Dev />
      <App />
    </div>
  );
}
