import React from "react";
import { CalendarDays, MapPin, Star, UsersRound } from "lucide-react";

export default function Banner() {
  return (
    <>
      <div className="programDetailsBannerBG">
        <div className="flex flex-col gap-[34px] py-[34px] px-[148px]">
          <div className="grid grid-cols-[1fr_auto]">
            <div className="grid grid-cols-[auto_1fr] gap-[30px]">
              <figure className="w-[59px] h-[59px] rounded-full border">
                <img src="" alt="" className="w-full h-full object-cover" />
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
                      <span>Enrolled&nbsp;&#x3a;&nbsp;{"54,548students"}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              className={`primary h-[48px] px-[38px]  text-[20px] font-semibold text-white rounded-full hover:bg-blue-600 transition duration-300`}
            >
              Apply Now
            </button>
          </div>
          <div className="grid grid-cols-[auto_auto_auto] gap-x-[16px]">
            <div className="w-[733px] row-span-1 border h-[400px]">first</div>
            <div className="row-span-2 w-[364px] flex flex-col gap-y-[16px]">
              <div className="h-[192px] border">second</div>
              <div className="h-[192px] border">third</div>
            </div>
            <div className="row-span-1 w-[487px] border h-[400px]">forth</div>
          </div>
        </div>
      </div>
    </>
  );
}
