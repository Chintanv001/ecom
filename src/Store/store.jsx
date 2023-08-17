import { configureStore } from "@reduxjs/toolkit";
import { productsData } from "../reducers/productsData";

export const store = configureStore({
    reducer : {
    productsData
    }
})