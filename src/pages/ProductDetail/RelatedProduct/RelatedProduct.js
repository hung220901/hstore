import React, { useEffect, useMemo, useState } from 'react' 
import { Swiper, SwiperSlide } from 'swiper/react';
import  { Pagination, Scrollbar, A11y } from 'swiper';
import { faHeart, faStar } from '@fortawesome/free-regular-svg-icons'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './related-product.scss'
import { useSelector } from 'react-redux';
export default function RelatedProduct({product}) {
  const products = useSelector(state => state.products.products)      
  const relatedProd = useMemo(() => {
    return products.filter(prod => prod.gender === product.gender && prod.slug !== product.slug) 
  }, [product, products])


  return (
    <>
      <div className='flex justify-between items-center border-solid border-[#777777] border-b-[1px]'>
        <h3 className=' py-2 text-[#313131]'>WE FOUND OTHER PRODUCTS YOU MIGHT LIKE!</h3>
        <div className='swiper-pagination-relatedProduct !w-auto'></div>
      </div>
      <Swiper
        slidesPerView={5} 
        speed={1000} 
        modules={[ Scrollbar, A11y, Pagination]}  
        pagination={{ 
          clickable: true,
          el:'.swiper-pagination-relatedProduct'
        }} 
        loop={true}
        className="related-product"
      > 
      { relatedProd && relatedProd.map((prod,i)=>(

        <SwiperSlide key={i}>
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
                  group-hover:py-2 cursor-pointer">
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
                  <div className="product-price">${prod.price}</div>
                </div>
                <div className="add-to-wishlist">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
            </div> 
          </div>  
        </SwiperSlide>  
      ))}
 
      </Swiper>
    </>
  )
}
