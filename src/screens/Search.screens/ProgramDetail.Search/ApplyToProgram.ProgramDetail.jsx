import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { getAllCountries, handleEnrollProgram } from "../../../api/ApiCallHandler.api";
import Loader from "../../../components/ui/Loader";

export default function ApplyToProgram({ setIsOpenToApply, programDetail, setAlert }) {
  const [countryList, setCountryList] = useState([]);
  const [formData, setFormData] = useState({});
  const [isLoading, setisLoading] = useState(false);

  /* -------------------------------------------------------------------------- */
  /*         useEffect to fetch data of countries                               */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    const fetchCountryList = async () => {
      const countryListResp = await getAllCountries();
      setCountryList(countryListResp?.data || []);

    };
    fetchCountryList();
  }, []);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleEnrollProgram(formData, setAlert, setIsOpenToApply, setisLoading);
  }

  return (
    <>
      <div className="hidden lg:fixed lg:inset-0 z-50 lg:flex items-center justify-center bg-black/60 backdrop-blur-sm">
        <form className="relative w-full max-w-3xl overflow-y-auto bg-white rounded-2xl shadow-2xl border border-gray-200 max-h-[90vh] animate-fadeIn" onSubmit={handleSubmit}>
          {/* Header */}
          <div className="relative flex justify-between px-[34px] py-[20px] border-b primary text-white border-gray-200 ">
            <div className="tracking-wider">
              <h2 className="text-[25px] font-medium ">
                <abbr
                  className="no-underline cursor-default decoration-transparent hover:decoration-transparent"
                // title={selectedLiveClasses?.title}
                >
                  Enroll Now for {programDetail?.study_levels || '--'} Program
                </abbr>
              </h2>
              <p className="text-lg font-normal leading-[18px]">
                {programDetail?.program_name || '--'} - {programDetail?.total_duration || '--'} program
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
                    name="first_name"
                    onChange={handleChange}
                    placeholder="First Name"
                    className="border bg-[#F1F1F1] rounded-[5px] px-2 h-[44px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    onChange={handleChange}
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
                    name="email"
                    onChange={handleChange}
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
                    name="mobile_no"
                    onChange={handleChange}
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
                    name="dob"
                    onChange={handleChange}
                    placeholder="DOB"
                    className="border bg-[#F1F1F1] rounded-[5px] px-2 h-[44px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">
                    Nationality <sup className="text-red-500">*</sup>
                  </label>
                  <select className="border bg-[#F1F1F1] rounded-[5px] px-2 h-[44px]" name="country" onChange={handleChange}>
                    <option value="" disabled selected>
                      Select Nationality
                    </option>
                    {Array.isArray(countryList) &&
                      countryList.map((country, index) => (
                        <option key={index} value={country?.id}>
                          {country?.name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-lg leading-[18px] font-semibold">
                Message
              </p>
              {/* <div className="border-2 rounded-md"> */}
              <textarea
                rows="4"
                cols="50"
                name="message"
                onChange={handleChange}
                className="w-full h-full p-3 border-2 rounded-md"
                placeholder="Enter your text here">
              </textarea>
            </div>
            <div className="flex justify-end">
              <button
                className={`primary h-[48px] px-[38px] w-fit text-[20px] font-semibold text-white rounded-full hover:scale-105 primary-hover transition duration-300 cursor-pointer`}
              >
                Enroll Now
              </button>
            </div>
          </div>
        </form>
      </div>

      {isLoading && (<Loader />)}
    </>
  );
}
