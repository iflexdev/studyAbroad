import React from "react";
import { Data } from "../data";
import { CircleCheckBig } from "lucide-react";
import Images from "../../../../utils/defaultHandlers/Images";

export default function Overview({ programDetail }) {

  return (
    <>
      <div className="tracking-wide flex flex-col gap-y-[35px]">
        <div className="">
          <p className="font-semibold text-[25px] leading-[31px]">
            About this course
          </p>
          <blockquote className="py-[13px] paragraph-text whitespace-pre-line space-y-2 text-justify tracking-wider leading-[26px] text-base">
            {programDetail?.Overview?.courseDetail}
          </blockquote>
        </div>
        <div className="gray-200 rounded-[9px] py-[34px] px-[46px] flex flex-col gap-y-[31px]">
          <p className="font-semibold text-[25px] leading-[31px]">
            What you will Learn in this Program
          </p>
          <div className="flex flex-row gap-x-[34px]">
            {programDetail?.Overview?.WhatYouwillLearn?.map((item) => (
              <div
                key={item.id}
                className="bg-white px-[22px] py-[30px] text-center w-[300px] h-[112px] rounded-[6px] space-y-2"
              >
                <p className="text-2xl font-semibold">{item.value}</p>
                <p className="text-lg font-medium leading-[17px]">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
          <div className="">
            {programDetail?.Overview?.list?.map((item, index) => (
              <div key={index} className="flex items-center gap-x-[18px]">
                <CircleCheckBig className="w-[23px] text-blue-700" />
                <p className="text-base font-medium leading-[36px]">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-[1fr_auto] gap-x-[84px] primary rounded-[9px] pe-[46px] text-white">
            <div className="flex flex-col py-[34px] ps-[36px] gap-y-5">
              <p className="font-semibold text-[25px] leading-[27px]">
                Why to Choose University of Canterbury
              </p>
              <p className="text-base tracking- leading-[26px]">
                {programDetail?.whyTOChoose?.description}
              </p>
              <div className="">
                {programDetail?.whyTOChoose?.list?.map((item, index) => (
                  <div key={index} className="flex items-center gap-x-[18px]">
                    <CircleCheckBig className="w-[23px]" />
                    <p className="text-base font-medium leading-[36px]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[421px] h-auto">
              <Images
                name="programBanner"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
