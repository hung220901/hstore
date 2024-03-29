import React, { useState } from 'react'
import SwiperCore, { FreeMode, Navigation, Thumbs, Zoom } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react' 
import { faHeart as regularHeart, faStar} from '@fortawesome/free-regular-svg-icons';
import { faShoppingBag, faHeart as solidHeart,faEnvelope} from '@fortawesome/free-solid-svg-icons';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebookF, faGooglePlus, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import ReactImageMagnify from '@blacklab/react-image-magnify'; 
import styles from './gallery.module.css'  
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useDispatch, useSelector } from 'react-redux'
import {addToWishList, removeItemFromWishlist} from '../../redux/wishlistSlice'
import { toast } from 'react-toastify'; 
import { addToCart } from '../../redux/cartSlice';
export default function ThumbsGallery({product}) { 
  const wishlist = useSelector(state => state.wishlist.items) 
  const [thumbsSwiper, setThumbsSwiper] = useState(null);  
  SwiperCore.use([Zoom])  
  const dispatch = useDispatch() 
  const [quantity, setQuantity] = useState(1)


  
  const handleAddToCart = (prod)=>{
    dispatch(addToCart({...prod,quantity})) 
  }



  const handleOnChangeInput = (e)=>{
    const newQuantity = parseInt(e.target.value) 
    if(newQuantity >= 1){ 
        setQuantity(newQuantity)
    }
    else{ 
        setQuantity(1)
    }   
  }


  const handleIncrease = () =>{ 
    setQuantity(quantity+1)
  }
  const handleDecrease = () =>{  
    if(quantity > 1){
      setQuantity(quantity-1)
    }else{
      setQuantity(1)
    }
  } 
  const handleToggleWishlist = (prod)=>{
    const existedProduct = wishlist.find(item => item._id === prod._id) 
    if(existedProduct){
      toast.success('Remove from wishlist successfully!')
      dispatch(removeItemFromWishlist(prod._id))
    }
    else{
      toast.success('Add to wishlist successfully!')
      dispatch(addToWishList({name:prod.name,image:prod.image,price:prod.price,_id:prod._id }))
    }
  }
 
  return (
    <div className='flex flex-wrap md:flex-nowrap'>
      <div className='flex flex-col w-full mr-10 md:w-[50%]'>
        <Swiper 
          style={{
            "--swiper-navigation-color": "#000",
            "--swiper-pagination-color": "#000",
            width:'100%',
            height:'auto',
            maxHeight:'450px',
            maxWidth:'420px'
          }}
          spaceBetween={10}
          navigation={true} 
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[FreeMode, Navigation, Thumbs]}
          zoom={{maxRatio:2, minRatio:1 }}
          className={styles.mySwiper2}
          centeredSlides={true}
        >
          {product?.thumbnail?.map((prod,i)=>(        
              <SwiperSlide  key={i} className="swiper-slide-1" >
                <ReactImageMagnify
                  imageProps={{
                    alt: 'example small image',
                    src: prod.url||prod.image.url, 
                    // width: "100%",
                    // height: "25vh",
                    
                  
                  }}
                  magnifiedImageProps={{
                    width: 300*4,
                    height: 200*4,
                    src: prod.url||prod.image.url,
                  }}
                  // magnifyContainerProps={{
                  //   width: 400, 
                  //   height: 400, 
                  //   scale:2
                  // }}
                  onActivationChanged={function noRefCheck(){}}
                  onDetectedEnvironmentChanged={function noRefCheck(){}}
                  onPositionChanged={function noRefCheck(){}}
                  portalProps={{
                    horizontalOffset: 20,     
                    verticalOffset:10,
                    id : "portal-test-id"
                  }} 
                  
                > 
                  <img className='w-full h-full ' src={prod.url||product.image.url} alt=''/> 
                </ReactImageMagnify>
              </SwiperSlide>
          ))}        
        </Swiper>  
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          style={{width:'100%',height:"200px"}}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]} 
          className={styles.mySwiper3}
        >
          {product?.thumbnail?.map((prod,i)=>(        
              <SwiperSlide key={i}>
              <div className="swiper-zoom-container p-2  w-[150px] h-[150px]"> 
                  <img className='w-full h-full object-cover' src={prod.url||product.image.url} alt=''/>
              </div>
              </SwiperSlide>
          ))}         
        </Swiper> 
      </div>
      <div className="flex flex-col w-[100%] md:w-[50%] items-start">  
          <div id="portal-test-id"></div>
          <h3 className='text-[#222529] inline text-3xl font-bold -tracking-[0.3px] leading-9 uppercase'>{product.name}</h3>
          <div className="inline-block text-[#999999] text-[13px] leading-6 my-5">
            <div className='inline mr-2'>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <span>Be the first to review this product</span>
          </div>
          <div className="text-[#222529] text-[24px] font-semibold -tracking-[0.48px] leading-6 mb-5">
            ${product.price}
          </div>
          <div className="text-[#777777] text-base -tracking-[0.24px] leading-[27px] mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque corporis beatae praesentium consequatur provident ducimus, commodi inventore adipisci harum a, autem dolore voluptatem sed iusto placeat aspernatur distinctio? Recusandae, cupiditate!
          </div>
          <div className="inline-block uppercase text-[#777777] text-xs my-5">
            <span>availability:</span>
            <span className='font-bold text-[#222529]'> in stock</span>
          </div>
          <div className="inline-block uppercase text-[#777777] text-xs mb-5">
            <span>SKU:</span>
            <span className='font-bold text-[#222529]'> {product.sku}</span>
          </div> 
          <div className="border-solid border-[#e7e7e7] border-t-[1px] border-b-[1px] py-5 w-full">
            <div className="flex items-center justify-start">
              <button className='h-10 w-12 border-solid border-[#e7e7e7] border-[1px] hover:text-[#666666]' onClick={ handleDecrease}>-</button>
              <input value={quantity} className='border-solid border-[#e7e7e7] border-[1px] outline-none h-10 w-12 text-center' type="number" onChange={e =>handleOnChangeInput(e,product._id)} min="1"  />
              <button className='h-10 w-12 border-solid border-[#e7e7e7] border-[1px] hover:text-[#666666]' onClick={handleIncrease}>+</button>
              <button className="bg-[#222529] text-white h-10 mx-2 px-[2em] uppercase text-[1em] font-bold leading-[3rem] flex items-center gap-2 hover:bg-white hover:text-[#222529] hover:border-[#222529] border-2 hover:border-solid"
               onClick={()=>handleAddToCart(product)}
              >
                <FontAwesomeIcon icon={faShoppingBag} />
                add to cart
              </button>
              <button className='h-10 w-12 border-solid border-[#e7e7e7] border-[1px] hover:text-[#666666]' onClick={()=>handleToggleWishlist(product)}>
                <FontAwesomeIcon icon={wishlist.find(item=>item._id === product._id) ? solidHeart:regularHeart} color={wishlist.find(item=>item._id === product._id) ? 'red':'black'} />
              </button>
            </div>
          </div>
          <div className="flex gap-2 my-2">
            <div className="rounded-full border-solid border-[#e7e7e7] border-[1px] w-8 h-8 flex items-center justify-center hover:bg-[#3b5a9a] hover:text-white text-[13px] leading-6 transition-all">
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div className="rounded-full border-solid border-[#e7e7e7] border-[1px] w-8 h-8 flex items-center justify-center hover:bg-[#0088cc] hover:text-white text-[13px] leading-6 transition-all">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className="rounded-full border-solid border-[#e7e7e7] border-[1px] w-8 h-8 flex items-center justify-center hover:bg-[#0073b2] hover:text-white text-[13px] leading-6 transition-all">
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <div className="rounded-full border-solid border-[#e7e7e7] border-[1px] w-8 h-8 flex items-center justify-center hover:bg-[#dd4b39] hover:text-white text-[13px] leading-6 transition-all">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="rounded-full border-solid border-[#e7e7e7] border-[1px] w-8 h-8 flex items-center justify-center hover:bg-[#dd4b39] hover:text-white text-[13px] leading-6 transition-all">
              <FontAwesomeIcon icon={faGooglePlus} />
            </div>
          </div>
      </div>
    </div>
  )
}
