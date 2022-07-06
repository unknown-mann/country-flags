import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./countriesSlice"
import filterSlice from "./filter/filterSlice";

export const store = configureStore({
    reducer: {
        countries: countriesReducer,
        filter: filterSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch