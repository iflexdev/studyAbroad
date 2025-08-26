import axios from "axios";

const axiosInstance = axios.create({
  /* -------------------------------------------------------------------------- */
  /*                                API base URL                                */
  /* -------------------------------------------------------------------------- */
  // baseURL: "https://novuspro.co.in/study-abroad/public/api/v1/",
  baseURL: "http://admin-sa.iflextech.co/api/v1/",
});

/* -------------------------------------------------------------------------- */
/*                                  JWT Auth                                  */
/* -------------------------------------------------------------------------- */
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.headers['API_KEY'] = 'AH2KYTS4EJ9CF3ND';
  return config;
});

export default axiosInstance;
