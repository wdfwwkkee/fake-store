import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  email : null,
  token : null,
  id : null
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, { payload: userData }) => {
      state.email = userData.email;
      state.token = userData.token;
      state.id = userData.id;
    },
    logoutUser: (state) => {
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});

export const { actions, reducer } = userSlice;
