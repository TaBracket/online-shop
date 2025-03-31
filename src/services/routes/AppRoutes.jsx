import React from "react";
import { useRoutes } from "react-router-dom";
import { AuthLayout, ProductsLayout, HomeLayout } from "../../layouts";
import { NotFoundPage } from "../../pages";

export default function AppRoutes() {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [],
    },
    {
      path: "/products",
      element: <ProductsLayout />,
      children: [],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
    },
    {
      path: "/*",
      element: <NotFoundPage />,
    },
  ]);
  return routes;
}
