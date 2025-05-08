import { configureStore } from "@reduxjs/toolkit";
import productreducer from "./productSlice"

export const store = configureStore({
    reducer:{
        product:productreducer
    }
});

