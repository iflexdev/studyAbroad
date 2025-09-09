//
//
/* -------------------------------------------------------------------------- */
/*                           All API calls Handlers                           */
/* -------------------------------------------------------------------------- */
//
//
import React from "react";

import {
  countryList,
  courseLevel,
  enrollProgram,
  getExamList,
  programsCardData,
  programsDetail,
  programsList,
  resendMobileOtp,
  sendEnquiry,
  storeWalkinDetails,
  universityList,
  verifyOTP,
  verifyStudentDetails,
} from "./ApiCalls.api";

/* -------------------------------------------------------------------------- */
/*                   common function for handle error alert                   */
/* -------------------------------------------------------------------------- */
const handleError = (error, setAlert) => {
  const status = error.response?.status;
  const data = error.response?.data;

  if (status === 422 && data?.data) {
    const firstField = Object.keys(data.data)[0];
    const message = data.data[firstField][0] || data.message;
    return setAlert({ type: "error", message });
  }
  setAlert({
    type: "error",
    message: data?.message || "Something went wrong (catch block).",
  });
};
/* -------------------------------------------------------------------------- */
/*                     common function for handle success alert              */
/* -------------------------------------------------------------------------- */
const handleSuccess = (resp, setAlert, defaultMessage = "Success!") => {
  const message = resp?.data?.message?.trim() || defaultMessage;

  setAlert({
    type: "success",
    message,
  });
};

/* -------------------------------------------------------------------------- */
/*                    countries data list API call handler                    */
/* -------------------------------------------------------------------------- */
export const getAllCountries = async () => {
  try {
    const resp = await countryList();
    if (resp.status === 200) {
      const data = resp?.data;
      return data;
    }
  } catch (error) {
    return handleError(error);
  }
};

/* -------------------------------------------------------------------------- */
/*                    University data list API call handler                   */
/* -------------------------------------------------------------------------- */
export const getAllUniversities = async () => {
  try {
    const resp = await universityList();
    if (resp.status === 200) {
      const data = resp?.data;
      return data;
    }
  } catch (error) {
    return handleError(error);
  }
};

/* -------------------------------------------------------------------------- */
/*                   course level data list API call handler                  */
/* -------------------------------------------------------------------------- */
export const getAllCourseLevel = async () => {
  try {
    const resp = await courseLevel();
    if (resp.status === 200) {
      const data = resp?.data;
      return data;
    }
  } catch (error) {
    return handleError(error);
  }
};

/* -------------------------------------------------------------------------- */
/*                  Program types data list API call handler                  */
/* -------------------------------------------------------------------------- */
export const getAllProgramTypes = async () => {
  try {
    const resp = await programsList();
    if (resp.status === 200) {
      const data = resp?.data;
      return data;
    }
  } catch (error) {
    return handleError(error);
  }
};

/* -------------------------------------------------------------------------- */
/*                  Program cards data list API call handler                  */
/* -------------------------------------------------------------------------- */
export const getAllProgramCards = async (setAlert) => {
  try {
    const resp = await programsCardData();
    if (resp.status === 200) {
      //   handleSuccess(resp, setAlert, "Program data fetched successfully.");
      const data = resp?.data;
      return data;
    }
  } catch (error) {
    return handleError(error, setAlert);
  }
};

/* -------------------------------------------------------------------------- */
/*                  Program cards data list API call handler                  */
/* -------------------------------------------------------------------------- */
export const getAllProgramsDetail = async (id, setAlert) => {
  try {
    const resp = await programsDetail(id);
    if (resp.status === 200) {
      //   handleSuccess(resp, setAlert, "Program data fetched successfully.");
      const data = resp?.data;
      return data;
    }
  } catch (error) {
    return handleError(error, setAlert)
  }
};

/* -------------------------------------------------------------------------- */
/*                  Verify Student detail API call handler                  */
/* -------------------------------------------------------------------------- */
export const postVerifyStudentDetails = async (setAlert, email, mobile, onProceed) => {
  try {
    const resp = await verifyStudentDetails(email, mobile);
    if (resp.status === 200) {
      setAlert({
        type: "success",
        message: 'email is verified successfully',
      });
      setTimeout(() => {
        onProceed();
      }, 500);
      const data = resp?.data;
      return data;
    }
  } catch (error) {
    return handleError(error, setAlert)
  }
};

/* -------------------------------------------------------------------------- */
/*                  Store Walkin Details detail API call handler                  */
/* -------------------------------------------------------------------------- */
export const postStoreWalkinDetails = async (formData, setAlert) => {
  try {
    const resp = await storeWalkinDetails(formData);
    if (resp.status === 200) {
      const data = resp?.data;
      return data;
    }
  } catch (error) {
    return handleError(error, setAlert)
  }
};

/* -------------------------------------------------------------------------- */
/*                  Store Walkin Details detail API call handler                  */
/* -------------------------------------------------------------------------- */
export const fetchExamList = async () => {
  try {
    const resp = await getExamList();
    if (resp.status === 200) {
      const data = resp?.data;
      return data;
    }
  } catch (error) {
    return handleError(error)
  }
};

/* -------------------------------------------------------------------------- */
/*                  Store Walkin Details detail API call handler              */
/* -------------------------------------------------------------------------- */
export const handleVerifyOTP = async (mobile, otp, setAlert, setIsLoading, onProceed, setIsResend) => {
  try {
    setIsLoading(true);
    const resp = await verifyOTP(mobile, otp);
    if (resp.status === 200) {
      setIsLoading(false);
      onProceed();
      const data = resp?.data;
      return data;
    }
  } catch (error) {
    setIsLoading(false);
    setIsResend(true);
    setAlert({ type: "error", message: error?.response?.data?.msg});
    return handleError(error);
  }
};

/* -------------------------------------------------------------------------- */
/*                           Resend Otp API call handler                      */
/* -------------------------------------------------------------------------- */
export const handleResendOtp = async (mobile, setAlert, setIsLoading) => {
  try {
    setIsLoading(true);
    const resp = await resendMobileOtp(mobile);
    if (resp.status === 200) {
      setIsLoading(false);
      const data = resp?.data;
      return data;
    }
  } catch (error) {
    setIsLoading(false);
    // setAlert({ type: "error", message: error?.response?.data?.msg});
    return handleError(error, setAlert);
  }
};

/* -------------------------------------------------------------------------- */
/*                           Resend Otp API call handler                      */
/* -------------------------------------------------------------------------- */
export const handleEnrollProgram = async (formData, setAlert, setIsOpenToApply, setisLoading) => {
  try {
    setisLoading(true);
    const resp = await enrollProgram(formData);
    if (resp.status === 200) {
      setIsOpenToApply(false);
      handleSuccess(resp, setAlert, "Form submitted successfully.");
      const data = resp?.data;
      return data;
    }
  } catch (error) {
    return handleError(error, setAlert);
  }
  finally{
    setisLoading(false);
  }
};


/* -------------------------------------------------------------------------- */
/*                           send Enquiry API call handler                      */
/* -------------------------------------------------------------------------- */
export const handleSendEnquiry = async (formData, setAlert, setisLoading, setFormData) => {
  try {
    setisLoading(true);
    const resp = await sendEnquiry(formData);
    if (resp.status === 200) {
      handleSuccess(resp, setAlert, "Form submitted successfully.");
      setFormData({name: '', email: '', mobile_no: '', message: ''});
      const data = resp?.data;
      return data;
    }
  } catch (error) {
    return handleError(error, setAlert);
  }
  finally{
    setisLoading(false);
  }
};
