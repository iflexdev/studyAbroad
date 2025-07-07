import React from "react";
import Images from "../../../utils/defaultHandlers/Images";

export default function TopBanner() {
  return (
    <>
      <div className="h-[620px] w-full bg-cover bg-[url('/images/home_topBanner_bg.png')]">
        <div className="container mx-auto">
          <div className="grid grid-cols-[55%_45%] w-full relative top-5">
            <div className="flex flex-col gap-4 w-[693px] h-[396px] justify-center items-start my-auto gap-y-10">
              <div className="space-y-6">
                <h1 className="text-[60px] font-normal leading-snug">Step In with Hope. Step Out with Success.</h1>
                <p className="text-[22px] font-medium">
                  Explore 1,500+ international universities. Get expert help to
                  submit strong applications with a 95% success rate. Start your
                  journey with ApplySuccess!
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button className="bg-blue-500 w-49 h-15  font-semibold text-white rounded-full px-4 py-2 hover:bg-blue-600 transition duration-300 ">
                  Start Your Journey
                </button>
              </div>
            </div>
            <div className="">
              <Images name="banner" className="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
