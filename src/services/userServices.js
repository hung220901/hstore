import * as request from '../utils/request'

export const getAllUsers = async(q) =>{
    try {
      const res = await request.get('/user',{
        params:{
          q
        }
      }) 
        return res;
    } catch (error) {
      console.log('something went wrong!');
    }
}

export const getUserByEmail = async(email) =>{
    try {
      const res = await request.get(`/user?email=${email}`)
        return res.users;
    } catch (error) {
      console.log('something went wrong!');
    }
}
