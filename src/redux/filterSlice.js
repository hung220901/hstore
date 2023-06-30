import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filteredProduct: [],
    filter:{}, 
  },
  reducers: {
    // handle Filter
    setFilter:(state,action)=>{
        state.filter = action.payload
    },
    clearFilter:(state)=>{
        state.filter = {}
        state.filteredProduct = []
    },
    // handle Product
    
  },
});

export const {  getFilter,setFilter} = filterSlice.actions;

export default filterSlice.reducer;
