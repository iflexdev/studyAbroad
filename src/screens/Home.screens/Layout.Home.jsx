import React from "react";
import HeaderDashboard from "../Headers.screens/HeadersHome.Headers";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header className="fixed z-[10]">
        <HeaderDashboard />
      </header>
      <main className="relative top-20">
        <Outlet />
      </main>
    </>
  );
}
