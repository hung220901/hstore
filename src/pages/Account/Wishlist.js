import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import WishlistItem from './WishlistItem';
import { useDispatch, useSelector } from 'react-redux';
import * as req from '../../services/userServices'
import {getAllWishListItem} from '../../redux/wishlistSlice'
export default function Wishlist() { 
  const dispatch = useDispatch()
  const wishlist = useSelector(state=>state.wishlist.items) 
  const email = useSelector(state => state.auth.users.email)  
  useEffect(()=>{
    const getAllUserWishlist = async()=>{
       const res = await req.getAllUserWishlist(email)
       console.log(res);
       dispatch(getAllWishListItem(res.wishlist))
    }
    getAllUserWishlist()
  },[email])
  return (
    <div className='px-5 py-10'>
        <h2 className='text-[#ff7272] text-xl leading-10'>My Wish List</h2>
        <div className="content flex flex-wrap md:flex-nowrap gap-5">
          <div className="sidebar w-full md:w-1/4 cursor-pointer">
            <ul className='fa-ul whitespace-nowrap'> 
              <li className='pb-1 border-b-[1px] border-solid border-black'><FontAwesomeIcon icon={faAngleRight} listItem  />My Account</li>
              <li className='pb-1 border-b-[1px] border-solid border-black'><FontAwesomeIcon icon={faAngleRight} listItem  />My Order</li>
              <li className='pb-1 border-b-[1px] border-solid border-black'><FontAwesomeIcon icon={faAngleRight} listItem  />My Wish List</li>
              <li className='pb-1 border-b-[1px] border-solid border-black'><FontAwesomeIcon icon={faAngleRight} listItem  />Account Information</li> 
            </ul>
          </div>
          <div className="list-info w-full md:w-3/4  sm:flex sm:flex-wrap gap-2">
            <div className="amount-showing py-5 my-2 bg-[#f4f4f4] pl-2 font-semibold w-full">
              <label htmlFor="showOption" className='font-bold mr-2 '>Show</label>
              <select name="showOption" id="" className='border-none outline-none'>
                <option defaultValue="1">10</option>
                <option defaultValue="2">20</option>
                <option defaultValue="3">50</option>
              </select>
            </div> 
            {/* Mobile */}
            <div className='flex flex-wrap'> 
            { wishlist.length > 0 && wishlist.map((product,index)=>(
                <WishlistItem key={index} product={product} /> 
              )) 
            }   
            </div>    
            {/* END PRODUCT */}
          </div> 
        </div>
    
    </div>
  )
}
