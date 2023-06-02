import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTruck } from '@fortawesome/free-solid-svg-icons' 
import {useNavigate} from 'react-router-dom'
import {getOneOrder} from '../../redux/orderSlice'
import {useDispatch} from 'react-redux'
import {updateOrderStatus} from '../../redux/orderSlice'
import {updateOrderStatusToDB} from '../../services/orderService'
export default function OrderItem({order , status}) { 
    const navigate = useNavigate() 
    const dispatch = useDispatch() 
    const total = order.items.reduce((acc, cur)=>acc+= cur.subTotal,0)  
 
    const handleShowDetail = (e) =>{
        e.stopPropagation()  
        navigate('/order-tracking?id='+order.orderId)
    }


    const handleCancelOrder = async(e) =>{ 
        e.stopPropagation()
        try {
            await updateOrderStatusToDB(order.orderId,"Cancel")  
            dispatch(updateOrderStatus({orderId:order.orderId,status:'Cancel'})) 
        } catch (error) {
            
        }

    }

    const handleConfirmOrder = async(e) =>{ 
        e.stopPropagation()
        await updateOrderStatusToDB(order.orderId,"Done")  
        dispatch(updateOrderStatus({orderId:order.orderId,status:'Done'})) 
    }


    const handleChangePage = ()=>{
        navigate(`/order-tracking?id=${order.orderId}`)
        dispatch(getOneOrder(order.orderId))
    }
  return (
    <div className="order-item px-1 w-full border-solid border-b-2 border-[#e7e7e7]"  onClick={handleChangePage}>
        <div className="order-status flex items-center gap-5 py-2  border-solid border-b-2 border-[#e7e7e7]">
            <FontAwesomeIcon icon={faTruck} color="#ccc" />
            <span className={order.status === 'Pending' ?`text-[#36c531]`: order.status === 'Cancel' ? 'text-[#FF0000]': order.status === 'Delivering'? 'text-[#3182ce]' : 'text-[#36c531]'}> 
                {order.status}
            </span>
        </div>
        {order.items.map((prod,i)=>(
            <div className="order-detail-box flex justify-between border-solid border-b-2 border-[#e7e7e7] px-2 py-2" key={i}>
                <div className='order-detail flex'> 
                    <div className="prod-img w-24 h-24">
                        <img src={prod.product.image?.url} alt="" />
                    </div>
                    <div className="prod-info ml-5 ">
                        <div className="prod-name">{prod.name}</div>
                        <div className="prod-type text-[#777777]">
                            <div className="label">Phân loại:</div>
                            <div>quantity: {prod.quantity}</div>
                            <div>Color: white</div>
                        </div>
                    </div>
                </div>
                <div className="order-price flex items-center">
                    <span>{prod.subTotal}$</span>
                </div> 
            </div> 
        ))}
        <div className="total-price flex justify-end py-2 items-center gap-5 border-solid border-b-2 border-[#e7e7e7]">
        <h2>Total:</h2>
        <div> {total}$</div>
        </div>
        <div className="action flex justify-end gap-5 py-2 cursor-pointer" > 
            <div className={`bg-[#ff7272] text-white rounded-md px-3 py-[5px] ${order.status === 'Cancel' ? 'hidden' : ''}`}
            onClick={status === 'Pending' ?  handleCancelOrder : status === 'Delivering' ? handleConfirmOrder : handleShowDetail}
            >{status === 'Pending' ? 'Cancel': status === 'Delivering' ? "Received Order" : "Show detail" }</div>
            <div className='border-solid border-[1px] border-[#ff7272] text-[#ff7272] rounded-md px-3 py-[5px]'>Buy Again</div>
        </div>
 
    </div>  
  )
}
