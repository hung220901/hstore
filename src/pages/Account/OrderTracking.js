import React, { useEffect, useMemo, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faReceipt, faHandHoldingDollar, faHouseCircleCheck, faTruck , faStar as starSolid} from '@fortawesome/free-solid-svg-icons'
import { faStar as starRegular } from '@fortawesome/free-regular-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import {getOrderById} from '../../services/orderService'
import { Link, useSearchParams } from 'react-router-dom'; 
import { getOneOrder } from '../../redux/orderSlice';
import request from '../../utils/request';
import Rating from '../../components/Filter/Rating';
export default function OrderTracking() {
    const order = useSelector(state=>state.orders.orderItem) 
    const orderItem = useSelector(state=>state.orders.orderItem.items) 
    const email = useSelector(state=>state.auth.users.email) 
    const total = orderItem?.reduce((acc,cur)=>acc+=cur.subTotal,0)
    const [searchParams] = useSearchParams();
    const [showReview, setShowReview] = useState({show:false,id:null})  
 
    const id = searchParams.get('id');  
    const dispatch = useDispatch()   
     
    const onRatingChange = (value) =>{
        setShowReview({...showReview,rating: value})
    }



    useEffect(()=>{
        const fetchOneOrder = async()=>{
            const res = await getOrderById(id)
            dispatch(getOneOrder(res.data))
        } 
        id && fetchOneOrder()
    },[id])
    
    const handleReview = (e,prod) =>{
        e.stopPropagation() 
        setShowReview({show:true,id:prod._id,image:prod.image.url,name:prod.name,price:prod.price}) 
    }
    const handleSendReview = async () =>{
       if(!showReview.content || showReview.content.trim() ===''){
        alert('Vui long nhap danh gia')
       }
       else{
         const res = await request.post('/review',{
            "content":showReview.content,
            "rating":showReview.rating,
            email,
            "productId":showReview.id
         }) 
         setShowReview({show:false,id:null})
       }
    }
    const handleCancelRV = ()=>{ 
        setShowReview({show:false,id:null}) 
    }
  return (
    <div className='px-5 py-10 bg-[#efefef] '>
        <h2 className='text-[#ff7272] text-xl leading-10'>My Wish List</h2>
        <div className="content flex flex-wrap md:flex-nowrap gap-5">
          <div className="sidebar w-full md:w-1/4 cursor-pointer">
            <ul className='fa-ul '> 
            <li className='pb-1 border-b-[1px] border-solid border-black '><Link to="/profile"><FontAwesomeIcon icon={faAngleRight} listItem  />My Account</Link> </li>
              <li className='pb-1 border-b-[2px] border-solid border-black font-extrabold'><Link to="/order "><FontAwesomeIcon icon={faAngleRight} listItem  />My Order </Link> </li>
              <li className='pb-1 border-b-[1px] border-solid border-black '><Link to="/wishlist"><FontAwesomeIcon icon={faAngleRight} listItem  />My Wish List</Link> </li> 
            </ul>
          </div> 
          <div className='list-info w-full md:w-3/4 rounded-sm'>
            <div className='bg-[#fff] px-2 py-5'>
                <div className="order-info flex justify-end py-5 border-solid border-b-2 border-[#e7e7e7]">
                    <h2 className="order-id pr-5 border-solid border-r-2 border-black">ORDER ID: {order.orderId}   </h2>
                    <div className="order-status pl-5 text-[#ff7272] uppercase">{order.status}</div>
                </div>
                <div className="progress-bar py-5 hidden md:block my-5 mb-10  ">
                    <ul className='flex px-5 w-full pb-10'>
                        <li className='relative w-full before:content-[""] before:absolute before:w-full before:h-2 before:bg-[#ff5501] '>
                        <div className='absolute rounded-full w-14 h-14 left-[40%] -top-6 bg-white border-solid border-[5px] border-[#ff5501] text-center
                        flex items-center justify-center
                        '>
                            <FontAwesomeIcon icon={faReceipt} size="xl" />
                        </div>
                        <div className='absolute w-full text-center top-8 px-5 '>
                            Đơn Hàng Đã Đặt
                        </div>
                        </li>
                        <li className='relative w-full before:content-[""] before:absolute before:w-full before:h-2 before:bg-[#e7e7e7] '>
                        <div className='absolute rounded-full w-14 h-14 left-[40%] -top-6 bg-white border-solid border-[5px] border-[#e7e7e7] text-center font-semibold
                        flex items-center justify-center
                        '>
                            <FontAwesomeIcon icon={faHandHoldingDollar} size="xl" />
                        </div>
                        <div className='absolute w-full text-center top-8 px-5 '>
                            Đã Xác Nhận Thông Tin Thanh Toán
                        </div>
                        </li>
                        <li className='relative w-full before:content-[""] before:absolute before:w-full before:h-2 before:bg-[#e7e7e7] '>
                        <div className='absolute rounded-full w-14 h-14 left-[40%] -top-6 bg-white border-solid border-[5px] border-[#e7e7e7] text-center font-semibold
                        flex items-center justify-center
                        '>
                            <FontAwesomeIcon icon={faTruck} size="xl" />
                        </div>
                        <div className='absolute w-full text-center top-8 px-5 '>
                            Đã Giao Cho ĐVVC
                        </div>
                        </li>
                        <li className='relative w-full before:content-[""] before:absolute before:w-full before:h-2 before:bg-[#e7e7e7] '>
                        <div className='absolute rounded-full w-14 h-14 left-[40%] -top-6 bg-white border-solid border-[5px] border-[#e7e7e7] text-center font-semibold
                        flex items-center justify-center
                        '>
                            <FontAwesomeIcon icon={faHouseCircleCheck} size="xl" />
                        </div>
                        <div className='absolute w-full text-center top-8 px-5 '>
                            Đã Nhận Được Hàng
                        </div>
                        </li>
                        <li className='relative w-full before:content-[""] before:absolute before:w-full before:h-2 before:bg-[#e7e7e7] '>
                        <div className='absolute rounded-full w-14 h-14 left-[40%] -top-6 bg-white border-solid border-[5px] border-[#e7e7e7] text-center font-semibold
                        flex items-center justify-center
                        '>
                            <FontAwesomeIcon icon={starRegular} size="xl" />
                        </div>
                        <div className='absolute w-full text-center top-8 px-5 '>
                            Đơn Hàng Đã Được Đánh Giá
                        </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="user-info py-5">
                <div className="flex justify-around gap-5">
                    <div className="shipping-address bg-white px-10 py-5 flex-1 ">
                        <h2 className='font-semibold'>ĐỊA CHỈ NGƯỜI NHẬN</h2>
                        <div className="info-detail-box">
                            <div className="address">
                                Địa chỉ: {order.shippingAddress?.street},{order.shippingAddress?.state},{order.shippingAddress?.city}
                            </div>
                            <div className="phone">
                                Điện thoại: 0365638123
                            </div>
                        </div>
                    </div>
                    <div className="shipping-method bg-white px-10 py-5 flex-1">
                        <h2 className='font-semibold'>HÌNH THỨC GIAO HÀNG</h2>
                        <div className="info-detail-box">
                            <div className="dvvc">Giao hàng tiết kiệm</div>
                            <div className="receive-time">Đơn hàng sẽ được giao trước {order.shippingDate}</div>
                            <div className="shipping-cost">Miễn phí vận chuyển</div>
                        </div>
                    </div>
                    <div className="payment-method bg-white px-10 py-5 flex-1">
                        <h2 className='font-semibold'>HÌNH THỨC THANH TOÁN</h2>
                        <div className="info-detail-box">
                            Thanh toán Visa
                        </div>
                    </div>
                </div>
            </div>
            <div className="line w-full h-[0.1875rem] bg-gradient"></div>
            <div className="product py-5 bg-white my-2 px-5">
                <table className="order-detail-box px-2 py-2 w-full">
                    <thead>
                        <tr className='border-solid border-b-2 border-[#e7e7e7]'>
                            <td className='py-2'>Sản phẩm</td>
                            <td>Giá</td>
                            <td>Số lượng</td>
                            <td>Giảm giá</td>
                            <td className='text-right'>Tạm tính</td>
                        </tr>
                    </thead>
                    <tbody className='border-solid border-b-2 border-[#e7e7e7]'>
                        {
                            orderItem && orderItem.map((prod,i)=>(
                                <tr key={i}>
                                    <td className='flex py-5'>
                                        <div className="prod-img w-24 h-24">
                                            <img src={prod.product.image.url} alt="" />
                                        </div>
                                        <div className="prod-info pl-5">
                                            <div className="prod-name">{prod.product.name}</div> 
                                            <div>Color: <span>Green</span></div>
                                            <div>Size: <span>S</span></div> 
                                            <div className="action flex gap-5 cursor-pointer">
                                                <div className="review bg-[#ff7272] px-2 py-1 text-white" onClick={(e)=>handleReview(e,prod.product)}>Đánh giá</div>
                                                <div className="buy border-solid border-[1px] border-[#ff7272] px-2 py-1">Mua lại</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="price">{prod.product.price}$</div> 
                                    </td>
                                    <td>
                                        <div className="qty">{prod.quantity}</div> 
                                    </td>
                                    <td>0$</td>
                                    <td className='text-right'>{prod.subTotal}$</td>
                                </tr> 
                            ))
                        }
                    </tbody>
                </table> 
                <div className="total w-full flex justify-end text-right "> 
                    <div>
                        <div className="subtotal">Tạm tính</div>
                        <div className="shipping-method">Phí vận chuyển</div>
                        <div className="total">Tổng cộng</div>
                    </div>
                    <div className="pl-20"> 
                        <div className="subtotal">{total}$</div>
                        <div className="shipping-method">0$</div>
                        <div className="total text-red-500 text-lg">{total}$</div>
                    </div> 
                </div>

                { showReview.show &&
                    <div className='fixed w-full h-full left-0 top-0 bg-[rgba(0,0,0,0.4)] z-50 flex items-center justify-center'>
                        <div className='max-w-full pt-8 pr-8 pl-8 bg-white w-[45.625rem] h-[80%] relative rounded'>
                            <h1 className='uppercase text-xl mb-5 text-center font-semibold'>Review product</h1>
                            <div className='prod-detail flex gap-5 items-center'>
                                <div className='w-16 h-16'>
                                    <img className='w-full h-full' src={showReview.image} alt="" />
                                </div>
                                <div>
                                    <div>Product name: {showReview.name}  </div> 
                                    <div>Price: {showReview.price}  </div>  
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-center'> 
                                <div>
                                    <Rating status={true}  onRatingChange={onRatingChange} size={'2x'} />
                                </div>
                            </div> 
                            <textarea name="" id="" cols="30" rows="10" className='w-full resize-none mt-2 border-solid border-2 outline-none border-[#e7e7e7] p-2' placeholder='Vui lòng nhập nội dung đánh giá' onChange={e=>setShowReview({...showReview,content:e.target.value})}> 
                            </textarea> 
                            <div className='btn-action flex justify-end gap-5 bottom-0 left-0 right-0 w-full absolute p-5 '>
                                <button className='px-3 py-1 hover:bg-[rgb(248,248,248)] ' onClick={()=>handleCancelRV()}>Cancel</button>
                                <button className='px-3 py-1 bg-[#ff7272] text-white' onClick={()=>handleSendReview()}>Done</button>
                            </div>
                        </div>
                    </div>  
                }
            </div>
          </div>
        </div> 
    </div>
  ) 
}