import React from "react";
import { X } from "lucide-react";

export default function ApplyToProgram({ setIsOpenToApply }) {
  return (
    <>
      <div className="hidden lg:fixed lg:inset-0 z-50 lg:flex items-center justify-center bg-black/60 backdrop-blur-sm">
        <div className="relative w-full max-w-3xl overflow-y-auto bg-white rounded-2xl shadow-2xl border border-gray-200 max-h-[90vh] animate-fadeIn">
          {/* Header */}
          <div className="relative flex justify-between px-[34px] py-[20px] border-b primary text-white border-gray-200 ">
            <div className="tracking-wider">
              <h2 className="text-[25px] font-medium ">
                <abbr
                  className="no-underline cursor-default decoration-transparent hover:decoration-transparent"
                  // title={selectedLiveClasses?.title}
                >
                  Enroll Now for MBA Program
                </abbr>
              </h2>
              <p className="text-lg font-normal leading-[18px]">
                Master of Business Administration - 3 months program
              </p>
            </div>

            <button
              onClick={() => setIsOpenToApply(false)}
              className="top-5 absolute right-5 py-1 px-2 rounded-full bg-gray-300 opacity-70 hover:bg-gray-100 transition cursor-pointer"
            >
              <X className="w-4 font-bold primary-text" />
            </button>
          </div>
          {/* body */}
          <div className="px-[34px] py-[25px] flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <p className="text-lg leading-[18px] font-semibold">
                Personal Information
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="">
                    First Name <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="border bg-[#F1F1F1] rounded-[5px] px-2 h-[44px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="border bg-[#F1F1F1] rounded-[5px] px-2 h-[44px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">
                    Email Address <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="border bg-[#F1F1F1] rounded-[5px] px-2 h-[44px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">
                    Mobile Number <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    placeholder="Mobile Number"
                    className="border bg-[#F1F1F1] rounded-[5px] px-2 h-[44px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">
                    Date of Birth <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="date"
                    placeholder="DOB"
                    className="border bg-[#F1F1F1] rounded-[5px] px-2 h-[44px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">
                    Nationality <sup className="text-red-500">*</sup>
                  </label>
                  <select className="border bg-[#F1F1F1] rounded-[5px] px-2 h-[44px]">
                    <option value="Select" disabled>Select Nationality</option>
                    <option value="Indian">Indian</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-lg leading-[18px] font-semibold">
                Education Background
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="">
                    Highest Degree <sup className="text-red-500">*</sup>
                  </label>
                  <select className="border bg-[#F1F1F1] rounded-[5px] px-2 h-[44px]">
                    <option value="Select" disabled>Select Highest Degree</option>
                    <option value="B.Tech">B.Tech</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">
                    University/Institution <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    placeholder="University/Institution"
                    className="border bg-[#F1F1F1] rounded-[5px] px-2 h-[44px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">Graduation Year</label>
                  <input
                    type="text"
                    placeholder="Graduation Year"
                    className="border bg-[#F1F1F1] rounded-[5px] px-2 h-[44px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                className={`primary h-[48px] px-[38px] w-fit text-[20px] font-semibold text-white rounded-full hover:scale-105 primary-hover transition duration-300 cursor-pointer`}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
