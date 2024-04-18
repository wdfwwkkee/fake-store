import { createSlice } from "@reduxjs/toolkit";


const saveCartToLocalStorage = (state) => {
  localStorage.setItem('cart', JSON.stringify(state));
};

const loadCartFromLocalStorage = () => {
  const cartItems = localStorage.getItem('cart');
  return cartItems ? JSON.parse(cartItems) : [];
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: loadCartFromLocalStorage(),
  reducers: {
    addToCart: (state, { payload: cartItem }) => {
      const isExist = state.some((item) => item.id === cartItem.id);



      if (!isExist) state.push({ ...cartItem, quantity: 1 }) 

      saveCartToLocalStorage(state)
    },
    deleteFromCart: (state, { payload: cartItem }) => {
      const index = state.findIndex((product) => product.id === cartItem.id);
      state.splice(index, 1);
      saveCartToLocalStorage(state)
    },
    incrementQuantity: (state, { payload: cartItem }) => {
      const index = state.findIndex((product) => product.id === cartItem.id);
      state[index].quantity++;
      saveCartToLocalStorage(state)
    },
    decrementQuantity: (state, { payload: cartItem }) => {
      const index = state.findIndex((product) => product.id === cartItem.id);

      state[index].quantity > 1 ? state[index].quantity-- : state.splice(index, 1);
      saveCartToLocalStorage(state)
    },
    clearCart: (state) => {
      if (state.length === 0) return alert("cart is empty");
      state.length = 0;
      saveCartToLocalStorage(state)
    },
  },
});

export const { actions, reducer } = cartSlice;
