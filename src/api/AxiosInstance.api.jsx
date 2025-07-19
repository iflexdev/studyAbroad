import axios from "axios";

const axiosInstance = axios.create({
  /* -------------------------------------------------------------------------- */
  /*                                API base URL                                */
  /* -------------------------------------------------------------------------- */
  baseURL: "https://novuspro.co.in/study-abroad/public/api/v1/",
});

/* -------------------------------------------------------------------------- */
/*                                  JWT Auth                                  */
/* -------------------------------------------------------------------------- */
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
