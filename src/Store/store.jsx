import { configureStore } from "@reduxjs/toolkit";
import { productsData } from "../reducers/productsData";
import cartReducer from "../reducers/addToCart";

export const store = configureStore({
    reducer : {
    productsData,
    cartReducer
    }
})