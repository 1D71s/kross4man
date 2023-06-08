import { configureStore } from "@reduxjs/toolkit";
import shopReducer from './mySlise'

export default configureStore({
    reducer: {
        shop: shopReducer
    }
})  
