import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'carts',
  initialState: {
    items: [],
    total: 0,
    loading: false,
    error: null,
  },
  reducers: {
    getCartsStart: (state) => {
      state.loading = true;
    },
    getCartsSuccess: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
    getCartsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }, 
    addToCart:(state, action)=>{
      const newItem = action.payload;
      const existingItem = state.items.find((item)=> item._id === newItem._id)
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({...newItem, quantity: 1 });
      }

      state.total += parseInt(newItem.price);
    },
    removeFromCart: (state, action) =>{
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item._id === itemId);

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item._id !== itemId);
        } else {
          existingItem.quantity--;
        } 
        state.total -= parseInt(existingItem.price);
      }
    },
    updateQuantity: (state, action) =>{
      const { _id, qty } = action.payload; 
      const existingItem = state.items.find((item) => item._id === _id);
      if (existingItem) {
        existingItem.quantity = parseInt(qty);
      }
    }, 
    decreaseQuantity: (state, action) =>{
      const { _id } = action.payload; 
      const existingItem = state.items.find((item) => item._id === _id);
      if (existingItem) {
        if(existingItem.quantity ===1){
          state.items = state.items.filter((item) => item._id !== _id);
        } 
        else{
          parseInt(existingItem.quantity--);
        }
        state.total -= parseInt(existingItem.price);
      }
    }
  },
});

export const { getCartsStart, getCartsSuccess, getCartsFailure,addToCart,removeFromCart,updateQuantity ,decreaseQuantity} = cartSlice.actions;

export default cartSlice.reducer;
