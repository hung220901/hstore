import axios from 'axios'

const request = axios.create({
    baseURL:'https://provinces.open-api.vn/api/',
})

export const get = async(path, option = {}) =>{
    const response = await request.get(path,option) 
    return response;
}
export default request