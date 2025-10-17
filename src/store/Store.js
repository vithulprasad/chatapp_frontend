import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userAuthReducer from "./slice/authReducer"; // adjust path as needed
import loaderReducer from "./slice/loaderReducer";

const rootReducer = combineReducers({
  userAuth: userAuthReducer, // state.userAuth
  loader: loaderReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

// No TypeScript types needed in JS version
