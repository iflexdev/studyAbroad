import React from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes.routes";

export default function App() {
  return (
    <>
        <AppRoutes />
    </>
  );
}

// import React from "react";
// import "./App.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Layout from "./screens/Home.screens/Layout.Home";
// import HomeLayout from "./screens/Home.screens/Home.Home/HomeLayout.Home";
// import SearchLayout from "./screens/Search.screens/SearchLayout.Search";
// // import SearchDashboard from "./screens/Home.screens/Search.Home/SearchDashboard";

// export default function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Layout/>,
  //     children: [
  //       {
  //         path: "",
  //         element: <HomeLayout/>
  //       },
  //       {
  //         path: "searchPrograms",
  //         element: <SearchLayout />
  //       }
  //     ]
  //   }
  // ])
  // return (
  //   <>
  //     <RouterProvider router={router} />
  //   </>
  // );
// }
