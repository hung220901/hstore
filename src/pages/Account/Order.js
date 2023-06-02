import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons' 
import {useDispatch, useSelector} from 'react-redux'
import {getAllOrderByUserMail} from '../../services/orderService'
import {getAllOrders} from '../../redux/orderSlice'
import OrderItem from './OrderItem';
import { Link } from 'react-router-dom';
export default function Order() {
  const dispatch = useDispatch()
  const [typeOrder, setTypeOrder] = useState('All')
  const [orderList, setOrderList] = useState([])
  const email = useSelector(state=>state.auth.users.email)
  const order = useSelector(state=>state.orders)
  useEffect(()=>{
    const fetchAllOrder = async()=>{  
      const res = await getAllOrderByUserMail(email)
      dispatch(getAllOrders(res.order))
    } 
    fetchAllOrder()
    
  },[email, dispatch])

  useEffect(()=>{
    if(typeOrder === 'All'){
      setOrderList(order.items)
    }
    else{
      setOrderList(order.items.filter(or=>or.status === typeOrder)) 
    }
  },[typeOrder, order]) 
  return (
    <div className='px-5 py-10 bg-[#efefef] '>
        <h2 className='text-[#ff7272] text-xl leading-10'>My Wish List</h2>
        <div className="content flex flex-wrap md:flex-nowrap gap-5">
          <div className="sidebar w-full md:w-1/4 cursor-pointer">
            <ul className='fa-ul '> 
              <li className='pb-1 border-b-[1px] border-solid border-black '><Link to="/profile"><FontAwesomeIcon icon={faAngleRight} listItem  />My Account</Link></li>
              <li className='pb-1 border-b-[2px] border-solid border-black font-extrabold'><Link to="/order "><FontAwesomeIcon icon={faAngleRight} listItem  />My Order</Link> </li>
              <li className='pb-1 border-b-[1px] border-solid border-black '><Link to="/wishlist"><FontAwesomeIcon icon={faAngleRight} listItem  />My Wish List</Link> </li> 
            </ul>
          </div>
          <div className='list-info w-full md:w-3/4 rounded-sm bg-[#fff] px-2'>
            <div className="order-filter flex w-full gap-5 p-2">
                <div className={`all py-4 cursor-pointer justify-center items-center text-center flex-1 ${typeOrder === 'All' ? `border-solid border-b-2 border-[#ff7272]`: `` } `} 
                onClick={()=>setTypeOrder('All')}>Tất cả</div>
                <div className={`shipping py-4 cursor-pointer justify-center items-center text-center flex-1 ${typeOrder === 'Pending' ? `border-solid border-b-2 border-[#ff7272]`: `` }`} onClick={()=>setTypeOrder('Pending')}>Chờ xác nhận</div>
                <div className={`shipping py-4 cursor-pointer justify-center items-center text-center flex-1 ${typeOrder === 'Delivering' ? `border-solid border-b-2 border-[#ff7272]`: `` }`} onClick={()=>setTypeOrder('Delivering')}>Đang giao</div>
                <div className={`done py-4 cursor-pointer justify-center items-center text-center flex-1 ${typeOrder === 'Done' ? `border-solid border-b-2 border-[#ff7272]`: `` }`} onClick={()=>setTypeOrder('Done')}>Hoàn thành</div>
                <div className={`cancel py-4 cursor-pointer justify-center items-center text-center flex-1 ${typeOrder === 'Cancel' ? `border-solid border-b-2 border-[#ff7272]`: `` } `} onClick={()=>setTypeOrder('Cancel')}>Đã huỷ</div>
            </div>
            <div className="search w-full relative my-3 ">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute w-[20px] h-[20px] left-[10px] top-0 translate-y-2 text-[#777777] z-10 " /> 
              <input type="text" className='absolute outline-none h-[36px] w-full py-[10px] flex-1 border-solid border-[1px] border-[#e7e7e7] pl-[40px] pr-[170px]' />
              <button className="absolute right-[10px] top-0 translate-y-2 border-solid border-l-[1px] border-[#e7e7e7] px-5">Tìm đơn hàng</button>
            </div>
            <div className="list-order sm:flex sm:flex-wrap gap-2 mt-[50px]">
              { orderList && orderList.length > 0 ?(
                orderList.map((item, index)=>
                ( 
                  <OrderItem order={item} key={index} status={item.status}  />
                )
                )
                ):
                (
                  <div className='h-48 flex justify-center align-center items-center w-full'>
                      <h1>Order not found!</h1>
                  </div>
                ) 
              }
            </div> 
          </div>
        </div> 
    </div>
  )
}
