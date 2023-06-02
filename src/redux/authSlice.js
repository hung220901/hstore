import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    items:[],
    loading: false,
    error: null,
  },
  reducers: {
    getCurrentUser: (state,actions) => {
      state.loading = false;
      state.users = actions.payload
    }, 
    getUserSuccess: (state,actions) => {
      state.loading = false;
      state.items = actions.payload
    }, 
    getUserFailure: (state,actions) => {
      state.error = true;
      state.loading = true;
      state.items = actions.payload
    }, 
  },
});

export const { getCurrentUser ,getUserFailure ,getUserSuccess} = authSlice.actions;

export default authSlice.reducer;
