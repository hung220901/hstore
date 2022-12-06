import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Scrollbar, A11y , Autoplay} from 'swiper';
import 'swiper/css'; 
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './home.scss' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar} from '@fortawesome/free-regular-svg-icons';
import { faShoppingBag, faHeadset, faCreditCard,faShare, faTruckFast} from '@fortawesome/free-solid-svg-icons'; 
  export default function index() { 
    SwiperCore.use([Autoplay])
    return (
      <>
      {/* BANNER SLIDER */}
        <Swiper
              slidesPerView={1} 
              speed={1000}
              // autoplay={{ delay: 1000 }}
              modules={[  Pagination, Scrollbar, A11y]} 
              pagination={{ clickable: true }}
              loop={true}
            >
              <SwiperSlide>
                <img className='object-cover min-h-full' src="./images/home_slide1.jpg" alt="" />
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-20'>
                  <div className='text-4xl leading-[1] text-center font-normal tracking-wider text-red-500 whitespace-nowrap font-segoe'>Summer Fashion Trends</div>
                  <h1 className='text-[4.1875em] leading-[1] text-center'>BIG SALE UP TO</h1>
                  <h2 className='text-[9.625em] leading-[1] text-center whitespace-nowrap'>80% <small className='inline-block text-[27%] break-all w-[1em] text-center font-black whitespace-normal'>OFF</small></h2>         
                  <div className="flex justify-center items-center gap-5">
                    <h5 className='text-xs font-bold h-5'>STARTING AT </h5>    
                    <h5 className='font-extrabold text-sm relative text-white pt-[6px] px-[10px] pb-1 after:content-[""] after:absolute after:bg-[#ff7272] after:z-[-1] after:top-0 after:right-0 after:left-0 after:bottom-0 after:rotate-[-2deg]'><b>$199</b>  99</h5>
                  </div>
                  <div className='mt-5 text-center'>
                    <button className="bg-transparent border-2 border-solid border-black font-bold px-5 py-[5px]">
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img className='object-cover min-h-full' src="./images/home_slide1.jpg" alt="" />
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-20 flex bg-[rgba(255,255,255,0.5)] '>
                  <div className="py-[10px] px-5">
                    <div className='text-4xl leading-[1] text-center font-normal tracking-wider text-black whitespace-nowrap font-segoe'>Summer Trends</div>
                    <h1 className='text-[9.625em] leading-[1] text-center whitespace-nowrap'>SALE</h1>
                  </div>
                  <div className="px-5 py-[10px]">
                    <h3 className="tracking-[.18em] font-light text-[1.25em]">PRICE UP TO</h3>
                    <h2 className='text-[9.625em] leading-[1] text-center whitespace-nowrap'>80% <small className='inline-block text-[27%] break-all w-[1em] text-center font-black whitespace-normal'>OFF</small></h2> 
                    <div className='mt-5 text-center'>
                      <button className="bg-transparent border-solid border-black border-2 font-bold px-5 py-[5px] z-10">
                        SHOP NOW
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide> 
        </Swiper>
      {/* END BANNER SLIDER */}

      {/* PROGRAMS SALE */}
        <div className='flex flex-wrap w-full h-full'>
          <div className="relative lg:basis-1/4 md:basis-1/2 -z-10 w-[318px] h-[200px]">
            <img className='object-cover h-full' src="./images/home_banner1.jpg" alt="" />
            <div className="absolute top-2.5 right-2.5 z-10 text-right">
              <h3 className='text-[1.75em] leading-[1] font-extrabold'>TRENDING</h3>
              <h3 className='text-[1.75em] leading-[1] font-extrabold'>Hat Sales</h3>
              <h4 className='text-[0.9375em] leading-[1] font-semibold tracking-[0.01em] text-[#ff7272] my-2'>STARTING AT $99</h4>
              <button className="bg-black text-white border-none outline-none px-5 py-[5px] font-black cursor-pointer ">
                BUY NOW!
              </button>
            </div>
          </div>
          <div className="relative -z-10 lg:basis-1/4 md:basis-1/2 w-[318px] h-[200px]">
            <img className='object-cover h-full' src="./images/home_banner2.jpg" alt="" />
            <div className="absolute top-2.5 right-2.5 z-10 text-right">
              <h3 className='text-[0.9375em] leading-[1] font-semibold tracking-[0.01em] text-[#ff7272] my-[5px] '>FLASH SALE</h3>
              <h3 className='text-[0.9375em] leading-[1.2] font-semibold tracking-[0.01em] text-[#a2a2a2] my-[5px] color-gray'>TOP BRANDS</h3>
              <h3 className='text-[0.9375em] leading-[1.2] font-semibold tracking-[0.01em] text-[#a2a2a2] my-[5px] color-gray'>SUMMER SUNGLASSES</h3>
              <h4 className='text-[1.5em] leading-[1] font-bold -tracking-[0.02em] text-white my-[5px] color-white'>STARTING AT <sup className='text-[0.6em] -top-[0.5em] relative align-baseline'>$</sup> 199<sup className='text-[0.6em] -top-[0.5em] relative align-baseline'>99</sup></h4>
              <button className="bg-white text-black border-none outline-none px-5 py-[5px] font-extrabold cursor-pointer ">
                VIEW SALE
              </button>
            </div>
          </div>
          <div className="relative -z-10 lg:basis-1/4 md:basis-1/2 w-[318px] h-[200px]">
            <img className='object-cover h-full' src="./images/home_banner3.jpg" alt="" />
            <div className="absolute top-[8%] left-2.5 z-10 text-left">
              <div className='text-[1.875em] leading-[1] font-normal tracking-[0.005em] text-black whitespace-nowrap font-segoe text-left'>Exclusive Shoes</div>
              <h3 className='text-[1.75em] leading-[1] font-extrabold my-2'>50% OFF</h3>
              <button className="bg-black text-white border-none outline-none px-5 py-[5px] font-extrabold my-[10px]">
                GET YOUR!
              </button>
            </div>
          </div>
          <div className="relative -z-10 lg:basis-1/4 md:basis-1/2 w-[318px] h-[200px] border-[10px] border-solid border-[#ff7272]">
            <img className='object-cover h-full ' src="./images/home_banner4.jpg" alt="" />
            <div className="absolute top-20 gap-2 flex items-center px-1">
              <div>
                <div className="text-[1.5em]  leading-[1] font-extrabold">DEAL PROMOS</div>
                <h4 className="text-[0.9375em] text-gray-500">STARTING AT $99</h4>
              </div>
              <div>
                <button className="bg-black border-solid border-2 text-white font-bold px-5 py-[5px] z-10">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      {/* END PROGRAMS SALE */}

      {/* WOMEN COLLECTION */}
      <div className="flex h-full w-full">
        <div className=" flex justify-center items-center basis-1/2 ">
            <div className=" px-10 py-5 ">
              <div className='relative group'>
                <img className='w-full h-full' src="./images/product2.jpeg" alt="" />   
                <button className="absolute top-1 right-1 
                  rounded-full bg-white w-8 h-8 outline-none border-none hover:bg-[#ff7272] hover:text-white 
                  m-2 hidden group-hover:block
                  transition-all delay-100 duration-[0.25em]">
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
                    group-hover:py-2 cursor-pointer">
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
            <div className="px-5 py-10">
              <div className='relative group'>
                  <img className='w-full h-full'  src="./images/product3.jpeg" alt="" />   
                  <button className="absolute top-1 right-1 
                  rounded-full bg-white w-8 h-8 outline-none border-none hover:bg-[#ff7272] hover:text-white 
                  m-2 hidden group-hover:block
                  ">
                      <FontAwesomeIcon  icon={faShoppingBag} />
                  </button>
                  <div className="bg-[#ff7272]
                    text-white absolute 
                    bottom-0  left-0  right-0 
                    text-center group 
                    opacity-90
                    w-full h-auto indent-0
                    transition-all duration-[0.25em]  ease-in 
                    invisible group-hover:visible group-hover:delay-100
                    group-hover:py-2 cursor-pointer
                    ">
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
        </div>        
        <div className="relative basis-1/2">
          <img className='object-cover w-full h-full' src="./images/women.jpg" alt="" />
          <div className='absolute top-1/4 left-[10%] text-left'>
            <h3 className="text-[#222529] font-bold mb-4 text-5xl leading-[60px] -tracking-[0.5px]">WOMEN'S <div>COLLECTION</div></h3>
            <div className="text-[#777777] mb-6">Check out this week's hottest style</div>
            <button className='bg-transparent border-2 border-solid border-black text-black font-bold px-5 py-[5px] z-10 hover:bg-black hover:text-white '>
              SHOP NOW
            </button>
          </div>
        </div>  
      </div>
      {/* END WOMEN COLLECTION */}

      {/* MEN COLLECTION */}
      <div className="flex h-full w-full">
          <div className="relative basis-1/2 ">
            <img className='object-cover w-full h-full' src="./images/men.jpg" alt="" />
            <div className='absolute top-1/4 right-[10%] text-right'>
              <h3 className="text-[#222529] font-bold mb-4 text-5xl leading-[60px] -tracking-[0.5px]">MEN'S <div>COLLECTION</div></h3>
              <div className="text-[#777777] mb-6">Check out this week's hottest style</div>
              <button className='bg-transparent border-2 border-solid border-black text-black font-bold px-5 py-[5px] z-10 hover:bg-black hover:text-white '>
                SHOP NOW
              </button>
            </div>
          </div> 
          <div className="basis-1/2 flex justify-center items-center ">
              <div className="px-5 py-10 ">
                <div className='relative group'>
                  <img className='w-full h-full' src="./images/product_men1.jpeg" alt="" />   
                  <button className="absolute top-1 right-1 
                    rounded-full bg-white w-8 h-8 outline-none border-none hover:bg-[#ff7272] hover:text-white 
                    m-2 hidden group-hover:block
                    transition-all delay-100 duration-[0.25em]">
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
                      group-hover:py-2 cursor-pointer">
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
              <div className="px-5 py-10">
                <div className='relative group'>
                    <img className='w-full h-full'  src="./images/product_men2.jpeg" alt="" />   
                    <button className="absolute top-1 right-1 
                    rounded-full bg-white w-8 h-8 outline-none border-none hover:bg-[#ff7272] hover:text-white 
                    m-2 hidden group-hover:block
                    ">
                        <FontAwesomeIcon  icon={faShoppingBag} />
                    </button>
                    <div className="bg-[#ff7272]
                     text-white absolute 
                      bottom-0  left-0  right-0 
                      text-center group 
                      opacity-90
                      w-full h-auto indent-0
                      transition-all duration-[0.25em]  ease-in 
                      invisible group-hover:visible group-hover:delay-100
                      group-hover:py-2 cursor-pointer
                      ">
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
          </div>
      </div>
      {/* END MEN COLLECTION */}

      {/* SERVICE */}
      <div className="flex w-full">
        <div className="item">
          <div className="bg-[#222529] text-white rounded-full w-20 h-20 flex justify-center items-center">
            <FontAwesomeIcon icon={faHeadset} size='2x' beatFade ></FontAwesomeIcon>
          </div>
        </div>
        <div className="item">
          <div className="bg-[#222529] text-white rounded-full w-20 h-20 flex justify-center items-center">
            <FontAwesomeIcon icon={faCreditCard} size='2x' bounce ></FontAwesomeIcon>
          </div>
        </div>
        <div className="item">
          <div className="bg-[#222529] text-white rounded-full w-20 h-20 flex justify-center items-center">
            <FontAwesomeIcon icon={faShare} flip={'horizontal'} size='2x' spin={true} ></FontAwesomeIcon>
          </div>
        </div>
        <div className="item">
          <div className="bg-[#222529] text-white rounded-full w-20 h-20 flex justify-center items-center">
            <FontAwesomeIcon icon={faTruckFast} size='2x'></FontAwesomeIcon>
          </div>
        </div>
      </div>
      {/* END SERVICE */}
      </>
  )
}
