import axios from "axios";

const axiosPublicInstance = axios.create({
  /* -------------------------------------------------------------------------- */
  /*                                  base URL                                  */
  /* -------------------------------------------------------------------------- */
  // baseURL: "https://novuspro.co.in/study-abroad/public/api/v1/",
  baseURL: "http://admin-sa.iflextech.co/api/v1/",
});

export default axiosPublicInstance;
