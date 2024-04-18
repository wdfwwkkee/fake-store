

import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { reducer as cartReducer } from '../Slices/cart.slice'
import { reducer as favoriteReducer } from '../Slices/favortie.slice'



const reducers = combineReducers({
    cart : cartReducer,
    favorite : favoriteReducer
})


export const store = configureStore({
    reducer : reducers,
})