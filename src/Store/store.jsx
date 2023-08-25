import { configureStore } from "@reduxjs/toolkit";
import { productsData } from "../reducers/productsData";
import cartReducer from "../reducers/addToCart";
import mobileFilterReducer from "../reducers/mobileFilter";
import laptopFilterReducer from "../reducers/laptopFilter";

export const store = configureStore({
    reducer : {
    productsData,
    cartReducer,
    mobileFilterReducer,
    laptopFilterReducer
    }
})