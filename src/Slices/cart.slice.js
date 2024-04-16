import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, { payload: cartItem }) => {
      const isExist = state.some((item) => item.id === cartItem.id);
      if (isExist) {
      } else {
        state.push({ ...cartItem, quantity: 1 });
      }
    },
    deleteFromCart: (state, { payload: cartItem }) => {
      const index = state.findIndex((product) => product.id === cartItem.id);
      state.splice(index, 1);
    },
    incrementQuantity: (state, { payload: cartItem }) => {
      const index = state.findIndex((product) => product.id === cartItem.id);
      state[index].quantity++;
    },
    decrementQuantity: (state, { payload: cartItem }) => {
      const index = state.findIndex((product) => product.id === cartItem.id);
      if (index !== -1) {
        if (state[index].quantity > 1) {
          state[index].quantity--;
        } else {
          state.splice(index, 1);
        }
      }
    },
    clearCart : (state) => {
      state.length = 0;
    }
  },
});

export const { actions, reducer, existingCartItemIndex } = cartSlice;
