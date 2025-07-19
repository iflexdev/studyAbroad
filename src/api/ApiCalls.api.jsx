// import axiosInstance from "./AxiosInstance.api"
import axiosPublicInstance from "./AxiosPublicInstance.api";

/* -------------------------------------------------------------------------- */
/*                         all Search programs filter                         */
/* -------------------------------------------------------------------------- */
//
//
//
/* --------------------- fetch all countries GET request -------------------- */
export const countryList = () => axiosPublicInstance.get("country-list");
/* --------------------- fetch all universities GET request -------------------- */
export const universityList = () => axiosPublicInstance.get("university-list");
/* --------------------- fetch all course level GET request -------------------- */
export const courseLevel = () => axiosPublicInstance.get("course-level-list");
/* --------------------- fetch all programs GET request -------------------- */
export const programsList = () => axiosPublicInstance.get("program-list");

// 
// 
/* -------------------------------------------------------------------------- */
/*                           all programs card data                           */
/* -------------------------------------------------------------------------- */
// 
// 

/* --------------------- fetch all programs GET request -------------------- */
export const programsCardData = () => axiosPublicInstance.get("all-programs ");