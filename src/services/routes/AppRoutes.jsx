import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../../pages/home/Home";

export default function AppRoutes() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return routes;
}
