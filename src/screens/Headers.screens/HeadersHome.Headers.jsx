import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../utils/defaultHandlers/Logo";
export default function HeaderDashboard() {
  const pathName = location.pathname;
  const navigate = useNavigate();

  /* -------------------------------------------------------------------------- */
  /*                                 for Desktop                                */
  /* -------------------------------------------------------------------------- */
  const [activeDesktop, setActiveDesktop] = useState(
    pathName.includes("students") || pathName.includes("resources")
      ? "students"
      : pathName.includes("students")
      ? "resources"
      : pathName.includes("about") || pathName.includes("about-us")
      ? "about"
      : "home"
  );
  const menuItems = [
    { id: "home", title: "Home", to: "/", activeDesktop: true },
    {
      id: "students",
      title: "For Students",
      to: "",
      activeDesktop: false,
    },
    {
      id: "resources",
      title: "Resources",
      activeDesktop: false,
      to: "",
    },
    {
      id: "about",
      title: "About Us",
      activeDesktop: false,
      to: "",
    },
    {
      id: "contact",
      title: "Contact Us",
      activeDesktop: false,
      to: "",
    },
  ];

  const handleSearch = () => {
    navigate("/searchPrograms");
  };

  return (
    <>
      {/* desktop */}
      <div className="fixed top-0 left-0 z-50 w-full shadow-md bg-white/80 backdrop-blur-md">
        <div className={`mx-auto lg:px-[70px]`}>
          <div className="h-20 items-center flex ">
            <div className="grid grid-cols-1 w-full h-[48px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-10">
                  <div className="">
                    <Link to="/">
                      <Logo name="logo" alt="study abroad Logo" className="w-fit" />
                    </Link>
                  </div>
                  <div className="border border-gray-300 w-100 rounded-full px-4 py-2 cursor-pointer" onClick={handleSearch} role="button">search</div>
                </div>
                <div className="md:flex hidden items-center gap-5">
                  <div className="flex items-center gap-4">
                    {menuItems.map((item) => {
                      return (
                        <div
                          key={item.id}
                          onClick={() => setActiveDesktop(item.id)}
                          className={`inline-block mx-4 ${
                            activeDesktop === item.id
                              ? "font-bold primary-text"
                              : ""
                          }`}
                        >
                          <Link to={item.to} className="font-semibold">{item.title}</Link>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mt-2 md:mt-0">
                    <button className="border primary-border font-semibold primary-text rounded-full px-4 py-2 hover:primary hover:text-white transition duration-300">
                      Sign In
                    </button>
                    <button className="primary font-semibold text-white rounded-full px-4 py-2 hover:bg-blue-600 transition duration-300 ">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
