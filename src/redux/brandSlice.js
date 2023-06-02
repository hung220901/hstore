import { createSlice } from '@reduxjs/toolkit';

const brandSlice = createSlice({
  name: 'brand',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    getAllBrand: (state,actions) => {
      state.items = actions.payload
    },
 
  },
});

export const {  getAllBrand } = brandSlice.actions;

export default brandSlice.reducer;
