import React, { useState } from "react";
import { handleSendEnquiry } from "../../api/ApiCallHandler.api";
import Loader from "../../components/ui/Loader";

export default function CounsellorsFrom({ setAlert, programDetail }) {
  const [formData, setFormData] = useState({});
  const [isLoading, setisLoading] = useState(false);

  /* -------------------------------------------------------------------------- */
  /*                  function to update input values in state                  */
  /* -------------------------------------------------------------------------- */
  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDetail = {
      ...formData,
      program_id: programDetail?.program_id
    }
    await handleSendEnquiry(formDetail, setAlert, setisLoading, setFormData);
  }

  return (
    <>
      <form className="max-w-[500px] bg-[#474747] text-white p-[33px] rounded-[15px] flex flex-col gap-y-[26px]" onSubmit={handleSubmit}>
        <p className="text-xl font-normal tracking-wide">
          Book your <span className="font-bold">FREE consultation</span> with
          Certified Counsellors
        </p>
        <div className="grid grid-cols-2 gap-[15px]">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            id=""
            className="border border-white rounded-md px-3 py-2 col-span-2 h-[48px]"
            placeholder="Enter Your Name"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            id=""
            className="border border-white rounded-md px-3 py-2 h-[48px]"
            placeholder="Email ID"
          />
          <input
            type="text"
            name="mobile_no"
            value={formData.mobile_no}
            onChange={handleChange}
            id=""
            className="border border-white rounded-md col-span-1 px-3 py-2 h-[48px]"
            placeholder="Phone No."
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            id=""
            rows="4"
            className="border border-white rounded-md px-3 py-2 col-span-2 resize-none"
            placeholder="Type your message here..."
          ></textarea>
        </div>
        <button className={`h-[45px] bg-white text-lg rounded-full font-medium text-black hover:bg-gray-200 transition duration-300`}>Submit</button>
      </form>

      {isLoading && (<Loader />)}
    </>
  );
}
