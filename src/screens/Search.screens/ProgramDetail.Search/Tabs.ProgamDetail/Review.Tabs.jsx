import { Star } from "lucide-react";
import React from "react";
import { Progress } from "../../../../utils/defaultHandlers/progress";

export default function Review({ Review }) {
  const shortBy = [
    "5 Star Rating",
    "4 Star Rating",
    "3 Star Rating",
    "2 Star Rating",
    "1 Star Rating",
  ];

  function randomNumber(){
    return Math.floor(Math.random() * 90) + 10; 
  }


  return (
    <>
      <div className="flex flex-col gap-[34px]">
        <p className="text-2xl leading-[32px] font-semibold">Program Rating</p>
        <div className="grid grid-cols-[200px_1fr] gap-x-6">
          {/* ------------------------------ ratting gross ----------------------------- */}
          <div className="flex flex-col gap-y-[24px] w-[200px] h-[190px] items-center justify-center border">
            <p className="text-[48px] leading-[52px] font-semibold tracking-widest">
              {Review?.CourseRating || 4.8}
            </p>
            <p className="flex items-center gap-1 flex-col">
              {/* <span className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="w-5 text-yellow-500" />
                ))}
              </span> */}

              <span className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => {
                  const starNumber = index + 1;
                  const isFull = starNumber <= Math.floor(4.6);
                  const isPartial = starNumber === Math.ceil(4.6) && !isFull;

                  return (
                    <div key={index} className="relative w-5 h-5">
                      {/* Empty star (gray outline but filled transparent) */}
                      <Star className="w-5 h-5 text-yellow-500" />

                      {/* Filled star (solid yellow) */}
                      {(isFull || isPartial) && (
                        <Star
                          className="w-5 h-5 text-yellow-500 absolute top-0 left-0"
                          fill="currentColor"
                          style={
                            isPartial
                              ? {
                                clipPath: `inset(0 ${100 - (4.6 % 1) * 100}% 0 0)`,
                              }
                              : {}
                          }
                        />
                      )}
                    </div>
                  );
                })}
              </span>

              <span className="text-sm leading-[20px] font-medium tracking-widest">
                Course Rating
              </span>
            </p>
          </div>
          {/* ------------------------------ ratting scale ----------------------------- */}
          <div className="flex justify-center">
            <div className="flex flex-col gap-y-4">
              {(Review?.ratings || []).map((item, index) => {
                const filledStars = 5 - index; // 5 → 1
                return (
                  <div key={index} className="flex items-center gap-6">
                    <p className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className="w-5 h-5 text-yellow-500"
                          fill={starIndex < filledStars ? "currentColor" : "none"}
                          color={starIndex < filledStars ? "#facc15" : "#EAB308"} // yellow-400 or gray-300
                        />
                      ))}
                    </p>
                    <p className="text-sm leading-[22px] tracking-widest">
                      {item}
                    </p>
                    <p className="text-sm flex gap-6 items-center ">
                      <Progress
                        className={"h-[8px] w-[376px] bg-gray-100"}
                        value={(filledStars*100)/5}
                        indicatorClassName={
                          "bg-gradient-to-r from-[#EAB308] to-[#FEF08A]"
                        }
                      />
                      {/* <span className="bg-yellow-500 h-[6px] w-[376px]"></span> */}
                      <span className="tracking-widest">{randomNumber()}</span>
                    </p>
                  </div>
                )
              })}
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
