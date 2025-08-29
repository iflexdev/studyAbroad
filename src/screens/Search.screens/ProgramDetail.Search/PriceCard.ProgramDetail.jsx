import React from "react";
import Icons from "../../../utils/defaultHandlers/Icons";
import { IndianRupee } from "lucide-react";
import { SvgIcons } from "../../../utils/defaults/All_Images_Logo";
import CounsellorsFrom from "../../../utils/defaultHandlers/CounsellorsFrom";

export default function PriceCard() {
    /* ------------------------ all price and icons array ----------------------- */
  const records = [
    { id: 1, name: "clockHours", title: "Course Duration", value: "6 months" },
    {
      id: 2,
      name: "bar",
      title: "Gross Tuition",
      value: "Rs. 12,775.00 / First Year",
    },
    {
      id: 3,
      name: "hut",
      title: "Cost of Living",
      value: "Rs. 12,775.00 / First Year ",
    },
  ];
  /* ----------------- all social Media copy and navigate link ---------------- */
  const socialMedia = [
    {
      id: 0,
      name: "copy",
      title: "Copy Link",
      link: "https://www.google.com/",
    },
    { id: 1, name: "facebook", title: "", link: "https://www.facebook.com/" },
    { id: 2, name: "twitter", title: "", link: "https://twitter.com/" },
    { id: 3, name: "mailOutline", title: "", link: "https://in.linkedin.com/" },
    { id: 4, name: "whatsapp", title: "", link: "https://wa.me/91 9999999999" },
  ];
  return (
    <>
      <div className="flex flex-col w-full gap-y-[27px]">
        {/*------------------------------- blue tile of price -------------------------------*/}
        <div className="primary rounded-[10px] text-white px-[63px] py-[15px]">
          <div className="grid grid-cols-[auto_1fr] gap-x-[12px]">
            <Icons name={"price"} className="w-[46px]" />
            <div className="">
              <div className="flex flex-col items-center">
                <p className="font-medium text-xl">Total Course Investment</p>
                <p className="flex items-center gap-1">
                  <IndianRupee className="w-[25px]" />
                  <span className="font-bold text-[28.6px]">13,3410</span>
                </p>
              </div>
              <div className="flex flex-col items-center leading-25">
                <p className="font-medium text-base">
                  Tuition fees + Living costs
                </p>
                <p className="font-medium text-base">
                  Complete program cost estimate
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*------------------------------- white tile of Enrollment -------------------------------*/}
        <div className="rounded-[10px] p-5 border shadow-sm flex flex-col gap-y-[24px]">
          <p className="font-medium text-xl leading-[22px]">Cost & Duration</p>
          <div className="flex flex-col gap-y-[24px]">
            {records.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-[35px_1fr] gap-x-[17px] h-[46px]"
              >
                <Icons name={item.name} className="w-[35px] h-[35px]" />
                <div className="flex flex-col">
                  <p className="font-medium text-xl leading-[22px]">
                    {item.value}
                  </p>
                  <p className="font-medium text-base leading-[22px] text-gray-500">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button
            className={`primary h-[56px] text-[20px] font-semibold text-white hover:bg-blue-600 transition duration-300`}
          >
            Enroll Now
          </button>
          <p className="font-medium text-base leading-[22px]">
            Share this course:
          </p>
          <div className="flex items-center gap-x-[8px]">
            {socialMedia.map((item) => (
              <button
                key={item.id}
                onClick={() => window.open(item.link, "_blank")}
                className={`bg-gray-200 h-[48px] font-semibold flex items-center justify-center px-[15px] py-[12px] hover:bg-gray-100 transition duration-300 ${item.title !== "" && "gap-x-[8px]"}`}
              >
                <Icons name={item.name} className="w-[20px] h-[20px]" />
                {item.title !== "" && (
                  <p className="text-sm text-gray-500">{item.title}</p>
                )}
              </button>
            ))}
          </div>
        </div>
        {/*------------------------------- Counsellors form -------------------------------*/}
        <CounsellorsFrom />
      </div>
    </>
  );
}
