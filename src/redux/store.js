import { configureStore, combineReducers } from '@reduxjs/toolkit';
import categorySlice from './categorySlice';
import productSlice from './productSlice'
import cartSlice from './cartSlice'

const rootReducer = combineReducers({
    products: productSlice,
    categories: categorySlice,
    carts: cartSlice,
  });
  
  const store = configureStore({
    reducer: rootReducer, 
  });
  
  export default store;