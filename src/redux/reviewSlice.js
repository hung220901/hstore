import { createSlice } from '@reduxjs/toolkit'; 
const reviewSlice = createSlice({
  name: 'reviews',
  initialState: {
    items: [],  
    loading: false,
    error: null,
    success:false,
  },
  reducers: { 
    getAllReview: (state, action) => {
        state.items = action.payload;
    },  
  }, 
});

export const { getAllReview} = reviewSlice.actions;

export default reviewSlice.reducer;
