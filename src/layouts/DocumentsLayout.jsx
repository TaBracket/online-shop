import React from "react";
import { Outlet } from "react-router-dom";

export default function DocumentsLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
