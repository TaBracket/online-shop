import React from "react";
import { Outlet } from "react-router-dom";

export default function ProductsLayout() {
  return (
    <div>
      <h1>ProductsLayout</h1>
      <Outlet />
    </div>
  );
}
