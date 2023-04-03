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
        existingItem.subTotal = parseInt(existingItem.quantity) * parseInt(existingItem.price)
      } else {
        state.items.push({...newItem, quantity: 1,subTotal: parseInt(newItem.price)});
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
      const { _id, quantity } = action.payload; 
      const existingItem = state.items.find((item) => item._id === _id);   
      if (existingItem) {
        existingItem.quantity = parseInt(quantity);
        // existingItem.subTotal = parseInt(existingItem.quantity) * parseInt(existingItem.price)
      }
    }, 
    decreaseQuantity: (state, action) =>{
      const _id = action.payload; 
      const existingItem = state.items.find((item) => item._id === _id); 
      if (existingItem) {
        if(existingItem.quantity === 1){
          state.items = state.items.find((item) => item._id !== _id);
        } 
        else{
          parseInt(existingItem.quantity--);
        }
        state.total -= parseInt(existingItem.price);
      }
    },
    increaseQuantity: (state, action) =>{
      const _id = action.payload; 
      const existingItem = state.items.find((item) => item._id === _id); 
      if (existingItem) {
        existingItem.quantity++;
        existingItem.subTotal = parseInt(existingItem.quantity) * parseInt(existingItem.price)
      }
      state.total += parseInt(existingItem.price); 
    },


    saveCartToDB:(state) =>{
      state.loading = false;
    },

  },
});

export const { getCartsStart, getCartsSuccess, getCartsFailure,addToCart,removeFromCart,updateQuantity ,decreaseQuantity, saveCartToDB,increaseQuantity} = cartSlice.actions;

export default cartSlice.reducer;
