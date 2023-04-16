import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit';
import * as request from '../utils/request' 
import { useDispatch } from 'react-redux';

export const saveCartToDb = createAsyncThunk('cart/saveCartToDb', async (cartItems, {getState}) => {  
  const carts = getState().carts;
  const email = getState().auth.users.email;
  const token = localStorage.getItem("token")
  const response = await request.post('/cart',{
    headers:{
      Authorization: `Bearer ${token}`,
    },
    data:{
      items:carts.items,
      email,
      totalPrice:carts.total
    }
  })
 
});




const cartSlice = createSlice({
  name: 'carts',
  initialState: {
    items: [],
    total: 0,
    loading: false,
    error: null,
    success:false,
  },
  reducers: {
    getCartsStart: (state) => {
      state.loading = true;
    },
    getCartsSuccess: (state, action) => {
      state.loading = false;
      state.items = action.payload.items; 
      state.total = action.payload.totalPrice;
    },
    getCartsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }, 
    addToCart:(state, action)=>{
      const newItem = action.payload;
      const existingItem = state.items.find((item)=> item.product._id === newItem._id)
      if (existingItem) {
        existingItem.quantity++;
        existingItem.product.subTotal = parseInt(existingItem.quantity) * parseInt(existingItem.product.price)
      } else {
        state.items.push({product:newItem, quantity: 1,subTotal: parseInt(newItem.price)});
      }

      state.total += parseInt(newItem.price);
    },
    removeFromCart: (state, action) =>{
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.product._id === itemId);

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.product._id !== itemId);
        } else {
          existingItem.quantity--;
        } 
        state.total -= parseInt(existingItem.product.price);
      }
    },
    updateQuantity: (state, action) =>{
      const { _id, quantity } = action.payload; 
      const existingItem = state.items.find((item) => item.product._id === _id);   
      if (existingItem) {
        existingItem.quantity = parseInt(quantity);
        // existingItem.subTotal = parseInt(existingItem.quantity) * parseInt(existingItem.product.price)
      }
    }, 
    decreaseQuantity: (state, action) =>{
      const _id = action.payload; 
      const existingItem = state.items.find((item) => item.product._id === _id); 
      if (existingItem) {
        if(existingItem.quantity === 1){
          state.items = state.items.filter((item) => item.product._id !== _id); 
        } 
        else{
          parseInt(existingItem.quantity--);
        }
        state.total -= parseInt(existingItem.product.price);
      }
    },
    increaseQuantity: (state, action) =>{
      const _id = action.payload; 
      const existingItem = state.items.find((item) => item.product._id === _id); 
      if (existingItem) {
        existingItem.quantity++;
        existingItem.subTotal = parseInt(existingItem.quantity) * parseInt(existingItem.product.price)
      }
      state.total += parseInt(existingItem.product.price); 
    },


  },
  extraReducers: (builder)=>{
    builder.addCase(saveCartToDb.fulfilled, (state, action) => { 
      state.success = true;
    });
  }
});

export const { getCartsStart, getCartsSuccess, getCartsFailure,addToCart,removeFromCart,updateQuantity ,decreaseQuantity,increaseQuantity} = cartSlice.actions;

export default cartSlice.reducer;
