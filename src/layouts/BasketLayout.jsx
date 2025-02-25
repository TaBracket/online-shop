import React from "react";
import { Outlet } from "react-router-dom";

export default function BasketLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
