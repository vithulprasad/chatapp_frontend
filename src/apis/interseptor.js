import axios from "axios";

// Create an axios instance
const axiosInstance = axios.create({
  // baseURL: "http://localhost:3000",
   baseURL: "https://chatapp-backend-680y.onrender.com", 
  timeout: 10000, 
});


axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // or use cookies, pinia, redux, etc.
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default axiosInstance;