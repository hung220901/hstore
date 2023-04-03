import * as request from '../utils/request'
import {saveCartToDB} from '../redux/cartSlice' 
import { useDispatch } from 'react-redux';


const useSaveCartToDB = () => { 
    const dispatch = useDispatch()
    const token = localStorage.getItem("token")
    const saveCartToDBF = async(products)=>{ 
        console.log(products); 
        const res = await request.post('/cart', {
            headers:{
                Authorization: `Bearer ${token}`,
            },
            products
        }); 
        console.log(res);
        dispatch(saveCartToDB());  
    }
    return saveCartToDBF;
};
export default useSaveCartToDB;