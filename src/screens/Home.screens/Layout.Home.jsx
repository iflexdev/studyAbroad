import React from "react";
import HeaderDashboard from "../Headers.screens/HeadersHome.Headers";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="w-full h-screen mx-auto">
        {/* Header */}
        <div className="w-full shadow-md shadow-[#0000000A]">
          <div className="lg:w-[1440px] xl:w-[1440px] w-full mx-auto">
            <div className="lg:w-[1152px] xl:w-[1152px] w-full mx-auto">
                <HeaderDashboard/>
            </div>
          </div>
        </div>
        {/* Main Content */}
        {/* <div className="xl:w-[1440px] lg:w-[1440px] w-full mx-auto"> */}
          {/* <main className="xl:w-[1152px] lg:w-[1152px] w-full xl:mt-[72px] lg:[72px] mt-[0px] mx-auto"> */}
            <Outlet />
          {/* </main> */}
        {/* </div> */}
      </div>
    </>
  );
}