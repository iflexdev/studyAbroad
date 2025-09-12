import React, { useState } from "react";
import { postVerifyStudentDetails } from "../../api/ApiCallHandler.api";
import Alert from "../../utils/defaults/Alert.button";

const LoginForm = ({ onProceed, setEmail, email, mobile, setMobile, countryCode, setCountryCode }) => {
  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState();
  // const [countryCode, setCountryCode] = useState("+91");

  const validate = () => {
    let newErrors = {};
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Enter a valid email address";

    if (!mobile) newErrors.mobile = "Mobile number is required";
    else if (!/^\d+$/.test(mobile))
      newErrors.mobile = "Enter a valid mobile number";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      await postVerifyStudentDetails(setAlert, email, mobile, onProceed);
    }
  };


  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-xl p-8 w-[500px]">
          {/* Logo */}
          <div className="flex flex-col items-center mb-6">
            <img
              src="/logo/study_abroad.svg"
              alt="CHD Consultants"
              className="h-12 mb-2"
            />
            <h2 className="text-center text-lg text-black">
              Welcome to <span className="font-semibold">STUDY ABROAD</span>
            </h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="accounts@studyabroad.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-1">
                Mobile Number
              </label>
              <div className="flex">
                <select
                  className="flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg text-gray-600 text-lg focus:outline-none"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+61">+61</option>
                  <option value="+81">+81</option>
                </select>

                <input
                  type="text"
                  value={mobile}
                  onChange={(e) =>
                    setMobile(e.target.value.replace(/\D/g, ""))
                  }
                  // maxLength="10"
                  placeholder="9815344898"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-r-lg focus:outline-none focus:ring focus:ring-blue-400"
                  required
                />
              </div>
              {errors.mobile && (
                <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full text-lg bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Proceed
            </button>
          </form>
        </div>
      </div>

      {alert && (
        <Alert
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert(null)}
        />
      )}
    </>
  );
};

export default LoginForm;
