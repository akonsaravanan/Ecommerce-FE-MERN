import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.currentUser = null;
      localStorage.removeItem("ecomm-user-profile");
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      localStorage.setItem(
        "ecomm-user-profile",
        JSON.stringify({
          ...action.payload,
        })
      );
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state, action) => {
      state.currentUser = null;
      localStorage.removeItem("ecomm-user-profile");
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;
export default userSlice.reducer;
