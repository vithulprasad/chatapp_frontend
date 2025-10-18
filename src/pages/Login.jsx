import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { login } from "../apis/apis";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slice/authReducer";
import { useApi } from "../Middleware/UseApi";
function Login() {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const {callApi} = useApi()
  const google_auth = async (data) => {
    console.log(data, "this is the data");
    const res =await callApi(login(data),true)
    if(res){
          localStorage.setItem("token",res.data.token)
          localStorage.setItem("user",res.data.user.name)
        dispatch(setUser(res.data.user.name))

        navigate("/")
    }
  };
  return (
    <div className="mt-20 flex justify-center max-w-screen-lg mx-auto">
      <div className="  px-2 py-10 flex flex-col g">
        <span className="font-bold text-xl mb-10 text-center">
          Login to Your <br /> Account or create
        </span>

        <GoogleLogin
          onSuccess={(credentialResponse) => {
            google_auth({
              credential: credentialResponse.credential,
            });
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    
    </div>
  );
}

export default Login;
