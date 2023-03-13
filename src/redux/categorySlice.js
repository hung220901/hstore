import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
    loading: false,
    error: null,
  },
  reducers: {
    getCategoriesStart: (state) => {
      state.loading = true;
    },
    getCategoriesSuccess: (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    },
    getCategoriesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }, 
  },
});

export const {  getCategoriesStart, getCategoriesSuccess,getCategoriesFailure} = categorySlice.actions;

export default categorySlice.reducer;
