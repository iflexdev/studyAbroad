import React from "react";

export default function ProgramCard() {
  return (
    <>
      <div className="w-[456px] h-[598px] border-2 p-5 rounded-2xl flex flex-col gap-y-5">
        <div className="grid grid-rows-1 grid-cols-[auto_auto] justify-start items-start h-[82px] gap-x-5">
          <div className="w-[79px] h-[79px] rounded-full border overflow-hidden border-green-700 flex justify-center items-center">
            <img
              src="/images/university-logo.png"
              alt="University Logo"
              className="object-contain w-full h-full"
            />
          </div>
          <div className="flex-col gap-y-3.5 flex">
            <p className="font-semibold text-lg capitalize line line-clamp-2">
              University name title University name title University name title
              University name title University name title University name title
            </p>
            <div className="flex justify-start items-start gap-2 overflow-hidden w-[314px]">
              <p className="rounded-sm capitalize bg-gray-100 text-gray-500 border h-6 px-2 py-2 w-fit flex justify-between items-center">
                Degree
              </p>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <p className="font-medium text-[21px] capitalize line-clamp-2">
            University name title University name title University name title
            University name title University name title
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-6 text-gray-700">
          <div>
            <p className="text-gray-400 text-[13.46px]">Location</p>
            <p className="font-medium text-base">British Columbia, CAN</p>
          </div>
          <div>
            <p className="text-gray-400 text-[13.46px]">Campus city</p>
            <p className="font-medium text-base">New Westminster</p>
          </div>
          <div>
            <p className="text-gray-400 text-[13.46px]">Tuition (1st year)</p>
            <p className="font-medium text-base">$18,300 CAD</p>
          </div>
          <div>
            <p className="text-gray-400 text-[13.46px]">Application fee</p>
            <p className="font-medium text-base">$180 CAD</p>
          </div>
          <div>
            <p className="text-gray-400 text-[13.46px]">Duration</p>
            <p className="font-medium text-base">24 months</p>
          </div>
        </div>
        <div className="">
          <p className="font-medium text-[13.46px] underline text-gray-500">
            Success Prediction
          </p>
          <div className="grid grid-cols-3 gap-4 mt-3">
            <div className="flex flex-col text-center gap-y-1 ">
              <p className="text-gray-400 text-[13.46px]">Sep 2025</p>
              <div className="w-full text-center py-1 text-xs bg-yellow-100">
                Low
              </div>
            </div>
            <div className="flex flex-col text-center gap-y-1 ">
              <p className="text-gray-400 text-[13.46px]">Sep 2025</p>
              <div className="w-full text-center py-1 text-xs bg-green-100">
                Very High
              </div>
            </div>
            <div className="flex flex-col text-center gap-y-1 ">
              <p className="text-gray-400 text-[13.46px]">Sep 2025</p>
              <div className="w-full text-center py-1 text-xs bg-green-100">
                Very High
              </div>
            </div>
          </div>
        </div>
        <div className="w-[414px] h-[46px] mt-[13px]">
          <button className="w-full h-full rounded-lg text-base primary text-white font-semibold">
            Create Application
          </button>
        </div>
      </div>
    </>
  );
}
