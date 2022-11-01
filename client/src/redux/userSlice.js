import { createSlice } from "@reduxjs/toolkit";

const userData = JSON.parse(localStorage.getItem("user"));

const initialState = {
  currentUser: userData ? userData : null,
  loading: false,
  success: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  userSlice.actions;

export default userSlice.reducer;
