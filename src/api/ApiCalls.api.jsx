import axiosInstance from "./AxiosInstance.api"
// import axiosPublicInstance from "./AxiosPublicInstance.api";

/* -------------------------------------------------------------------------- */
/*                         all Search programs filter                         */
/* -------------------------------------------------------------------------- */
//
//
//
/* --------------------- fetch all countries GET request -------------------- */
export const countryList = () => axiosInstance.get("country-list");
/* --------------------- fetch all universities GET request -------------------- */
export const universityList = () => axiosInstance.get("university-list");
/* --------------------- fetch all course level GET request -------------------- */
export const courseLevel = () => axiosInstance.get("course-level-list");
/* --------------------- fetch all programs GET request -------------------- */
export const programsList = () => axiosInstance.get("program-list");

// 
// 
/* -------------------------------------------------------------------------- */
/*                           all programs card data                           */
/* -------------------------------------------------------------------------- */
// 
// 

/* --------------------- fetch all programs GET request -------------------- */
export const programsCardData = () => axiosInstance.get("all-programs ");
export const programsDetail = (id) => axiosInstance.get(`programs/${id}`);