import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit';
import * as request from '../utils/request'  

export const saveCartToDb = createAsyncThunk('cart/saveCartToDb', async (cartItems, {getState}) => {  
  const carts = getState().carts;
  const email = getState().auth.users.email;
  const token = localStorage.getItem("token") 
  // Kiểm tra xem giỏ hàng tồn tại chưa 
  // Nếu có rồi thì update / chưa thì create new
  const existingCartId = getState().carts.id
  if(existingCartId){
    const response = await request.put(`/cart/${email}?id=${existingCartId}`,{ 
      data:{
        items:carts.items,
        email,
        totalPrice:carts.total
      }
    }, 
    {
      header:{
        Authorization : `Bearer ${token}`
      }
    }) 
    localStorage.setItem('cartInfo',JSON.stringify({id:response.data._id,email}))
    return response.data
  } 

  // Thực hiện lưu cart vào db
  const resCart = await request.post('/cart', 
    {
      items:carts.items,
      email,
      totalPrice:carts.total
    },
    {
      header:{
        Authorization : `Bearer ${token}`
      }
    }
  ) 
  console.log(resCart)
  localStorage.setItem('cartInfo',JSON.stringify({id:resCart.data._id,email}))
  return resCart.data
});

export const clearCartInDb = createAsyncThunk('cart/clearCartInDb', async (cartItems, { getState }) => {
  const email = getState().auth.users.email ||JSON.parse(localStorage.getItem('cartInfo')).email; 
  const cartId = getState().carts.id || JSON.parse(localStorage.getItem('cartInfo')).id;
  const token = localStorage.getItem("token"); 
  if(cartId) {
    const res =  await request.del(`/cart/${email}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }); 
  } 
  localStorage.removeItem('cartItems');
});


const cartSlice = createSlice({
  name: 'carts',
  initialState: {  
    items: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')).items : [],
    total: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')).total : 0,
    id:  localStorage.getItem('cartInfo') ? JSON.parse(localStorage.getItem('cartInfo')).id : null,
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
      if(action.payload){
        state.items = action.payload.items; 
        state.total = action.payload.totalPrice || action.payload.total; 
      }
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
      if(state.items.length > 0){
        localStorage.setItem('cartItems', JSON.stringify({items:[...state.items],total:state.total}))
      }
      else{
        localStorage.removeItem('cartItems') 
      }
      saveCartToDb()
    },
    updateQuantity: (state, action) =>{  
      const { _id, quantity } = action.payload; 
      const existingItem = state.items.find((item) => item.product._id === _id);    
      if (existingItem) {
        const oldQuantity = existingItem.quantity;
        const newQuantity = parseInt(quantity);
        const price = parseInt(existingItem.product.price);
        const quantityDiff = newQuantity - oldQuantity;
        const subtotalDiff = quantityDiff * price; 
        existingItem.quantity = newQuantity;
        existingItem.subTotal += subtotalDiff;
        state.total += subtotalDiff;
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
    clearCart:(state)=>{
      state.items = [];
      state.total = 0;
      state.id = null;
      state.success = false;
    }


  },
  extraReducers: (builder)=>{
    builder
      .addCase(saveCartToDb.fulfilled, (state, action) => { 
        state.success = true; 
        state.id = action.payload._id
      })
      .addCase(clearCartInDb.fulfilled, (state) => {
        state.items = [];
        state.total = 0;
        state.id = null;
        state.success = false;
      });
  }
});

export const { getCartsStart, getCartsSuccess, getCartsFailure,addToCart,removeFromCart,updateQuantity ,decreaseQuantity,increaseQuantity,clearCart} = cartSlice.actions;

export default cartSlice.reducer;
