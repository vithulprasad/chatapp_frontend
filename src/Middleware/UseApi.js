import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/Loader";


export const UseApi = async (apiCall, show = false) => {
  try {
    let load = false
    {load && <Loader/>}
    load = true
    const response = await apiCall;
      load =false

    // ✅ Success toast
    if (response.status === 200 && show) {
      toast.success(response.data.message || "Success!", {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        style: {
          background: "#1e3a8a",
          color: "white",
      
        },
      });
    }

    // ✅ Handle non-200 manually
    if (response.status !== 200) {
      if(response.status == 403){
        localStorage.clear()
        window.location.reload()
      }
      toast.error(response.data?.message || "Unexpected response!", {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        style: {
          background: "#1e3a8a",
          color: "red",
     
        },
      });
    }

    return {
      error: false,
      status: response.status,
      message: response.data?.message || "success",
      data: response.data || null,
    };
  } catch (error) {
    console.log("API Error:", error);

    // ✅ Show error toast here
    toast.error(
      error.response?.data?.message ||
        error.message ||
        "Something went wrong!",
      {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        style: {
          background: "#7f1d1d",
          color: "white",
      
        },
      }
    );

    return {
      error: true,
      status: error.response?.status || 500,
      message:
        error.response?.data?.message ||
        error.message ||
        "Something went wrong!",
      data: error.response?.data || null,
    };
  }
};
