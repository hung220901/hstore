import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {
    getProductsStart: (state) => {
      state.loading = true;
    },
    getProductsSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    getProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }, 
  },
});

export const { getProductsStart, getProductsSuccess, getProductsFailure } = productSlice.actions;

export default productSlice.reducer;
