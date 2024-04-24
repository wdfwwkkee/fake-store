

import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { reducer as cartReducer } from '../Slices/cart.slice'
import { reducer as favoriteReducer } from '../Slices/favortie.slice'
import { reducer as userReducer } from '../Slices/user.slice'



const reducers = combineReducers({
    cart : cartReducer,
    favorite : favoriteReducer,
    user : userReducer
})


export const store = configureStore({
    reducer : reducers,
})