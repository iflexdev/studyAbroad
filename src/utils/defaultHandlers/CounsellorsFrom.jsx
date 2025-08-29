import React from "react";

export default function CounsellorsFrom() {
  return (
    <>
      <div className="max-w-[500px] bg-[#474747] text-white p-[33px] rounded-[15px] flex flex-col gap-y-[26px]">
        <p className="text-xl font-normal tracking-wide">
          Book your <span className="font-bold">FREE consultation</span> with
          Certified Counsellors
        </p>
        <div className="grid grid-cols-2 gap-[15px]">
          <input
            type="text"
            name=""
            id=""
            className="border border-white rounded-md px-3 py-2 col-span-2 h-[48px]"
            placeholder="Enter Your Name"
          />
          <input
            type="email"
            name=""
            id=""
            className="border border-white rounded-md px-3 py-2 h-[48px]"
            placeholder="Email ID"
          />
          <input
            type="text"
            name=""
            id=""
            className="border border-white rounded-md col-span-1 px-3 py-2 h-[48px]"
            placeholder="Phone No."
          />
          <textarea
            name=""
            id=""
            rows="4"
            className="border border-white rounded-md px-3 py-2 col-span-2 resize-none"
            placeholder="Type your message here..."
          ></textarea>
        </div>
        <button className={`h-[45px] bg-white text-lg rounded-full font-medium text-black hover:bg-gray-200 transition duration-300`}>Submit</button>
      </div>
    </>
  );
}
