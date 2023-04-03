import { createSlice } from '@reduxjs/toolkit';

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
        
    },
  },
});

export const { getAllWishListItem, addToWishList,removeItemFromWishlist} = wishlistSlice.actions;

export default wishlistSlice.reducer;
