import { createSlice } from "@reduxjs/toolkit";

const saveFavoriteToLocalStorage = (state) => {
  localStorage.setItem("favorite", JSON.stringify(state));
};

const loadFavoriteFromLocalStorage = () => {
  const favoriteItems = localStorage.getItem("favorite");
  return favoriteItems ? JSON.parse(favoriteItems) : [];
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: loadFavoriteFromLocalStorage(),
  reducers: {
    toggleFavorites: (state, { payload: productItem }) => {
      const isExists = state.some((r) => r.id === productItem.id);
      if (isExists) {
        const index = state.findIndex((item) => item.id === productItem.id);
        if (index !== -1) {
          state.splice(index, 1);
          saveFavoriteToLocalStorage(state);
        }
      } else {
        state.push(productItem);
        saveFavoriteToLocalStorage(state);
      }
    },
    clearFavorites : (state) => {
      if (state.length === 0) return alert("favorites is empty");
      state.length = 0;
      saveFavoriteToLocalStorage(state)
    }
  },
});

export const { actions, reducer } = favoriteSlice;
