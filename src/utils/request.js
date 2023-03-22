import axios from 'axios'

const request = axios.create({
    baseURL:'https://hstore-api.onrender.com/api/v1',
})

export const get = async(path, option = {}) =>{
    const response = await request.get(path,option) 
    return response.data;
}
export const post = async(path,data) =>{
    const response = await request.post(path,data) 
    return response.data;
}
export default request