import { configureStore, combineReducers } from '@reduxjs/toolkit';
import categorySlice from './categorySlice';
import productSlice from './productSlice'
import cartSlice from './cartSlice'
import authSlice from './authSlice'
import wishlistSlice from './wishlistSlice'
import orderSlice from './orderSlice';
import reviewSlice from './reviewSlice';
import brandSlice from './brandSlice'  


const rootReducer = combineReducers({
    products: productSlice,
    categories: categorySlice,
    carts: cartSlice,
    auth:authSlice,
    wishlist:wishlistSlice,
    orders:orderSlice,
    reviews:reviewSlice,
    brands:brandSlice, 
  });
  
  const store = configureStore({
    reducer: rootReducer, 
  });
  
  export default store;