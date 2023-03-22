import * as request from '../utils/request'

export const register = async(data) =>{
    try {
      const res = await request.post('/auth/register',data)
        return res;
    } catch (error) {
      console.log('something went wrong!');
    }
}
export const login = async(data) =>{
    try {
      const res = await request.post('/auth/login',data)
        return res;
    } catch (error) {
      console.log('something went wrong!');
    }
}

 
