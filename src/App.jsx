import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./screens/Home.screens/Layout.Home";
import HomeLayout from "./screens/Home.screens/Home.Home/HomeLayout.Home";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "",
          element: <HomeLayout/>
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
