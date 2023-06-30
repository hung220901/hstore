import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    filter:{},
    filteredProduct:[],
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

    // Filter
    setFilter:(state, action)=>{
      state.filter = action.payload; 
    },
    setFilteredProduct:(state,action) =>{
       state.filteredProduct = action.payload
    },
    clearFilter:(state)=>{
      state.filter = {};
      state.filteredProduct = []
    }

  },
});

export const { getProductsStart, getProductsSuccess, getProductsFailure,increment, decrement,updateQuantity, setFilter, setFilteredProduct, clearFilter} = productSlice.actions;

export default productSlice.reducer;
