import { createSlice } from "@reduxjs/toolkit";

const saveUserToLocalStorage = (state) => {
  localStorage.setItem("user", JSON.stringify(state));
};

const loadUserFromLocalStorage = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : initialState;
};

const initialState = {
  email: null,
  token: null,
  id: null,
  name: null,
  avatar: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: loadUserFromLocalStorage(),
  reducers: {
    loginUser: (state, { payload: userData }) => {
      state.email = userData.email;
      state.token = userData.token;
      state.id = userData.id;
      saveUserToLocalStorage(state);
    },
    logoutUser: (state) => {
      state.email = null;
      state.token = null;
      state.id = null;
      saveUserToLocalStorage(state);
    },
    changeUserData: (state, { payload: userData }) => {
      state.name = userData.name;
      state.avatar = userData.avatar;
      saveUserToLocalStorage(state);
    },
  },
});

export const { actions, reducer } = userSlice;
