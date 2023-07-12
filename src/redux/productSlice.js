import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    filter:{},
    filteredProduct:[],
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

export const { getProductsStart, getProductsSuccess, getProductsFailure, setFilter, setFilteredProduct, clearFilter} = productSlice.actions;

export default productSlice.reducer;
