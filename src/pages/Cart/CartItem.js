import React, {  useState } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {updateQuantity, decreaseQuantity,removeFromCart,increaseQuantity} from '../../redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux' 
import { faHeart as regularHeart, faStar} from '@fortawesome/free-regular-svg-icons';
import { faShoppingBag, faHeart as solidHeart, faMultiply} from '@fortawesome/free-solid-svg-icons';  
import {addToWishList,removeItemFromWishlist, saveWishlist} from '../../redux/wishlistSlice'
import { toast } from 'react-toastify'; 
import { useNavigate } from 'react-router-dom';
export default function CartItem({product}) { 
    const wishlist = useSelector(state=>state.wishlist.items)
    const user = useSelector(state=>state.auth.users)
    const dispatch = useDispatch()   
    const navigate = useNavigate() 

    const handleOnChangeValue = (e,id)=>{ 
        const newQuantity = parseInt(e.target.value)

        if(newQuantity >= 1){
            dispatch(updateQuantity({'_id':id,'quantity': newQuantity}))
        }
        else{
            dispatch(updateQuantity({'_id':id,'quantity': 1}))
        }   
    } 
 
   const handleRemoveItem = ()=>{ 
    dispatch(removeFromCart(product.product._id)) 
   }
   
   const handleOnChangeInput = (e, id) =>{
        const newQuantity = parseInt(e.target.value)

        if(newQuantity >= 1){
            dispatch(updateQuantity({'_id':id,'quantity': newQuantity}))
        }
        else{
            dispatch(updateQuantity({'_id':id,'quantity': 1}))
        }   
   }

    const handleDecrease = (e,id) =>{  
        e.stopPropagation()   
        dispatch(decreaseQuantity(id))
    } 
    const handleIncrease = (e,id) =>{  
        e.stopPropagation()  
        dispatch((increaseQuantity(id)))
    } 


const handleToggleWishlist = (prod)=>{
    if(user){ 
        const existedProduct = wishlist.find(item => item._id === prod._id) 
        if(existedProduct){
            toast.success('Remove product from wishlist successfully!')
            dispatch(removeItemFromWishlist(prod._id))
        }
        else{
            toast.success('Add product to wishlist successfully!')
            dispatch(addToWishList({...prod}))
        }
        dispatch(saveWishlist(user.email))
    }
    else{
        navigate('/login')
    }
}

  return (
    <tr className='relative border-b-[1px] border-solid border-[#e7e7e7]'>
        <td className='flex justify-start gap-5 px-2 py-5'>
            <div className='w-[150px] h-[150px]'><img src={product.product.image?.url} alt="" /></div>
            <div className='flex flex-col justify-start gap-5'>
                <span className='font-medium text-[#222529] text-sm -tracking-[0.14px] leading-5'>{product.product.name}</span>
                <h3 className='font-bold'>Color: <span className='font-normal'>{product.product.color}</span></h3>
                <h3 className='font-bold'>Size: <span className='font-normal'>{product.product.size}</span></h3>
            </div>
        </td>
        <td>
            ${product.product.price}
        </td>
        <td >
            <div className='flex justify-start items-center text-sm text-[#777777] '>
                <div 
                className='border-solid border-[#e7e7e7] border-[1px] px-3 py-4
                text-[#222529] cursor-pointer hover:text-[#ff7272]'
                onClick={e=>handleDecrease(e,product.product._id)}
                >-</div>
                <input type="number" className='outline-none w-10 border-solid border-[#e7e7e7] border-[1px] px-3 py-4 text-center text-[#222529] font-bold' value={product.quantity}  onChange={e =>handleOnChangeInput(e,product.product._id)} min="1"  onBlur={e=>handleOnChangeValue(e,product.product._id)}/> 
                <div className='border-solid border-[#e7e7e7] border-[1px] px-3 py-4 
                text-[#222529] cursor-pointer hover:text-[#ff7272]' 
                onClick={e=>handleIncrease(e,product.product._id)}
                >+</div>
            </div> 
        </td> 
        <td className='text-right font-semibold text-[#222529] leading-4'><span>${(parseInt(product.product.price) * parseInt(product.quantity)).toFixed(2)}</span></td>
        <td className="absolute w-5 h-5 top-0 right-0 translate-x-2 translate-y-1 rounded-full flex justify-center items-center bg-white shadow-md cursor-pointer" onClick={handleRemoveItem}>
            <FontAwesomeIcon icon={faMultiply} />
        </td>
        <td className="absolute w-5 h-5 top-0 right-0 -translate-x-4 translate-y-1 rounded-full flex justify-center items-center bg-white shadow-md cursor-pointer" onClick={()=>handleToggleWishlist(product.product)}> 
            <FontAwesomeIcon icon={solidHeart} color={wishlist.find(item=>item._id === product.product._id) ? '#ff7272':'black'}  />
        </td>
    </tr>
  )
}
