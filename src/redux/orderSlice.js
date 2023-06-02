import { createSlice } from '@reduxjs/toolkit'; 
const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    items: [], 
    orderItem:[],
    loading: false,
    error: null,
    success:false,
  },
  reducers: { 
    getAllOrders: (state, action) => {
        state.items = action.payload;
    }, 
    getOrdersFailure: (state, action) => {
        state.error = true;
        state.items =action.payload;
    }, 
    getOneOrder:(state,action)=>{ 
      state.orderItem =  action.payload;
    },
    updateOrderStatus:(state, action)=>{
      const { orderId, status } = action.payload;
      state.items = state.items.map((order) => {
        if (order.orderId === orderId) {
          return {
            ...order,
            status: status,
          };
        }
        return order;
      });
    }

  }, 
});

export const {getAllOrders ,getOneOrder,updateOrderStatus,getOrdersFailure} = orderSlice.actions;

export default orderSlice.reducer;
