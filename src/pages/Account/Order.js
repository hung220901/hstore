import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faMagnifyingGlass, faTruck } from '@fortawesome/free-solid-svg-icons'
export default function Order() {
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
          <div className='list-info w-full md:w-3/4 rounded-sm bg-[#fff] px-2'>
            <div className="order-filter flex w-full gap-5 p-2">
                <div className="all py-4 justify-center items-center text-center flex-1 border-solid border-b-2 border-[#ff7272]">Tất cả</div>
                <div className="shipping py-4 justify-center items-center text-center flex-1">Đang giao</div>
                <div className="done py-4 justify-center items-center text-center flex-1">Hoàn thành</div>
                <div className="cancel py-4 justify-center items-center text-center flex-1">Đã huỷ</div>
            </div>
            <div className="search w-full relative my-3 ">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute w-[20px] h-[20px] left-[10px] top-0 translate-y-2 text-[#777777] z-10 " /> 
              <input type="text" className='absolute outline-none h-[36px] w-full py-[10px] flex-1 border-solid border-[1px] border-[#e7e7e7] pl-[40px] pr-[170px]' />
              <button className="absolute right-[10px] top-0 translate-y-2 border-solid border-l-[1px] border-[#e7e7e7] px-5">Tìm đơn hàng</button>
            </div>
            <div className="list-order sm:flex sm:flex-wrap gap-2 mt-[50px]">
                <div className="order-item px-1 py-2 w-full">
                    <div className="order-status flex items-center gap-5 py-2 px-2 border-solid border-b-2 border-[#e7e7e7]">
                        <FontAwesomeIcon icon={faTruck} color="#ccc" />
                        <span className='text-[#36c531]'>Đang giao</span>
                    </div>
                    <div className="order-detail-box flex justify-between border-solid border-b-2 border-[#e7e7e7] px-2 py-2">
                        <div className='order-detail flex'>
                          <div className="prod-img">
                              <img src="./images/product1.jpeg" alt="" />
                          </div>
                          <div className="prod-info ml-5 ">
                              <div className="prod-name">Shirt Porto</div>
                              <div className="prod-type text-[#777777]">
                                <div className="label">Phân loại:</div>
                                <div>Size: S</div>
                                <div>Color: white</div>
                              </div>
                          </div>
                        </div>
                        <div className="order-price flex items-center">
                          <span>180$</span>
                        </div>
                    </div> 
                    <div className="total-price flex justify-end py-2 items-center gap-5 border-solid border-b-2 border-[#e7e7e7]">
                      <h2>Tổng tiền:</h2>
                      <div>180$</div>
                    </div>
                    <div className="action flex justify-end gap-5 py-2">
                        <div className='bg-[#ff7272] text-white rounded-md px-3 py-[5px]'>Đánh giá</div>
                        <div className='border-solid border-[1px] border-[#ff7272] text-[#ff7272] rounded-md px-3 py-[5px]'>Mua lại</div>
                    </div>
                </div>
            </div> 
          </div>
        </div> 
    </div>
  )
}
