import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
export default function WishlistItem({product,onRemove}) { 
  return ( 
    <div className='cursor-pointer border-solid border-[#777777] border-t-[1px] sm:border-none py-2 px-2 w-full 
     sm:max-w-[50%] lg:max-w-[25%] md:px-4 md:py-4 
    '>
        <div className="flex justify-center text-center sm:flex-wrap "> 
          <div className='prod-img  w-full h-auto max-w-[150px] sm:max-w-[230px] justify-center items-center
          hover:shadow-xl
          '><img src={product?.image?.url} alt="" className='w-full h-full '/></div>
          <div className='flex-col w-full '>
            <div className="prod-name hover:text-[#ff7272] text-center  limit-text  ">{product.name}</div>
            <div className="price font-bold">${product.price}</div>
          </div>
        </div>
        <div className=" flex justify-between gap-2 my-2  sm:flex-wrap sm:justify-evenly">
          <div className='flex w-full justify-start sm:justify-center gap-2'>
            <button className="add-to-cart bg-black text-white px-3 mx-2 hover:bg-[#ff7272] w-[150px] whitespace-nowrap"> <FontAwesomeIcon icon={faBagShopping} /> ADD TO CART</button>
          </div>
          <div className="action-prod text-[#0088CC] flex justify-end sm:justify-center gap-2 w-full "> 
            <span className='hover:text-[#ff7272]' onClick={()=>onRemove(product._id)} >Remove</span>
          </div>
        </div>
    </div>    
  )
}
