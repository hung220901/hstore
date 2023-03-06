 import * as request from '../utils/request'

export const getAllCategory = async(q) =>{
    try {
      const res = await request.get('/category',{
        params:{
          q
        }
      })
        return res;
    } catch (error) {
      console.log('something went wrong!');
    }
  }