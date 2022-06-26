import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type FilterType = {
  sort: string,
  search: string
}

const initialState: FilterType = {
  sort: '',
  search: ''
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeSort(state, action: PayloadAction<string>) {
      state.sort = action.payload
    },
    changeSearch(state, action: PayloadAction<string>) {
      state.search = action.payload
    }
  },
});

export const { changeSort, changeSearch } = filterSlice.actions;

export default filterSlice.reducer;