import React from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import HomeLayout from "../screens/Home.screens/Home.Home/HomeLayout.Home";
import SearchLayout from "../screens/Search.screens/SearchLayout.Search";
import Layout from "../screens/Layout.Home";
import ProgramDetail from "../screens/Search.screens/ProgramDetail.Search/ProgramDetail.ProgramDetail";
import UniversityDetail from "../screens/Search.screens/UniversityDetail.Search/UniversityDetail";
import Login from "../screens/StudentEnquiry.screens/Login";

export default function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: "student-enquiry",
      element: <Login />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <HomeLayout />,
        },
        {
          path: "search-programs",
          element: <SearchLayout />,
        },
        {
          path: "program-detail/:id",
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
