import * as request from '../utils/request'

export const getAllCartByEmail = async(email) =>{
    try {
      const res = await request.get(`/cart/${email}`) 
        return res;
    } catch (error) {
      console.log('something went wrong!');
    }
}

 