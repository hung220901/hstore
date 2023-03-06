import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Scrollbar, A11y} from 'swiper';
import 'swiper/css'; 
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar} from '@fortawesome/free-regular-svg-icons';
import { faMultiply, faShoppingBag} from '@fortawesome/free-solid-svg-icons';  
import * as productServices from '../../services/productServices'
export default function ListProduct() {
    const [showQuickView, setShowQuickView] = useState(false) 
    const [product, setProduct] = useState()
    const [quantity, setQuantity] = useState({qty:1})
    const handleIncrease = () =>{
      setQuantity(quantity.qty + 1) 
    }
    const handleDecrease = () =>{
      setQuantity(quantity.qty - 1)
    }
    const handleShow =(e) =>{  
      e.preventDefault()  
      setShowQuickView(!showQuickView)
    } 
 
// Call API 
  useEffect(()=>{
    const fetchApi = async ()=>{
      const result = await productServices.getAllProduct();  
      setProduct(result) 
    }
    fetchApi()
  },[])
  return (
    <>
      <h3 className='text-[#313131] block text-lg font-bold leading-5 -tracking-[0.18px] text-center uppercase w-full mt-10'>feature product</h3>
      <Swiper
              slidesPerView={4} 
              speed={1000} 
              modules={[ Scrollbar, A11y]}  
              breakpoints={{
                120:{
                  slidesPerView: 1,
                },
                320:{
                  slidesPerView: 2,
                }, 
                640:{
                  slidesPerView:3,
                },
                1024:{
                  slidesPerView:4,
                }
              }}
              loop={true}
            >
            { product?.map((prod,index)=>(
              <SwiperSlide key={index}>
                <Link to={`/product-detail/${prod.slug}`}>
                  <div className="px-5 py-10 ">
                    <div className='relative group'> 
                      <img className='w-full h-full' src={prod.image.url} alt="" />
                      <button className="absolute top-1 right-1
                        rounded-full bg-white w-8 h-8 outline-none border-none hover:bg-[#ff7272] hover:text-white
                        m-2 invisible group-hover:visible
                        transition-all ease-in duration-200
                        opacity-50
                        group-hover:opacity-100
                        ">
                          <FontAwesomeIcon icon={faShoppingBag} />
                      </button>
                      <div className="bg-[#ff7272]
                        text-white absolute
                          bottom-0  left-0  right-0
                          text-center group
                          opacity-90
                          w-full h-auto indent-0
                          transition-all duration-[0.25em]  ease-in
                          invisible group-hover:visible group-hover:delay-100
                          group-hover:py-2 cursor-pointer"
                          onClick={(e)=>handleShow(e)}
                        >
                        QUICK REVIEW
                      </div>
                    </div>
                    <div className="cart-bottom flex justify-between pt-1">
                        <div className="item-left">
                          <div className="product-name">
                            {prod.name}
                          </div>
                          <div className="text-gray-300">
                            <FontAwesomeIcon icon={faStar}  />
                            <FontAwesomeIcon icon={faStar}  />
                            <FontAwesomeIcon icon={faStar}  />
                            <FontAwesomeIcon icon={faStar}  />
                            <FontAwesomeIcon icon={faStar}  />
                          </div>
                          <div className="product-price">{prod.price}</div>
                        </div>
                        <div className="add-to-wishlist">
                          <FontAwesomeIcon icon={faHeart} />
                        </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>               
            ))

            }
            {/* <SwiperSlide>
              <Link to="/product-detail">
                <div className="px-5 py-10 ">
                  <div className='relative group'>
                    <img className='w-full h-full' src="./images/product_men2.jpeg" alt="" />
                    <button className="absolute top-1 right-1
                      rounded-full bg-white w-8 h-8 outline-none border-none hover:bg-[#ff7272] hover:text-white
                      m-2 invisible group-hover:visible
                      transition-all ease-in duration-200
                      opacity-50
                      group-hover:opacity-100
                      ">
                        <FontAwesomeIcon icon={faShoppingBag} />
                    </button>
                    <div className="bg-[#ff7272]
                       text-white absolute
                        bottom-0  left-0  right-0
                        text-center group
                        opacity-90
                        w-full h-auto indent-0
                        transition-all duration-[0.25em]  ease-in
                        invisible group-hover:visible group-hover:delay-100
                        group-hover:py-2 cursor-pointer"
                        onClick={(e)=>handleShow(e)}
                      >
                      QUICK REVIEW
                    </div>
                  </div>
                  <div className="cart-bottom flex justify-between pt-1">
                      <div className="item-left">
                        <div className="product-name">
                          Girl Black
                        </div>
                        <div className="text-gray-300">
                          <FontAwesomeIcon icon={faStar}  />
                          <FontAwesomeIcon icon={faStar}  />
                          <FontAwesomeIcon icon={faStar}  />
                          <FontAwesomeIcon icon={faStar}  />
                          <FontAwesomeIcon icon={faStar}  />
                        </div>
                        <div className="product-price">$49.00</div>
                      </div>
                      <div className="add-to-wishlist">
                        <FontAwesomeIcon icon={faHeart} />
                      </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/product-detail">
                <div className="px-5 py-10 ">
                  <div className='relative group'>
                    <img className='w-full h-full' src="./images/product2.jpeg" alt="" />
                    <button className="absolute top-1 right-1
                      rounded-full bg-white w-8 h-8 outline-none border-none hover:bg-[#ff7272] hover:text-white
                      m-2 invisible group-hover:visible
                      transition-all ease-in duration-200
                      opacity-50
                      group-hover:opacity-100
                      ">
                        <FontAwesomeIcon icon={faShoppingBag} />
                    </button>
                    <div className="bg-[#ff7272]
                       text-white absolute
                        bottom-0  left-0  right-0
                        text-center group
                        opacity-90
                        w-full h-auto indent-0
                        transition-all duration-[0.25em]  ease-in
                        invisible group-hover:visible group-hover:delay-100
                        group-hover:py-2 cursor-pointer"
                        onClick={(e)=>handleShow(e)}
                      >
                      QUICK REVIEW
                    </div>
                  </div>
                  <div className="cart-bottom flex justify-between pt-1">
                      <div className="item-left">
                        <div className="product-name">
                          Girl Black  
                        </div>
                        <div className="text-gray-300">
                          <FontAwesomeIcon icon={faStar}  />
                          <FontAwesomeIcon icon={faStar}  />
                          <FontAwesomeIcon icon={faStar}  />
                          <FontAwesomeIcon icon={faStar}  />
                          <FontAwesomeIcon icon={faStar}  />
                        </div>
                        <div className="product-price">$49.00</div>
                      </div>
                      <div className="add-to-wishlist">
                        <FontAwesomeIcon icon={faHeart} />
                      </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>  */}
      </Swiper> 
       {/* TOAST QUICK VIEW */}
      <div className={` ${showQuickView ? 'fixed':'hidden'} bg-[rgba(68,70,69,0.8)]  z-40 left-0 top-0  w-full  h-full  overflow-hidden`} 
      onClick={()=>handleShow}>
        <div className="fixed left-[15%] top-[10%] bottom-[10%] right-[15%] bg-white shadow-lg z-10 "> 
          <div className='flex justify-end items-center '>
            <FontAwesomeIcon icon={faMultiply} className='cursor-pointer mt-1 mr-1' size='lg' onClick={()=> setShowQuickView(!showQuickView)}/>
          </div>
          <div className="box flex justify-evenly flex-wrap overflow-auto max-h-[95%] lg:flex-wrap">
            <div className=' px-5 w-full h-full md:w-[300px] md:h-[250px] lg:w-full lg:h-full lg:flex-1'>
              <img src="./images/product2.jpeg" alt="" className='w-full h-full object-cover' />
            </div>
            <div className=" flex-col items-start px-5 text-[#777]  lg:flex-1">
              <h3 className='text-[1.875rem] font-bold leading-[1.2] -tracking-[0.01em] text-[#222529]'>Girl Black Blouse</h3>
              <div className="text-gray-300 py-4">
                <FontAwesomeIcon icon={faStar}  />
                <FontAwesomeIcon icon={faStar}  />
                <FontAwesomeIcon icon={faStar}  />
                <FontAwesomeIcon icon={faStar}  />
                <FontAwesomeIcon icon={faStar}  />
              </div>
              <hr className='border-[#e7e7e7] w-28' />
              <div className="text-bold py-4 text-[1.125rem] font-bold leading-[1.2] -tracking-[0.01em] text-[#222529]">
                $49.00 
              </div>
              <div className="description text-[1.1428em] leading-[1.6875] -tracking-[0.015em]  ">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </div>
              <div className='text-[.8571em] pt-5'>AVALABLITY: <span className='text-[#222529] font-bold'>IN STOCK</span></div>
              <div  className='border-solid border-b-[1px] border-[#e7e7e7] text-[.8571em] pb-5'>SKU: <span className='text-[#222529] font-bold '>564562</span></div> 
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
            <Link to="/product-detail" className='text-[#222529]'>Go to product page</Link> 
            </div>
          </div>
        </div>
      </div>
    </> 
  )
}
