import React, {  useMemo } from 'react'  
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Scrollbar, A11y} from 'swiper';
import styles from './relatedProduct.module.css'  
import { useDispatch, useSelector } from 'react-redux';
import * as ReactDOMServer from "react-dom/server";
import { toast } from 'react-toastify';
import {getAllWishListItem, saveWishlist} from '../../../redux/wishlistSlice'
import {addToWishList,removeItemFromWishlist} from '../../../redux/wishlistSlice'
import { Link } from 'react-router-dom';
import ProductCard from '../../../components/Product/ProductCard';
SwiperCore.use([Pagination, A11y, Scrollbar]);
export default function RelatedProduct({product}) { 
  const products = useSelector(state => state.products.products)      
  const wishlist = useSelector(state=>state.wishlist.items)
  const user = useSelector(state =>state.auth.users) 
  const dispatch = useDispatch()
  const relatedProd = useMemo(() => {
    return products.filter(prod => prod.gender === product.gender) 
    //  && prod.slug !== product.slug
  }, [product, products])  
  const example = [
    {
      image:{
        url:'https://source.unsplash.com/random/'
      },
      name:'hi',
      price:'500'
    },
    {
      image:{
        url:'https://source.unsplash.com/random/'
      },
      name:'hi',
      price:'500'
    },
    {
      image:{
        url:'https://source.unsplash.com/random/'
      },
      name:'hi',
      price:'500'
    }
  ]
  const isFavorite = (productId) => {
    return wishlist.find(product => product._id === productId) !== undefined;
  }; 
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
      <div className='flex justify-between items-center border-solid border-[#777777] border-b-[1px]'>
        <h3 className='flex-[10] py-2 text-[#313131] '>WE FOUND OTHER PRODUCTS YOU MIGHT LIKE!</h3>
        <div className={styles.swiperRelatedProductPagination}></div>
      </div>
      <Swiper
        slidesPerView={4} 
        observeParents={true}
        observer={true}
        speed={1000} 
        modules={[  Pagination, Scrollbar, A11y]} 
        pagination={{  
          clickable: true , 
          el: `.${styles.swiperRelatedProductPagination}`,
          renderBullet: function (index, className) {
            return ReactDOMServer.renderToStaticMarkup(<span className={className}></span>);
          },
        }}
        loop={true}
        className={styles.paginationRTP}
      > 
      { relatedProd && relatedProd.map((prod,i)=>( 
        <SwiperSlide key={i}>
          <Link to={`/product-detail/${prod.slug}`}> 
            <ProductCard product={prod} onAddWishlist={handleToggleFavorite} favorite={isFavorite(prod._id)} />
          </Link>
        </SwiperSlide>  
      ))} 
      </Swiper>
    </>
  )
}
