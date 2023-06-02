import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    loading: false,
    error: null,
    quantity:1,
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
    increment: (state) => {
      state.quantity += 1;
    },
    decrement: (state) => {
      if (state.quantity > 0) {
      state.quantity -= 1;
      }
    },
    updateQuantity: (state, action) =>{
      const {quantity} = action.payload; 
      state.quantity = parseInt(quantity)
    }, 
  },
});

export const { getProductsStart, getProductsSuccess, getProductsFailure,increment, decrement,updateQuantity} = productSlice.actions;

export default productSlice.reducer;
