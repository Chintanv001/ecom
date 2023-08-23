import { configureStore } from "@reduxjs/toolkit";
import { productsData } from "../reducers/productsData";
import cartReducer from "../reducers/addToCart";
import mobileFilterReducer from "../reducers/mobileFilter";

export const store = configureStore({
    reducer : {
    productsData,
    cartReducer,
    mobileFilterReducer
    }
})