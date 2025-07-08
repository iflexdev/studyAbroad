import React from "react";
import HeaderDashboard from "../Headers.screens/HeadersHome.Headers";
import { Outlet } from "react-router-dom";

export default function SearchLayout() {
  return (
    <>
      <header className="fixed z-[10]">
        <HeaderDashboard />
      </header>
      <main className="relative top-4">
        <Outlet />
      </main>
    </>
  );
}
