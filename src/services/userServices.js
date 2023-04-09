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

export const getAllUserWishlist = async(email) =>{
    try {
      const res = await request.get(`/user/wishlist?email=${email}`)
        return res.data;
    } catch (error) {
      console.log('something went wrong!');
    }
}
export const addProductToUserWishList = async(productId,email) =>{
    try {
      const res = await request.put(`/user/wishlist/${productId}?email=${email}`)
        return res.users;
    } catch (error) {
      console.log('something went wrong!');
    }
}


export const addProductArrayToUserWishList = async(wishlist,email) =>{
  try { 
      const res = await request.put(`/user/wishlist?email=${email}`,wishlist)
      return res.data
  } catch (error) {
    console.log('something went wrong!');
  }
}




export const removeProductFromUserWishList = async(productId,email) =>{
    try {
      const res = await request.del(`/user/wishlist/${productId}?email=${email}`)
        return res.users;
    } catch (error) {
      console.log('something went wrong!');
    }
}

 
