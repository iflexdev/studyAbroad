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
  programsCardData,
  programsList,
  universityList,
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
      console.log("countries data: ", data);
      return data;
    }
  } catch (error) {
    return handleError(error), console.log("countries error: ", error);
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
      console.log("universities data: ", data);
      return data;
    }
  } catch (error) {
    return handleError(error), console.log("universities error: ", error);
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
      console.log("course level data: ", data);
      return data;
    }
  } catch (error) {
    return handleError(error), console.log("course level error: ", error);
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
      console.log("program types data: ", data);
      return data;
    }
  } catch (error) {
    return handleError(error), console.log("program types error: ", error);
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
      console.log("program cards data: ", data);
      return data;
    }
  } catch (error) {
    return handleError(error, setAlert), console.log("Program data error: ", error);
  }
};
