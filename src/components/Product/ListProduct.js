import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Scrollbar, A11y} from 'swiper';
import 'swiper/css'; 
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';  
import * as productServices from '../../services/productServices'
import * as requestWishlist from '../../services/userServices' 
import { useDispatch, useSelector } from 'react-redux';
import {addToCart} from '../../redux/cartSlice'
import { getProductsFailure, getProductsStart, getProductsSuccess } from '../../redux/productSlice'; 
import * as req from '../../services/userServices'
import {getAllWishListItem, saveWishlist} from '../../redux/wishlistSlice'
import {addToWishList,removeItemFromWishlist} from '../../redux/wishlistSlice'
import { toast} from 'react-toastify'
import ProductCard from './ProductCard'; 
export default function ListProduct() {
    const [showQuickView, setShowQuickView] = useState(false)  
    const [slugQV, setSlugQV] = useState('')  
    const product = useSelector(state =>state.products.products) 
    const wishlist = useSelector(state=>state.wishlist.items)
    const user = useSelector(state =>state.auth.users) 
    const dispatch = useDispatch()  
    const navigate = useNavigate()



    const isFavorite = (productId) => {
      return wishlist.find(product => product._id === productId) !== undefined;
    }; 

    const handleAddToCart = (e,prod) =>{
      e.preventDefault()
      if(!user){
        navigate('/login')
        toast.warning('Please login to use cart!')
      }
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
    product?.length ===0&& fetchApi()
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

  useEffect(()=>{
    if(user?.email){
      const getAllUserWishlist = async()=>{
         const res = await req.getAllUserWishlist(user?.email) 
         res && dispatch(getAllWishListItem(res?.wishlist)) 
      } 
      wishlist?.length !== 0 && getAllUserWishlist()
    }
  },[user?.email]) 
  const handleToggleFavorite = async(e,prod) =>{
    try {
      e.stopPropagation()
      e.preventDefault() 

      if(!user){
        console.log('chua dang nhap');
      }
      else{
        const existedProduct = wishlist.find(item => item._id === prod._id) 
        if(existedProduct){
          toast.success('Remove product from wishlist successfully!')
          dispatch(removeItemFromWishlist(prod._id))
        }
        else{
          toast.success('Add product to wishlist successfully!')
          dispatch(addToWishList({...prod }))
        }   
        dispatch(saveWishlist(user.email)) 
      } 
    } catch (error) {
      console.log(error);
    }
  }
   
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
              slidesPerView: 1, 
            }, 
            450:{
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
          {product && product.length > 0 && product?.map((prod,index)=>(
            <SwiperSlide key={index}  >
              <Link to={`/product-detail/${prod.slug}`}> 
                <ProductCard product={prod} onAddWishlist={handleToggleFavorite} favorite={isFavorite(prod._id)} />
              </Link>
            </SwiperSlide>               
          )) 
          } 
      </Swiper> 
 
    </> 
  )
}
