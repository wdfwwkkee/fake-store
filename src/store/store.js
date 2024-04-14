

import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { reducer as cartReducer } from '../Slices/cart.slice'



const reducers = combineReducers({
    cart : cartReducer
})


export const store = configureStore({
    reducer : reducers,
})