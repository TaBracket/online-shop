import React from "react";
import "./styles/App.css";
import AppRoutes from "./services/routes/AppRoutes";
export default function App() {
  return (
    <div className="">
      <div className="app--header">header</div>
      <div className="app--main">
        <AppRoutes />
      </div>
      <div className="app--footer">footer</div>
    </div>
  );
}
