import { Star } from "lucide-react";
import React from "react";

export default function Review() {
  const shortBy = [
    "5 Star Rating",
    "4 Star Rating",
    "3 Star Rating",
    "2 Star Rating",
    "1 Star Rating",
  ];

  
  return (
    <>
      <div className="flex flex-col gap-[34px]">
        <p className="text-2xl leading-[32px] font-semibold">Program Rating</p>
        <div className="grid grid-cols-[200px_1fr] gap-x-6">
          {/* ------------------------------ ratting gross ----------------------------- */}
          <div className="flex flex-col gap-y-[24px] w-[200px] h-[190px] items-center justify-center border">
            <p className="text-[48px] leading-[52px] font-semibold tracking-widest">
              4.8
            </p>
            <p className="flex items-center gap-1 flex-col">
              <span className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="w-5 text-yellow-500" />
                ))}
              </span>
              <span className="text-sm leading-[20px] font-medium tracking-widest">
                Course Rating
              </span>
            </p>
          </div>
          {/* ------------------------------ ratting scale ----------------------------- */}
          <div className="flex justify-center">
            <div className="flex flex-col gap-y-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="flex items-center gap-6">
                  <p className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="w-5 text-yellow-500" />
                    ))}
                  </p>
                  <p className="text-sm leading-[22px] tracking-widest">
                    5 Star Rating
                  </p>
                  <p className="text-sm flex gap-6 items-center ">
                    <span className="bg-yellow-500 h-[6px] w-[376px]"></span>
                    <span className="tracking-widest">00</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="tracking-wide">
          <div className="flex justify-between">
            <p className="text-2xl leading-[32px] font-semibold">
              Students Feedback
            </p>
            <select
              className="h-12 w-[200px] px-1 rounded bg-gray-50 border"
            >
              <option selected disabled>
                Select Rating
              </option>
              {shortBy.map((item) => (
                <option value={item} className="">
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
