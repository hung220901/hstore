import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMultiply, faShoppingBag} from '@fortawesome/free-solid-svg-icons';  
import { faHeart, faStar} from '@fortawesome/free-regular-svg-icons';
import { useSelector } from 'react-redux';
export default function QuickView(props) {
  const [quantity, setQuantity] = useState(1) 
  const product = useSelector(state =>state.products.products.filter((prod)=>prod.slug === props.slug))  

  

  const handleIncrease = () =>{ 
    setQuantity(parseInt(quantity)  + 1) 
  }
  const handleDecrease = () =>{
    if(parseInt(quantity) === 1){

    }
    else{
      setQuantity(parseInt(quantity) - 1)
    }
  } 

  const handleOverlay = e =>{
    if(e.target === e.currentTarget){
      props.setShow(!props.show)
    }
  } 
  const handleContentClick =  e =>{
    e.stopPropagation();
  }

  return (
    <div className={`  fixed bg-[rgba(68,70,69,0.8)]  z-40 left-0 top-0  w-full  h-full  overflow-hidden`} 
    onClick={handleOverlay}>
      <div className="fixed left-[15%] top-[10%] bottom-[10%] right-[15%] bg-white shadow-lg z-10" onClick={handleContentClick}> 
        <div className='flex justify-end items-center '>
          <FontAwesomeIcon icon={faMultiply} className='cursor-pointer mt-1 mr-1' size='lg' onClick={()=> props.setShow(!props.show)}/>
        </div>
        <div className="box flex justify-evenly flex-wrap overflow-auto max-h-[95%] lg:flex-wrap">
          <div className=' px-5 w-full h-full md:w-[300px] md:h-[250px] lg:w-full lg:h-full lg:flex-1'>
            <img src={product[0].image.url} alt="" className='w-full h-full object-cover' />
          </div>
          <div className=" flex-col items-start px-5 text-[#777]  lg:flex-1">
            <h3 className='text-[1.875rem] font-bold leading-[1.2] -tracking-[0.01em] text-[#222529]'>{product[0].name}</h3>
            <div className="text-gray-300 py-4">
              <FontAwesomeIcon icon={faStar}  />
              <FontAwesomeIcon icon={faStar}  />
              <FontAwesomeIcon icon={faStar}  />
              <FontAwesomeIcon icon={faStar}  />
              <FontAwesomeIcon icon={faStar}  />
            </div>
            <hr className='border-[#e7e7e7] w-28' />
            <div className="text-bold py-4 text-[1.125rem] font-bold leading-[1.2] -tracking-[0.01em] text-[#222529]">
              {product[0].price}
            </div>
            <div className="description text-[1.1428em] leading-[1.6875] -tracking-[0.015em]  ">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </div>
            <div className='text-[.8571em] pt-5'>AVALABLITY: <span className='text-[#222529] font-bold'>IN STOCK</span></div>
            <div  className='border-solid border-b-[1px] border-[#e7e7e7] text-[.8571em] pb-5'>SKU: <span className='text-[#222529] font-bold '>{product[0].sku}</span></div> 
            <div className='flex justify-start items-center text-sm text-[#777777] py-5 border-solid border-b-[1px] border-[#e7e7e7] flex-wrap '>   
              <div className='flex justify-start items-center'>
                <div
                  className='border-solid border-[#e7e7e7] border-[1px] px-3 py-4
                    text-[#222529] cursor-pointer hover:text-[#ff7272]'
                  onClick={handleDecrease}
                >-</div>
                <input type="number" className='outline-none w-10 border-solid border-[#e7e7e7] border-[1px] px-3 py-4 text-center text-[#222529] font-bold'
                value={quantity}
                onChange={(e)=>setQuantity(e.target.value)}
                />
                <div className='border-solid border-[#e7e7e7] border-[1px] px-3 py-4
                text-[#222529] cursor-pointer hover:text-[#ff7272]'
                onClick={handleIncrease}
                >+</div>
              </div>
              <div className="bg-[#222529] text-white mx-2 py-[2px] px-[2em] uppercase text-[1em] font-bold leading-[3rem] flex items-center gap-2 hover:bg-[#ff7272] hover:text-white  ">
                <FontAwesomeIcon icon={faShoppingBag} />
               add to cart
              </div>
          </div>
          <Link to={`/product-detail/${product[0].slug}`} className='text-[#222529]'>Go to product page</Link> 
          </div>
        </div>
      </div>
    </div>
  )
}
