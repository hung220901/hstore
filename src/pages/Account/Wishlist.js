import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faBagShopping } from '@fortawesome/free-solid-svg-icons'
export default function Wishlist() {
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
              <div className='cursor-pointer border-solid border-[#777777] border-t-[1px] sm:border-none py-2 px-2 w-full 
               sm:max-w-[50%] lg:max-w-[25%] md:px-4 md:py-4 
              '>
                  <div className="flex justify-center text-center sm:flex-wrap "> 
                    <div className='prod-img  w-full h-auto max-w-[150px] sm:max-w-[230px] justify-center items-center
                    hover:shadow-xl
                    '><img src="./images/product2.jpeg" alt="" className='w-full h-full '/></div>
                    <div className='flex-col w-full '>
                      <div className="prod-name hover:text-[#ff7272] text-center  limit-text  ">Porto White Girl Shirt</div>
                      <div className="price font-bold">$89.00</div>
                    </div>
                  </div>
                  <div className=" flex justify-between gap-2 my-2  sm:flex-wrap sm:justify-evenly">
                    <div className='flex w-full justify-start sm:justify-center gap-2'>
                      <input type="number" name="" id="" defaultValue='1' className='w-[40px] h-auto border-solid border-black border-t-[1px] border-b-[1px] text-center outline-none hidden sm:block '/>
                      <button className="add-to-cart bg-black text-white px-3 mx-2 hover:bg-[#ff7272] w-[150px] whitespace-nowrap"> <FontAwesomeIcon icon={faBagShopping} /> ADD TO CART</button>
                    </div>
                    <div className="action-prod text-[#0088CC] flex justify-end sm:justify-center gap-2 w-full ">
                      <span className='hover:text-[#ff7272]'>Edit</span>
                      <span className='hover:text-[#ff7272]'>Remove</span>
                    </div>
                  </div>
              </div>   
              <div className='cursor-pointer border-solid border-[#777777] border-t-[1px] sm:border-none py-2 px-2 w-full 
               sm:max-w-[50%] lg:max-w-[25%] md:px-4 md:py-4 
              '>
                  <div className="flex justify-center text-center sm:flex-wrap "> 
                    <div className='prod-img  w-full h-auto max-w-[150px] sm:max-w-[230px] justify-center items-center
                    hover:shadow-xl
                    '><img src="./images/product2.jpeg" alt="" className='w-full h-full '/></div>
                    <div className='flex-col w-full '>
                      <div className="prod-name hover:text-[#ff7272] text-center  limit-text  ">Porto White Girl Shirt</div>
                      <div className="price font-bold">$89.00</div>
                    </div>
                  </div>
                  <div className=" flex justify-between gap-2 my-2  sm:flex-wrap sm:justify-evenly">
                    <div className='flex w-full justify-start sm:justify-center gap-2'>
                      <input type="number" name="" id="" defaultValue='1' className='w-[40px] h-auto border-solid border-black border-t-[1px] border-b-[1px] text-center outline-none hidden sm:block '/>
                      <button className="add-to-cart bg-black text-white px-3 mx-2 hover:bg-[#ff7272] w-[150px] whitespace-nowrap"> <FontAwesomeIcon icon={faBagShopping} /> ADD TO CART</button>
                    </div>
                    <div className="action-prod text-[#0088CC] flex justify-end sm:justify-center gap-2 w-full ">
                      <span className='hover:text-[#ff7272]'>Edit</span>
                      <span className='hover:text-[#ff7272]'>Remove</span>
                    </div>
                  </div>
              </div>   
              <div className='cursor-pointer border-solid border-[#777777] border-t-[1px] sm:border-none py-2 px-2 w-full 
               sm:max-w-[50%] lg:max-w-[25%] md:px-4 md:py-4 
              '>
                  <div className="flex justify-center text-center sm:flex-wrap "> 
                    <div className='prod-img  w-full h-auto max-w-[150px] sm:max-w-[230px] justify-center items-center
                    hover:shadow-xl
                    '><img src="./images/product2.jpeg" alt="" className='w-full h-full '/></div>
                    <div className='flex-col w-full '>
                      <div className="prod-name hover:text-[#ff7272] text-center  limit-text  ">Porto White Girl Shirt</div>
                      <div className="price font-bold">$89.00</div>
                    </div>
                  </div>
                  <div className=" flex justify-between gap-2 my-2  sm:flex-wrap sm:justify-evenly">
                    <div className='flex w-full justify-start sm:justify-center gap-2'>
                      <input type="number" name="" id="" defaultValue='1' className='w-[40px] h-auto border-solid border-black border-t-[1px] border-b-[1px] text-center outline-none hidden sm:block '/>
                      <button className="add-to-cart bg-black text-white px-3 mx-2 hover:bg-[#ff7272] w-[150px] whitespace-nowrap"> <FontAwesomeIcon icon={faBagShopping} /> ADD TO CART</button>
                    </div>
                    <div className="action-prod text-[#0088CC] flex justify-end sm:justify-center gap-2 w-full ">
                      <span className='hover:text-[#ff7272]'>Edit</span>
                      <span className='hover:text-[#ff7272]'>Remove</span>
                    </div>
                  </div>
              </div>   
              <div className='cursor-pointer border-solid border-[#777777] border-t-[1px] sm:border-none py-2 px-2 w-full 
               sm:max-w-[50%] lg:max-w-[25%] md:px-4 md:py-4 
              '>
                  <div className="flex justify-center text-center sm:flex-wrap "> 
                    <div className='prod-img  w-full h-auto max-w-[150px] sm:max-w-[230px] justify-center items-center
                    hover:shadow-xl
                    '><img src="./images/product2.jpeg" alt="" className='w-full h-full '/></div>
                    <div className='flex-col w-full '>
                      <div className="prod-name hover:text-[#ff7272] text-center  limit-text  ">Porto White Girl Shirt</div>
                      <div className="price font-bold">$89.00</div>
                    </div>
                  </div>
                  <div className=" flex justify-between gap-2 my-2  sm:flex-wrap sm:justify-evenly">
                    <div className='flex w-full justify-start sm:justify-center gap-2'>
                      <input type="number" name="" id="" defaultValue='1' className='w-[40px] h-auto border-solid border-black border-t-[1px] border-b-[1px] text-center outline-none hidden sm:block '/>
                      <button className="add-to-cart bg-black text-white px-3 mx-2 hover:bg-[#ff7272] w-[150px] whitespace-nowrap"> <FontAwesomeIcon icon={faBagShopping} /> ADD TO CART</button>
                    </div>
                    <div className="action-prod text-[#0088CC] flex justify-end sm:justify-center gap-2 w-full ">
                      <span className='hover:text-[#ff7272]'>Edit</span>
                      <span className='hover:text-[#ff7272]'>Remove</span>
                    </div>
                  </div>
              </div>   
            </div>  
            {/* END PRODUCT */}
          </div> 
        </div>
    
    </div>
  )
}
