import * as request from '../utils/request'

export const getAllOrder = async() =>{
    try {
      const res = await request.get(`/order`) 
        return res;
    } catch (error) {
      console.log('something went wrong!');
    }
}
export const getAllOrderByUserMail = async(email) =>{
    try {
      const res = await request.get(`/order?email=${email}`) 
        return res;
    } catch (error) {
      console.log('something went wrong!');
    }
}
export const getOrderById = async(id) =>{
    try {
      const res = await request.get(`/order/${id}`) 
        return res;
    } catch (error) {
      console.log('something went wrong!');
    }
}
export const updateOrderStatusToDB = async(id,status) =>{
    try {
      const res = await request.put(`/order/${id}`,{status}) 
        return res;
    } catch (error) {
      console.log('something went wrong!');
    }
}
export const updateOrderPaymentStatus = async(id,data) =>{
    try {
      const res = await request.put(`/order/${id}`,data) 
        return res;
    } catch (error) {
      console.log('something went wrong!');
    }
}
 

