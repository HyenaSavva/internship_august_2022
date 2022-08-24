import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginPending: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      localStorage.setItem("isLoggedIn", true);
      state.error = "";
    },
    loginFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
