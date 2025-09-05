import React from "react";
import HeaderDashboard from "./Headers.screens/HeadersHome.Headers";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footers.screens/Footer.Footers";
import BreadcrumbComponent from "../components/ui/BradcrumbComponent";

export default function Layout() {
  const location = useLocation();

  const breadcrumbPath = [
    "/search-programs",
    "/program-detail",
    "/university-detail",
  ];
  const showBreadCrumb = breadcrumbPath.some((path) =>
    location.pathname.startsWith(path)
  );
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="fixed z-[10]">
          <HeaderDashboard />
          {/* {showBreadCrumb && (
            <div className="px-6 py-4">
              <BreadcrumbComponent />
            </div>
          )} */}
        </header>
        <main className="pt-20">
          <Outlet />
        </main>
        <footer className="bottom-0">
          <Footer />
        </footer>
      </div>
    </>
  );
}
