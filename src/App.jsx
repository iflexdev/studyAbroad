import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./screens/Home.screens/HomeLayout.Home";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout/>,
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
