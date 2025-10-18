import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { hideLoader, showLoader } from "../store/slice/loaderReducer";


export const useApi = () => {
  const dispatch = useDispatch()
  const callApi = async (apiCall, show = false) => {
    try {
      dispatch(showLoader())
      const response = await apiCall;
       dispatch(hideLoader())
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
      if (response.status !== 200) {
        if (response.status == 403) {
          localStorage.clear();
          window.location.reload();
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

      return { error: false, data: response.data };
    } catch (error) {
         dispatch(hideLoader())
       toast.error(
      error.response?.data?.message || error.message || "Something went wrong!",
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

      return { error: true, data: null };
    }
  };

  return { callApi };
};
