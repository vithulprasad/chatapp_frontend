import { createSlice } from "@reduxjs/toolkit";

// Load user from localStorage safely
const savedUser = localStorage.getItem("user");

const initialState = {
  user: savedUser ? savedUser : null
};

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },

    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    }
  },
});

export const {
  setUser,
  logoutUser,
} = userAuthSlice.actions;

export default userAuthSlice.reducer;
