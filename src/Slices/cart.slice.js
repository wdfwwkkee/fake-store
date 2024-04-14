


import {createSlice} from '@reduxjs/toolkit'




export const cartSlice = createSlice({
    name : 'cart',
    initialState : [],
    reducers : {
        addToCart : (state, {payload : cartItem}) => {
            const existingCartItemIndex = state.findIndex((item) => item.id === cartItem.id)
            if (existingCartItemIndex !== -1) {
                state[existingCartItemIndex].quantity++;
            }
            else {
                state.push({...cartItem, quantity : 1})
            }

        },
        deleteFromCart : (state, {payload : index}) => {
            state.splice(index, 1)
        },
        incrementQuantity : (state, {payload : cartItem}) => {
            const index = state.findIndex(product => product.id === cartItem.id);
            state[index].quantity++;
        },
        decrementQuantity : (state, {payload : cartItem}) => {
            const index = state.findIndex(product => product.id === cartItem.id);
            if (index !== -1) {
                if (state[index].quantity > 1) {
                  state[index].quantity--;
                } else {
                  state.splice(index, 1);
                }
            }
        },
    }  
})


export const {actions, reducer} = cartSlice