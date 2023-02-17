import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faReceipt, faHandHoldingDollar, faHouseCircleCheck, faTruck } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'

export default function OrderTracking() {
  return (
    <div className='px-5 py-10 bg-[#efefef] '>
        <h2 className='text-[#ff7272] text-xl leading-10'>My Wish List</h2>
        <div className="content flex flex-wrap md:flex-nowrap gap-5">
          <div className="sidebar w-full md:w-1/4 cursor-pointer">
            <ul className='fa-ul '> 
              <li className='pb-1 border-b-[1px] border-solid border-black'><FontAwesomeIcon icon={faAngleRight} listItem  />My Account</li>
              <li className='pb-1 border-b-[2px] border-solid border-black font-extrabold'><FontAwesomeIcon icon={faAngleRight} listItem  />My Order</li>
              <li className='pb-1 border-b-[1px] border-solid border-black '><FontAwesomeIcon icon={faAngleRight} listItem  />My Wish List</li>
              <li className='pb-1 border-b-[1px] border-solid border-black'><FontAwesomeIcon icon={faAngleRight} listItem  />Account Information</li> 
            </ul>
          </div> 
          <div className='list-info w-full md:w-3/4 rounded-sm'>
            <div className='bg-[#fff] px-2 py-5'>
                <div className="order-info flex justify-end py-5 border-solid border-b-2 border-[#e7e7e7]">
                    <h2 className="order-id pr-5 border-solid border-r-2 border-black">MÃ ĐƠN HÀNG:  230130MUXMSH3W </h2>
                    <div className="order-status pl-5 text-[#ff7272]">ĐƠN HÀNG ĐÃ HOÀN THÀNH</div>
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
                            <FontAwesomeIcon icon={faStar} size="xl" />
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
                                Địa chỉ: 11 ấp 1 xã HP huyện Nhà Bè
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
                            <div className="receive-time">Giao vào Thứ bảy,14/2</div>
                            <div className="shipping-cost">Miễn phí vận chuyển</div>
                        </div>
                    </div>
                    <div className="payment-method bg-white px-10 py-5 flex-1">
                        <h2 className='font-semibold'>HÌNH THỨC THANH TOÁN</h2>
                        <div className="info-detail-box">
                            Thanh toán tiền mặt khi nhận hàng
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
                        <tr>
                            <td className='flex py-5'>
                                <div className="prod-img">
                                    <img src="./images/product1.jpeg" alt="" />
                                </div>
                                <div className="prod-info pl-5">
                                    <div className="prod-name">Porto White shirt</div> 
                                    <div>Color: <span>Green</span></div>
                                    <div>Size: <span>S</span></div> 
                                </div>
                            </td>
                            <td>
                                <div className="price">89.00$</div> 
                            </td>
                            <td>
                                <div className="qty">1</div> 
                            </td>
                            <td>0$</td>
                            <td className='text-right'>89.00$</td>
                        </tr>
                    </tbody>
                </table> 
                <div className="total w-full flex justify-end text-right "> 
                    <div>
                        <div className="subtotal">Tạm tính</div>
                        <div className="shipping-method">Phí vận chuyển</div>
                        <div className="total">Tổng cộng</div>
                    </div>
                    <div className="pl-20"> 
                        <div className="subtotal">89.00$</div>
                        <div className="shipping-method">0đ</div>
                        <div className="total text-red-500 text-lg">89.00đ</div>
                    </div> 
                </div>
                <div className="action flex gap-5 justify-end py-5 border-solid border-t-2 border-[#e7e7e7]">
                    <div className="review border-solid border-[1px] border-[#ff7272] px-3 py-2">Đánh giá</div>
                    <div className="buy border-solid border-[1px] border-[#ff7272] px-3 py-2">Mua lại</div>
                </div>
            </div>
          </div>
        </div> 
    </div>
  )
} 