import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../store/slice/authReducer";
import { useNavigate } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handle_logout = () => {
    localStorage.clear();
    dispatch(logoutUser());
    navigate("/");
  };
  return (
    <div className=" max-w-screen-lg mx-auto">
      <button
        onClick={handle_logout}
        className="border m-3 p-2 bg-red-400 text-white font-bold rounded-sm"
      >
        logout
      </button>
    </div>
  );
}

export default Settings;
