import { configureStore } from "@reduxjs/toolkit";
import reducer from "./UserSlice";

export const Store = configureStore({
    reducer:{
        users: reducer
    }
})