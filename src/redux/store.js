import { configureStore, combineReducers } from '@reduxjs/toolkit';
import categorySlice from './categorySlice';
import productSlice from './productSlice'
import cartSlice from './cartSlice'
import authSlice from './authSlice'

const rootReducer = combineReducers({
    products: productSlice,
    categories: categorySlice,
    carts: cartSlice,
    auth:authSlice,
  });
  
  const store = configureStore({
    reducer: rootReducer, 
  });
  
  export default store;