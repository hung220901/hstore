import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Scrollbar, A11y} from 'swiper';
import 'swiper/css'; 
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar} from '@fortawesome/free-regular-svg-icons';
import { faShoppingBag} from '@fortawesome/free-solid-svg-icons';  
import * as productServices from '../../services/productServices'
import { useDispatch, useSelector } from 'react-redux';
import {addToCart} from '../../redux/cartSlice'
import { getProductsFailure, getProductsStart, getProductsSuccess } from '../../redux/productSlice';
import QuickView from '../QuickViewProduct/QuickView';
export default function ListProduct() {
    const [showQuickView, setShowQuickView] = useState(false)  
    const [slugQV, setSlugQV] = useState('')  
    const product = useSelector(state =>state.products.products) 
    const dispatch = useDispatch()

    const handleAddToCart = (e,prod) =>{
      e.preventDefault()
      dispatch(addToCart(prod))
    }



    const handleShow =(e, slug) =>{  
      e.preventDefault()  
      setShowQuickView(!showQuickView)
      setSlugQV(slug)
    } 
 
// Call API 
  useEffect(()=>{
    const fetchApi = async ()=>{
      try {
        dispatch(getProductsStart())
        const result = await productServices.getAllProduct();   
        dispatch(getProductsSuccess(result)) 
      } catch (error) { 
        dispatch(getProductsFailure(error))
      } 
    }
    fetchApi()
  },[dispatch])

  useEffect(()=>{
    const fetchOneProductApi = async (slug)=>{
      try {
        dispatch(getProductsStart())
        const result = await productServices.getProductBySlug();   
        dispatch(getProductsSuccess(result)) 
      } catch (error) { 
        dispatch(getProductsFailure(error))
      } 
    } 
  },[dispatch])
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
            {product.length > 0 && product?.map((prod,index)=>(
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
                        "
                        onClick={(e) => handleAddToCart(e,prod)}
                        >
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
                          onClick={(e)=>handleShow(e, prod.slug)}
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
      </Swiper> 
       {/* TOAST QUICK VIEW */}
        {showQuickView && <QuickView slug={slugQV} show={showQuickView} setShow={setShowQuickView}/>} 
    </> 
  )
}
