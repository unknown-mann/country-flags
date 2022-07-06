import { createSelector } from "@reduxjs/toolkit";
import type { CountriesType } from "../../types/Types";
import type { FilterType } from "./filterSlice"

type StateType = {
    countries: CountriesType,
    filter: FilterType
}

const selectAllCountries = (state: StateType) => state.countries.countries
const selectActiveSearch = (state: StateType) => state.filter.search
const selectActiveSort = (state: StateType) => state.filter.sort

export const selectFilteredCountries = createSelector(
    [selectAllCountries, selectActiveSearch, selectActiveSort],
    (allCountries, activeSearch, activeSort) => {
        if (activeSearch) {
            allCountries = allCountries.filter(country => country.name.toLowerCase().startsWith(activeSearch.toLowerCase().trim()))
        }
        if (activeSort) {
            return [...allCountries].filter(country => country.region === activeSort)
        }
        return allCountries
    }
)