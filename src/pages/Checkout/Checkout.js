import React, {useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faAngleDown, faAngleUp, faCheck} from '@fortawesome/free-solid-svg-icons'
export default function Checkout() {
  const [showCart, setShowCart] = useState(false)
 

  return (
    <div className='px-5 pb-10 relative'>
        <div className='flex justify-between items-center border-solid border-t-[1px] border-b-[1px] border-[#e7e7e7] md:hidden  ' onClick={()=>setShowCart(!showCart)}>
          <div>
            <h2>Estimated Total</h2>
            <span className='text-[#0088cc]'>$220.80</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faAngleUp} />
          </div>
        </div>
        <div className="progress-bar py-5 hidden md:block">
          <ul className='flex px-5 w-[40%] pb-10'>
            <li className='relative w-full before:content-[""] before:absolute before:w-full before:h-2 before:bg-[#ff5501] before:rounded-lg'> 
              <div className='absolute rounded-full w-9 h-9 left-[40%] -top-3 bg-white border-solid border-[5px] border-[#ff5501] text-center'>
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <div className='absolute w-full text-center top-8 whitespace-nowrap'>
                Shipping
              </div>
            </li>   
            <li className='relative w-full before:content-[""] before:absolute before:w-full before:h-2 before:bg-[#e7e7e7] before:rounded-lg'> 
              <div className='absolute rounded-full w-9 h-9 left-[40%] -top-3 bg-white border-solid border-[5px] border-[#e7e7e7] text-center font-semibold'>
                2
              </div>
              <div className='absolute w-full text-center top-8 whitespace-nowrap'>
                Review & payments
              </div>
            </li>  
          </ul>
        </div>
        <div className='flex justify-between gap-10'>
          <div className="checkout-form w-full md:w-2/3">
            <h2 className='py-2 text-[#222529] font-semibold leading-6 '>SHIPPING ADDRESS</h2>
            <div className="box-input">
              <h2>First Name <span className='text-red-500'>*</span></h2>
              <input type="text" name="" id="" className='px-3 py-2 border-solid border-[1px] border-[#e7e7e7] outline-none w-full' />
            </div>
            <div className="box-input">
              <h2>Last Name  <span className='text-red-500'>*</span></h2>
              <input type="text" name="" id="" className='px-3 py-2 border-solid border-[1px] border-[#e7e7e7] outline-none w-full' />
            </div>
            <div className="box-input">
              <h2>Street Address  <span className='text-red-500'>*</span></h2>
              <input type="text" name="" id="" className='px-3 py-2 border-solid border-[1px] border-[#e7e7e7] outline-none w-full' />
            </div>
            <div className="box-input">
              <label htmlFor='city'>City <span className='text-red-500'>*</span></label>
              <select name="city" id="" className='px-3 py-2 border-solid border-[1px] border-[#e7e7e7] outline-none w-full'>
                <option value="Ho Chi Min">TP. Ho Chi Minh</option>
                <option value="HaNoi">Ha Noi</option>
              </select>
            </div>
            <div className="box-input">
            <label htmlFor='District'>District <span className='text-red-500'>*</span></label>
              <select name="District" id="" className='px-3 py-2 border-solid border-[1px] border-[#e7e7e7] outline-none w-full'>
                <option value="Nha Be">Nha Be</option>
                <option value="Quan 7">Quan 7</option>
              </select>
            </div>
            <div className="box-input">
              <label htmlFor='village'>Sub-district/Village <span className='text-red-500'>*</span></label>
              <select name="village" id="" className='px-3 py-2 border-solid border-[1px] border-[#e7e7e7] outline-none w-full'>
                <option value="Hiep Phuoc">Hiep Phuoc</option>
                <option value="Nhon Duc">Nhon Duc</option>
              </select>
            </div>
            <div className="box-input">
              <h2>Phone number <span className='text-red-500'>*</span></h2>
              <input type="text" name="" id="" className='px-3 py-2 border-solid border-[1px] border-[#e7e7e7] outline-none w-full' />
            </div>
          </div> 
          <div className={`cart ${showCart ? 'max-md:fixed' : 'hidden'} w-full h-full top-0 right-0 z-20 left-[20%] bg-white 
           md:!block lg:!block xl:!block md:w-1/3
          before:bg-[rgba(0,0,0,.5)] before:w-[20%] before:h-full before:content-[""] before:${showCart?'fixed':'hidden'} before:-z-10 before:left-0 before:top-0
          md:before:hidden lg:before:hidden xl:before:hidden
          `} onClick={()=>setShowCart(!showCart)}> 
            <div className='border-solid border-[1px] border-[#e7e7e7] px-5 py-5'>
              <h2>ORDER SUMMARY</h2>
              <div className='flex justify-between items-center'>
                <span> Items in Cart</span>
                <FontAwesomeIcon icon={showCart ? faAngleUp:faAngleDown} />
              </div>
              <div className={`list-prod-cart ${showCart ? 'block' :'hidden'} max-h-[400px] overflow-y-auto`}  >
                <div className="prod-item flex gap-5 py-1">
                  <div className="prod-img">
                    <img src="./images/product1.jpeg" alt="" />
                  </div>
                  <div className="prod-info">
                    <div className="prod-name">Porto White shirt</div>
                    <div className="qty">Qty:1</div>
                    <div className="price">89.00$</div>
                    <div className="view-detail">View detail</div>
                    <div className='hidden'>
                      <div>Color: <span>Green</span></div>
                      <div>Size: <span>S</span></div>
                    </div>
                  </div>
                </div>  
              </div>
            </div>
          </div>
        </div>  
    </div>
  )
}
