import React from "react";

export default function ProgramCard({card}) {
  return (
    <>
      <div id={card.id} className="group h-[598px] border-2 p-5 rounded-2xl flex flex-col gap-y-5 hover:bg-[#F5F8FA] transform transition-all ease-linear delay-100">
        <div className="grid grid-rows-1 grid-cols-[auto_auto] justify-start items-start h-[82px] gap-x-5">
          <div className="w-[79px] h-[79px] rounded-full border overflow-hidden border-green-700 flex justify-center items-center">
            <img
              src={card.logo !== ""  ? card.logo : "/logo/favicon.svg"}
              // src={card.logo ||"/logo/favicon.svg"}
              alt="University Logo"
              className="object-contain max-w-full max-h-full p-4 mx-auto my-auto"
            />
          </div>
          <div className="flex-col gap-y-3.5 flex">
            <p id={card.university_id} className="font-semibold text-lg capitalize line line-clamp-2">
              {card.university_name || "University name not found"}
            </p>
            <div className="flex justify-start items-start gap-2 overflow-hidden w-[314px]">
              <p id={card.study_levels_id} className="rounded-sm capitalize bg-gray-100 text-gray-500 border h-6 px-2 py-2 w-fit flex justify-between items-center">
                {card.study_levels || "not found"}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <p id={card.program_id} className="font-medium text-[21px] capitalize line-clamp-2">
            {card.program_name}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-6 text-gray-700">
          <div>
            <p className="text-gray-400 text-[13.46px]">Location</p>
            <p className="font-medium text-base"><span id={card.country_id}>{card.country_name || "not found"}</span>{", "}<span>{card.currency || ""}</span></p>
          </div>
          <div>
            <p className="text-gray-400 text-[13.46px]">Campus city</p>
            <p className="font-medium text-base"><span id={card.city_id}>{card.city_name || "not found"}</span></p>
          </div>
          <div>
            <p className="text-gray-400 text-[13.46px]">Tuition (1st year)</p>
            <p className="font-medium text-base">{card.tution_fee || "not found"}</p>
          </div>
          <div>
            <p className="text-gray-400 text-[13.46px]">Application fee</p>
            <p className="font-medium text-base"><span>{card.application_fees || "not found"}{" "}{card.currency || ""}</span></p>
          </div>
          <div>
            <p className="text-gray-400 text-[13.46px]">Duration</p>
            <p className="font-medium text-base">{card.total_duration || "not found"}</p>
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
          <button className="w-full group-hover:scale-[1.05] group-hover:bg-[#1f5fc7] group-hover:text-white h-full rounded-lg text-base border-gray-300 border-2 text-gray-600 bg-secondary hover:bg-[#1f5fc7] hover:text-white transform transition-all ease-in-out font-semibold">
            Create Application
          </button>
        </div>
      </div>
    </>
  );
}
