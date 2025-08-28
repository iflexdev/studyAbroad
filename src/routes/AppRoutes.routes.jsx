import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "../screens/Home.screens/Home.Home/HomeLayout.Home";
import SearchLayout from "../screens/Search.screens/SearchLayout.Search";
import Layout from "../screens/Layout.Home";
import ProgramDetail from "../screens/Search.screens/ProgramDetail.Search/ProgramDetail.ProgramDetail";
import UniversityDetail from "../screens/Search.screens/UniversityDetail.Search/UniversityDetail";

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
          path: "program-detail",
          element: <ProgramDetail />
        },
        {
          path: "university-detail",
          element: <UniversityDetail />
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
