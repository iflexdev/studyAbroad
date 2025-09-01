import React, { useState } from "react";
import { CalendarDays, MapPin, Star, UsersRound } from "lucide-react";
import ApplyToProgram from "./ApplyToProgram.ProgramDetail";

export default function Banner() {
  const [isOpenToApply, setIsOpenToApply] = useState(false);
  return (
    <>
      <div className="programDetailsBannerBG tracking-wide">
        <div className="flex flex-col gap-[34px] py-[34px] px-[148px]">
          <div className="grid grid-cols-[1fr_auto]">
            <div className="grid grid-cols-[auto_1fr] gap-[30px]">
              <figure className="w-[59px] h-[59px] rounded-full">
                <img
                  src="/logo/favicon.svg"
                  alt=""
                  className="w-full h-full cover"
                />
              </figure>
              <div className="capitalize flex flex-col gap-[12px]">
                <h1 className="text-[40px] leading-[50px] font-semibold">
                  program title
                </h1>
                <div className="text-gray-600 flex flex-col gap-1">
                  <div className="flex gap-[13px] items-center text-base font-medium ">
                    <p className="text-yellow-500 flex items-center gap-1">
                      <span>4.5</span>
                      <Star className="w-4" />
                    </p>
                    <p className="flex items-center gap-1">
                      &#x2772;<span>123456</span>
                      <span>rating</span>&#x2773;
                    </p>
                    <p className="flex items-center gap-1">
                      <span>123456</span>
                      <span>students</span>
                    </p>
                  </div>
                  <div className="flex gap-[34px] items-center text-base font-medium ">
                    <p className="flex items-center gap-1">
                      <MapPin className="w-4" />
                      <span>location</span>
                    </p>
                    <p className="flex items-center gap-1">
                      <CalendarDays className="w-4" />
                      <span>duration&nbsp;&#x3a;&nbsp;{"3 months"}</span>
                    </p>
                    <p className="flex items-center gap-1">
                      <UsersRound className="w-4" />
                      <span>Enrolled&nbsp;&#x3a;&nbsp;{"54,548"}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpenToApply(!isOpenToApply)}
              className={`primary h-[48px] px-[38px]  text-[20px] font-semibold text-white rounded-full hover:scale-105 primary-hover transition duration-300`}
            >
              Apply Now
            </button>
          </div>
          <div className="grid grid-cols-[auto_auto_auto] gap-x-[16px]">
            <div className="w-[733px] row-span-1 h-[400px] border relative group">
              <img
                src="https://images.unsplash.com/20/cambridge.JPG?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
                className="w-full h-full object-cover"
              />
              <span
                onClick={() => {}}
                className="absolute bottom-2 right-2 transform transition-transform duration-300 group-hover:scale-115 bg-gray-300 h-[41px] w-[41px] flex items-center justify-center rounded-full text-base font-semibold hover:bg-white cursor-pointer"
              >
                +5
              </span>
            </div>
            <div className="row-span-2 w-[364px] flex flex-col gap-y-[16px]">
              <div className="h-[192px] hover:scale-105 transition duration-500 border">
                <img
                  src="https://images.unsplash.com/photo-1568792923760-d70635a89fdc?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[192px] hover:scale-105 transition duration-500 border">
                <img
                  src="https://images.unsplash.com/photo-1587418481741-c9f1358a123b?q=80&w=1123&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="row-span-1 w-[487px] h-[400px] hover:scale-105 transition duration-500 border">
              <img
                src="https://plus.unsplash.com/premium_photo-1683887034473-74e486cdb7a1?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* -----------------------------Apply button popup----------------------------- */}
      {isOpenToApply && <ApplyToProgram setIsOpenToApply={setIsOpenToApply} isOpenToApply={isOpenToApply}/>}
    </>
  );
}
