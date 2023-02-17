import axios from 'axios'

const request = axios.create({
    baseURL:'https://hstore-api.onrender.com/api/v1',
})

export default request