import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {
    getCurrentUser: (state,actions) => {
      state.loading = false;
      state.users = actions.payload
    }, 
  },
});

export const { getCurrentUser  } = authSlice.actions;

export default authSlice.reducer;
