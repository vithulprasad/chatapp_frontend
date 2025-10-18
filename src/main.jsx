import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import { store } from "./store/Store.js";
 import { ToastContainer } from 'react-toastify';
createRoot(document.getElementById("root")).render(
  
    <Provider store={store}>
  
      <ToastContainer />
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE}>
        <App />
      </GoogleOAuthProvider>
    </Provider>
 
);
