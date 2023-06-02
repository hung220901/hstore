import React  from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import ListProduct from '../../components/Product/ListProduct';
import SwiperCore, { Pagination, Scrollbar, A11y , Autoplay} from 'swiper';
import 'swiper/css'; 
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './home.scss' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import {  faHeadset, faCreditCard,faShare, faTruckFast} from '@fortawesome/free-solid-svg-icons';  
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../components/Product/ProductCard';
import { toast } from 'react-toastify';
import { saveWishlist , addToWishList, removeItemFromWishlist} from '../../redux/wishlistSlice';
  export default function Home() {  
    SwiperCore.use([Autoplay]) 
    const user = useSelector(state =>state.auth.users) 
    const wishlist = useSelector(state=>state.wishlist.items)
    const product = useSelector(state => state.products.products)
    const dispatch = useDispatch()

    const productMale = product && product.length >0 && product.filter(prod=>prod.gender === true).slice(0,2)
    const productFemale = product && product.length >0 && product.filter(prod=>prod.gender === false).slice(0,2) 

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
      {/* BANNER SLIDER */}
        <Swiper
              slidesPerView={1} 
              speed={1000} 
              modules={[  Pagination, Scrollbar, A11y]} 
              pagination={{ clickable: true }}
              loop={true}
              className="banner-slider "
            >
              <SwiperSlide>  
                <div className='relative w-full bg-[#f4f4f4] min-h-[80vh] md:min-h-0 '>
                  <div className='hidden md:block'>
                    <img src="https://www.portotheme.com/magento2/porto/pub/media/wysiwyg/smartwave/porto/homepage/06/shop6_home_slide1.jpg" alt="" /> 
                  </div>
                </div>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-20 text-[10px] lg:text-[0.875rem] xl:text-[1rem] '>
                  <div className='text-[2.375em] leading-[1] text-center font-normal tracking-wider text-red-500 whitespace-nowrap font-segoe'>Summer Fashion Trends</div>
                  <h1 className='text-[4.1875em] leading-[1] text-center'>BIG SALE UP TO</h1>
                  <h2 className='text-[10.625em] leading-[1] text-center whitespace-nowrap'>80% <small className='inline-block text-[27%] break-all w-[1em] text-center font-black whitespace-normal'>OFF</small></h2>         
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
                <div className='relative w-full bg-[#facece] min-h-[80vh] md:min-h-0 '>
                  <div className='hidden md:block'>
                    <img src="https://res.cloudinary.com/dibmfkpyq/image/upload/v1676669092/home_slide2_qxksvx.jpg" alt="" /> 
                  </div>
                </div>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-20 flex bg-[rgba(255,255,255,0.5)] text-[9px] md:text-[11px] lg:text-[1rem]'>
                  <div className="py-[10px] px-5">
                    <div className='text-[2.375em] leading-[1] text-center font-normal tracking-wider text-black whitespace-nowrap font-segoe'>Summer Trends</div>
                    <h1 className='text-[8.75em] leading-[1] text-center whitespace-nowrap'>SALE</h1>
                  </div>
                  <div className="px-5 py-[10px]">
                    <h3 className="tracking-[.18em] font-light text-[1.25em]">PRICE UP TO</h3>
                    <h2 className='text-[9.375em] leading-[1] text-center whitespace-nowrap'>80% <small className='inline-block text-[27%] break-all w-[1em] text-center font-black whitespace-normal'>OFF</small></h2> 
                    <div className='mt-5 text-center'>
                      <button className="text-[1.125em] bg-transparent border-solid border-black border-2 font-bold px-5 py-[5px] z-10">
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
          <div className="relative basis-full lg:basis-1/4 md:basis-1/2 -z-10 w-[318px] h-[200px]">
            <img className='object-cover w-full h-full' src="https://res.cloudinary.com/dibmfkpyq/image/upload/v1682243263/home_banner1_jz8zkt.jpg" alt="" />
            <div className="absolute top-2.5 right-2.5 z-10 text-right">
              <h3 className='text-[1.75em] leading-[1] font-extrabold'>TRENDING</h3>
              <h3 className='text-[1.75em] leading-[1] font-extrabold'>Hat Sales</h3>
              <h4 className='text-[0.9375em] leading-[1] font-semibold tracking-[0.01em] text-[#ff7272] my-2'>STARTING AT $99</h4>
              <button className="bg-black text-white border-none outline-none px-5 py-[5px] font-black cursor-pointer ">
                BUY NOW!
              </button>
            </div>
          </div>
          <div className="relative basis-full lg:basis-1/4 md:basis-1/2 -z-10 w-[318px] h-[200px]">
            <img className='object-cover w-full h-full' src="https://res.cloudinary.com/dibmfkpyq/image/upload/v1682243261/home_banner2_bvmpbv.jpg" alt="" />
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
          <div className="relative basis-full lg:basis-1/4 md:basis-1/2 -z-10 w-[318px] h-[200px]">
            <img className='object-cover w-full h-full' src="https://res.cloudinary.com/dibmfkpyq/image/upload/v1682243261/home_banner3_vmylbw.jpg" alt="" />
            <div className="absolute top-[8%] left-2.5 z-10 text-left">
              <div className='text-[1.875em] leading-[1] font-normal tracking-[0.005em] text-black whitespace-nowrap font-segoe text-left'>Exclusive Shoes</div>
              <h3 className='text-[1.75em] leading-[1] font-extrabold my-2'>50% OFF</h3>
              <button className="bg-black text-white border-none outline-none px-5 py-[5px] font-extrabold my-[10px]">
                GET YOUR!
              </button>
            </div>
          </div>
          <div className="relative basis-full lg:basis-1/4 md:basis-1/2 -z-10 w-[318px] h-[200px] border-solid border-[#ff7272]">
            <img className='object-cover w-full h-full' src="https://res.cloudinary.com/dibmfkpyq/image/upload/v1682243262/home_banner4_s6nmww.jpg" alt="" />
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
      <div className="flex flex-wrap h-full w-full">
        <div className=" flex justify-center items-center md:basis-1/2 "> 
            {productFemale?.length > 0 &&  productFemale.map((prod, index)=>(
                <ProductCard key={index} product={prod}  onAddWishlist={handleToggleFavorite} favorite={isFavorite(prod._id)} />
            ))
            }
        </div>        
        <div className="relative md:basis-1/2">
          <img className='object-cover w-full h-full' src="https://res.cloudinary.com/dibmfkpyq/image/upload/v1682243373/women_go8pr9.jpg" alt="" />
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
      <div className="flex flex-wrap h-full w-full">
          <div className="relative md:basis-1/2 ">
            <img className='object-cover w-full h-full' src="https://res.cloudinary.com/dibmfkpyq/image/upload/v1682243374/men_hz7tup.jpg" alt="" />
            <div className='absolute top-1/4 right-[10%] text-right'>
              <h3 className="text-[#222529] font-bold mb-4 text-5xl leading-[60px] -tracking-[0.5px]">MEN'S <div>COLLECTION</div></h3>
              <div className="text-[#777777] mb-6">Check out this week's hottest style</div>
              <button className='bg-transparent border-2 border-solid border-black text-black font-bold px-5 py-[5px] z-10 hover:bg-black hover:text-white '>
                SHOP NOW
              </button>
            </div>
          </div> 
          <div className="md:basis-1/2 flex justify-center items-center ">
            { productMale?.length > 0 && productMale.map((prod, index)=>(
                <ProductCard key={index} product={prod} onAddWishlist={handleToggleFavorite} favorite={isFavorite(prod._id)} />
              ))
            }
          </div>
      </div>
      {/* END MEN COLLECTION */}

    <div className="px-[50px]">
      {/* SERVICE */}
      <div className="flex flex-wrap items-start w-full text-[#777777] justify-around text-xs leading-6 my-20">
        <div className="flex justify-center items-center flex-col sm:basis-1/2 lg:basis-1/4 px-[10px]">
          <div className="bg-[#222529] text-white rounded-full w-20 h-20 flex justify-center items-center mb-2">
            <FontAwesomeIcon icon={faHeadset} size='2x'></FontAwesomeIcon>
          </div>
          <h3 className="font-bold uppercase text-[#222529] text-center text-xl">
            customer support
          </h3>
          <p className='text-sm pb-4 text-[#555555]'>Need Assistance?</p>
          <div className='text-inherit text-center text-[13px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.
          </div>
        </div>
        <div className="flex justify-center items-center flex-col sm:basis-1/2 lg:basis-1/4 px-[10px]">
          <div className="bg-[#222529] text-white rounded-full w-20 h-20 flex justify-center items-center mb-2">
            <FontAwesomeIcon icon={faCreditCard} size='2x'  ></FontAwesomeIcon>
          </div>
          <h3 className="font-bold uppercase text-[#222529] text-center text-xl">
            secured payment
          </h3>
          <p className='text-sm pb-4 text-[#555555]'>Safe & Fast</p>
          <div className='text-inherit text-center text-[13px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapibus lacus. Lorem ipsum dolor sit amet.
          </div>
        </div>
        <div className="flex justify-center items-center flex-col sm:basis-1/2 lg:basis-1/4 px-[10px]">
          <div className="bg-[#222529] text-white rounded-full w-20 h-20 flex justify-center items-center mb-2">
            <FontAwesomeIcon icon={faShare}   size='2x' ></FontAwesomeIcon>
          </div>
          <h3 className="font-bold uppercase text-[#222529] text-center text-xl">
            free returns
          </h3>
          <p className='text-sm pb-4 text-[#555555]'>Easy & Free</p>
          <div className='text-inherit text-center text-[13px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.
          </div>
        </div>
        <div className="flex justify-center items-center flex-col sm:basis-1/2 lg:basis-1/4 px-[10px]">
          <div className="bg-[#222529] text-white rounded-full w-20 h-20 flex justify-center items-center mb-2">
            <FontAwesomeIcon icon={faTruckFast} size='2x'  ></FontAwesomeIcon>
          </div>
          <h3 className="font-bold uppercase text-[#222529] text-center text-xl">
            free shipping
          </h3>
          <p className='text-sm pb-4 text-[#555555]'>Order Over $99</p>
          <div className='text-inherit text-center text-[13px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.
          </div>
        </div>
      </div>
      {/* END SERVICE */}
      <hr className="text-[#777777] bg-[#e7e7e7] text-sm leading-6" />
      {/* FEATURE PRODUCT */} 
      <ListProduct/>
    </div>
   
    </>
  )
}
