import React, { useState } from 'react'
import { faHeart, faMultiply } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {updateQuantity, decreaseQuantity} from '../../redux/cartSlice'
import { useDispatch } from 'react-redux'



export default function CartItem({product}) {
    const [quantity, setQuantity] = useState(1) 
    const dispatch = useDispatch() 

    const handleDecrease = (id) =>{  
        dispatch(decreaseQuantity(id))
    }
    const handleIncrease = (id, qty) =>{  
        dispatch((updateQuantity({id,qty})))
    } 

  return (
    <tr className='relative border-b-[1px] border-solid border-[#e7e7e7]'>
        <td className='flex justify-start gap-5 px-2 py-5'>
            <div className='w-[150px] h-[150px]'><img src={product.image.url} alt="" /></div>
            <div className='flex flex-col justify-start gap-5'>
                <span className='font-medium text-[#222529] text-sm -tracking-[0.14px] leading-5'>{product.name}</span>
                <h3 className='font-bold'>Color: <span className='font-normal'>{product.color}</span></h3>
                <h3 className='font-bold'>Size: <span className='font-normal'>{product.size}</span></h3>
            </div>
        </td>
        <td>
            {product.price}
        </td>
        <td >
            <div className='flex justify-start items-center text-sm text-[#777777] '>
                <div 
                className='border-solid border-[#e7e7e7] border-[1px] px-3 py-4
                text-[#222529] cursor-pointer hover:text-[#ff7272]'
                onClick={handleDecrease(product._id)}
                >-</div>
                <input type="number" className='outline-none w-10 border-solid border-[#e7e7e7] border-[1px] px-3 py-4 text-center text-[#222529] font-bold' defaultValue={ product.quantity.toString()} onChange={(e)=>dispatch(updateQuantity({'_id':product._id,'quantity': parseFloat(e.target.value)}))} /> 
                <div className='border-solid border-[#e7e7e7] border-[1px] px-3 py-4 
                text-[#222529] cursor-pointer hover:text-[#ff7272]' 
                onClick={handleIncrease(product._id)}
                >+</div>
            </div>
        </td>
        <td className='text-right font-semibold text-[#222529] leading-4'><span>{(parseInt(product.price) * parseInt(product.quantity)).toFixed(2)}</span></td>
        <td className="absolute w-5 h-5 top-0 right-0 translate-x-2 translate-y-1 rounded-full flex justify-center items-center bg-white shadow-md cursor-pointer">
            <FontAwesomeIcon icon={faMultiply} />
        </td>
        <td className="absolute w-5 h-5 top-0 right-0 -translate-x-4 translate-y-1 rounded-full flex justify-center items-center bg-white shadow-md cursor-pointer">
            <FontAwesomeIcon icon={faHeart} color="#ff7272" />
        </td>
    </tr>
  )
}
