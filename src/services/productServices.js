import * as request from '../utils/request'

export const getAllProduct = async(q) =>{
    try {
      const res = await request.get('/product',{
        params:{
          q
        }
      })
        return res.product;
    } catch (error) {
      console.log('something went wrong!');
    }
}

export const getProductBySlug = async(slug) =>{
    try {
      const res = await request.get(`/product/${slug}`)
        return res.product;
    } catch (error) {
      console.log('something went wrong!');
    }
}
