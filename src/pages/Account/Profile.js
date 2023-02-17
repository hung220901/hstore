import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
export default function Profile() {
  return (
    <div className='px-5 py-10'>
        <h2 className='text-[#ff7272] text-xl leading-10'>My Wish List</h2>
        <div className="content flex flex-wrap md:flex-nowrap gap-5">
          <div className="sidebar w-full md:w-1/4 cursor-pointer">
            <ul className='fa-ul '> 
              <li className='pb-1 border-b-[1px] border-solid border-black'><FontAwesomeIcon icon={faAngleRight} listItem  />My Account</li>
              <li className='pb-1 border-b-[1px] border-solid border-black'><FontAwesomeIcon icon={faAngleRight} listItem  />My Order</li>
              <li className='pb-1 border-b-[2px] border-solid border-black font-extrabold'><FontAwesomeIcon icon={faAngleRight} listItem  />My Wish List</li>
              <li className='pb-1 border-b-[1px] border-solid border-black'><FontAwesomeIcon icon={faAngleRight} listItem  />Account Information</li> 
            </ul>
          </div>
          <div className='list-info w-full md:w-3/4  sm:flex sm:flex-wrap gap-2'>
            {/* CONTACT */}
            <div className="contact-info-box w-full sm:w-[49%] border-solid border-[1px] border-[#e7e7e7] my-5 cursor-pointer">
              {/* HEADING */}
              <div className='px-4 py-2 bg-[#f5f5f5] text-[#313131] '>
                <h2>CONTACT INFORMATION</h2>
              </div>
              {/* CONTENT */}
              <div className='content px-4 py-5 text-[#777777] text-sm leading-6 min-h-[135px]'>
                <div className='display-name'>
                  hung pham
                </div>
                <div className="email">
                  hung@gmail.com
                </div>
              </div>
              {/* ACTION */}
              <div className='Action flex gap-5 bg-[#f5f5f5] leading-5 py-2 px-3 '>
                <div className="Edit text-[#ff7272] leading-5">Edit</div>
                <div className="Change-password  text-[#ff7272] leading-5">Change Password</div>
              </div>
            </div>
            {/* NEWSLETTERS */}
            <div className="newsletters-box  w-full sm:w-[49%] border-solid border-[1px] border-[#e7e7e7] my-5 cursor-pointer">
              {/* HEADING */}
              <div className="px-4 py-2 bg-[#f5f5f5] text-[#313131]">
                <h2>NEWSLETTERS</h2>
              </div>
              {/* CONTENT */}
              <div className="content px-4 py-5 text-[#777777] text-sm leading-6 min-h-[135px]">
                You aren't subscribed to our newsletters
              </div>
              {/* ACTION */}
              <div className="Action flex gap-5 bg-[#f5f5f5] leading-5 py-2 px-3">
                <div className="Edit text-[#ff7272] leading-5">Edit</div>
              </div>
            </div>
            {/* DEFAULT BILL ADDRESS */}
            <div className="default-bill-address-box w-full sm:w-[49%] border-solid border-[1px] border-[#e7e7e7] my-5 cursor-pointer">
              {/* HEADING */}
              <div className='px-4 py-2 bg-[#f5f5f5] text-[#313131]'>
                <h2>DEFAULT BILLING ADDRESS</h2>
              </div>
              {/* CONTENT */}
              <div className='content px-4 py-5 text-[#777777] text-sm leading-6 min-h-[135px]'>
                You have not set a default billing address
              </div> 
              {/* ACTION */}
              <div className='Action flex gap-5 bg-[#f5f5f5] leading-5 py-2 px-3'>
                <div className="Edit text-[#ff7272] leading-5">Edit Address</div> 
              </div>
            </div>
            {/* DEFAULT SHIPPING ADDRESS */}
            <div className="default-shipping-address-box w-full sm:w-[49%] border-solid border-[1px] border-[#e7e7e7] my-5 cursor-pointer">
              {/* HEADING */}
              <div className="px-4 py-2 bg-[#f5f5f5] text-[#313131]">
                <h2>DEFAULT SHIPPING ADDRESS </h2>
              </div>
              {/* CONTENT */}
              <div className="content px-4 py-5 text-[#777777] text-sm leading-6 min-h-[135px] ">
                You have not set a default shipping address
              </div>
              {/* ACTION */}
              <div className='Action flex gap-5 bg-[#f5f5f5] leading-5 py-2 px-3'>
                <div className="Edit text-[#ff7272] leading-5">Edit Address</div> 
              </div>
            </div> 
          </div>
        </div> 
    </div>
  )
}
