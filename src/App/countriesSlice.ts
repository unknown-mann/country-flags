import { createSlice, createAsyncThunk, AnyAction, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { CountryType } from "../types/Types";

type StateType = {
    countries: CountryType[],
    status: string,
    error: string
}

const initialState: StateType = {
    countries: [],
    status: 'idle',
    error: '',
}

const BASE_URL = 'https://restcountries.com/v2/'

export const fetchCountries = createAsyncThunk<CountryType[], undefined, { rejectValue: string }>('countries/fetchCountries',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(BASE_URL + 'all?fields=alpha3Code,name,nativeName,flag,independent,area,capital,population,region,subregion,topLevelDomain,currencies,languages,borders')
            return response.data
        } catch (err) {
            return rejectWithValue(err.message)
        }
    })

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCountries.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.countries = state.countries.concat(action.payload)
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.error = action.payload
                state.status = 'rejected'
            })

    }
})

const isError = (action: AnyAction) => {
    return action.type.endsWith('rejected')
}

export default countriesSlice.reducer