import React from "react";
import { useRoutes } from "react-router-dom";
import { Home, NotFound } from "../../pages";
export default function AppRoutes() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return routes;
}
