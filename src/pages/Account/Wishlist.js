import React, { useEffect }  from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import WishlistItem from './WishlistItem';
import {  useDispatch, useSelector } from 'react-redux';
import {removeItemFromWishlist, saveWishlist,getAllWishListItem} from '../../redux/wishlistSlice'
import {toast} from 'react-toastify' 
import * as request from '../../services/userServices' 
import { Link } from 'react-router-dom';
export default function Wishlist() {  
  const dispatch = useDispatch() 
  const wishlist = useSelector(state=>state.wishlist.items)  
  const email = useSelector(state=>state.auth.users.email)  

  useEffect(()=>{
    const fetchUserWishlist = async()=>{
      if(email){
        const res = await request.getAllUserWishlist(email)
        res && dispatch(getAllWishListItem(res.wishlist))
      }
    }
   
    wishlist.length === 0 && fetchUserWishlist()
  },[email])
 
 
     
  const handleRemove = (id)=>{   
    dispatch(removeItemFromWishlist(id)) 
    dispatch(saveWishlist(email))
    toast.success('Đã xoá thành công!')
  }
  return (
    <div className='px-5 py-10'>
        <h2 className='text-[#ff7272] text-xl leading-10'>My Wish List</h2>
        <div className="content flex flex-wrap md:flex-nowrap gap-5">
          <div className="sidebar w-full md:w-1/4 cursor-pointer">
            <ul className='fa-ul whitespace-nowrap'> 
              <li className='pb-1 border-b-[1px] border-solid border-black '><Link to="/profile"><FontAwesomeIcon icon={faAngleRight} listItem  />My Account</Link> </li>
              <li className='pb-1 border-b-[1px] border-solid border-black '><Link to="/order "><FontAwesomeIcon icon={faAngleRight} listItem  />My Order</Link> </li>
              <li className='pb-1 border-b-[2px] border-solid border-black font-extrabold'><Link to="/wishlist"><FontAwesomeIcon icon={faAngleRight} listItem  />My Wish List</Link> </li> 
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
            <div className='flex flex-wrap w-full'> 
            { wishlist && wishlist?.length > 0 ? 
              (
                wishlist.map((product,index)=>(
                  <WishlistItem key={index} product={product} onRemove={handleRemove} /> 
                )) 
              )
              :
              (
                <div className='flex justify-center items-center w-full text-center h-24'>
                    You don't have any product in wishlist  
                </div>
              )
            }   
            </div>    
            {/* END PRODUCT */}
          </div> 
        </div>
    
    </div>
  )
}
