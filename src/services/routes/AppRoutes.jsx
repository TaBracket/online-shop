import React from "react";
import { useRoutes } from "react-router-dom";
import {
  Home,
  NotFound,
  UserPage,
  ProductsPage,
  DocsPage,
  AuthPage,
  BasketPage,
} from "../../pages";
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
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "/products",
      element: <ProductsLayout />,
      children: [
        {
          index: true,
          element: <ProductsPage />,
        },
      ],
    },
    {
      path: "/user",
      element: <UserLayout />,
      children: [
        {
          index: true,
          element: <UserPage />,
        },
      ],
    },
    {
      path: "/docs",
      element: <DocumentsLayout />,
      children: [
        {
          index: true,
          element: <DocsPage />,
        },
      ],
    },
    {
      path: "/basket",
      element: <BasketLayout />,
      children: [
        {
          index: true,
          element: <BasketPage />,
        },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <AuthPage />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return routes;
}
