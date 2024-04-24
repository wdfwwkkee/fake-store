import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
  name: "user",
  initialState: {
    value : ""
  },
  reducers: {
    loginUser: (state, { payload: userData }) => {
      state.value = userData
    },
    logoutUser: (state) => {
      state = "";
      console.log('asd')
    },
  },
});

export const { actions, reducer } = userSlice;
