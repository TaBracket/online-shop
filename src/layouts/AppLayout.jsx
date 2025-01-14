import React from "react";
import App from "../App";
import { Header } from "./../components";
import Dev from "../components/dev-panel/Dev";

export default function AppLayout() {
  return (
    <div>
      <Header />
      <Dev />
      <App />
    </div>
  );
}
