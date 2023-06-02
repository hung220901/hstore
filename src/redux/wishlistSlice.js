import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as request from '../services/userServices' 
import { toast } from 'react-toastify';  
export const saveWishlist = createAsyncThunk(
  'wishlist/saveWishlistToDB',
  async (email,{getState}) => {
    try{   
      const wishlistnew = getState().wishlist.items
      const response = await request.addProductArrayToUserWishList(wishlistnew,email);     
      return response.wishlist
    }
    catch(err){
      toast.error(err)
    }
  }
);


const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    items: [], 
    loading: false,
    error: null,
  },
  reducers: {
    getAllWishListItem:(state, actions)=>{
        state.items = actions.payload;
    },
    addToWishList:(state, actions)=>{
        const idNewItem = actions.payload;
        const existedItem = state.items.find(item=>item._id ===idNewItem) 
        if(!existedItem){
            state.items.push(idNewItem)
        }
    },
    removeItemFromWishlist:(state, actions)=>{
      const idNewItem = actions.payload;
      const existedItem = state.items.find(item=>item._id ===idNewItem)
      if(existedItem){
        state.items = state.items.filter(item=>item._id !== idNewItem)
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(saveWishlist.fulfilled, (state, actions) => {
 
    })
  }
});

export const { getAllWishListItem, addToWishList,removeItemFromWishlist} = wishlistSlice.actions;

export default wishlistSlice.reducer;
