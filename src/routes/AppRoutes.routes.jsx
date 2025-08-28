import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../screens/Home.screens/Layout.Home";
import HomeLayout from "../screens/Home.screens/Home.Home/HomeLayout.Home";
import SearchLayout from "../screens/Search.screens/SearchLayout.Search";
import MainCard from "../screens/Search.screens/CardDetail.Search/MainCard.CardDetail";

export default function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <HomeLayout />,
        },
        {
          path: "searchPrograms",
          element: <SearchLayout />,
        },
        {
          path: "card-details",
          element: <MainCard />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
