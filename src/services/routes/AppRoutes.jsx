import React from "react";
import { useRoutes } from "react-router-dom";
import { Home, NotFound } from "../../pages";
import {
  ProductsLayout,
  BasketLayout,
  HomeLayout,
  UserLayout,
  DocumentsLayout,
  AuthLayout,
} from "./../../layouts/index";
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
