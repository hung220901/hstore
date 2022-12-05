import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Scrollbar, A11y , Autoplay} from 'swiper';
import 'swiper/css'; 
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './home.css'

  export default function index() { 
    SwiperCore.use([Autoplay])
    return (
      <>
        <Swiper
              slidesPerView={1} 
              speed={1000}
              // autoplay={{ delay: 1000 }}
              modules={[  Pagination, Scrollbar, A11y]} 
              pagination={{ clickable: true }}
              loop={true}
            >
              <SwiperSlide>
                <img className='banner__image' src="./images/home_slide1.jpg" alt="" />
                <div className='banner__content'>
                  <div className='collection-title'>Summer Fashion Trends</div>
                  <h1 className='title-size-xl'>BIG SALE UP TO</h1>
                  <h2 class='title-size-xxl'>80% <small>OFF</small></h2>         
                  <div className="sale-price-collection">
                    <h5 className='sale-price'>STARTING AT </h5>    
                    <h5 className='price-tag'><b>$199</b>  99</h5>
                  </div>
                  <div className='collection-action'>
                    <button className="btn-shopnow">
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/home_slide1.jpg" alt="" />
                <div className='banner__content banner__content-table'>
                  <div className="table-row">
                    <div className='collection-title color-black'>Summer Trends</div>
                    <h1 className='title-size-xxl'>SALE</h1>
                  </div>
                  <div className="table-row">
                    <h3 className='title-size-sm'>PRICE UP TO</h3>
                    <h2 className='title-size-xxl'>80% <small>OFF</small></h2> 
                    <div className='collection-action'>
                      <button className="btn-shopnow">
                        SHOP NOW
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide> 
        </Swiper>
        <div className='sale-programs'>
          <div className="programs-item">
            <img src="./images/home_banner1.jpg" alt="" />
            <div className="programs-item-content">
              <h3 className='text-size-md'>TRENDING</h3>
              <h3 className='text-size-md'>Hat Sales</h3>
              <h4 className='text-size-sm'>STARTING AT $99</h4>
              <button className="btn-buynow">
                BUY NOW!
              </button>
            </div>
          </div>
          <div className="programs-item">
            <img src="./images/home_banner2.jpg" alt="" />
            <div className="programs-item-content ">
              <h3 className='text-size-sm '>FLASH SALE</h3>
              <h3 className='text-size-sm color-gray'>TOP BRANDS</h3>
              <h3 className='text-size-sm color-gray'>SUMMER SUNGLASSES</h3>
              <h4 className='text-size-sm color-white'>STARTING AT <b>$199</b>  99</h4>
              <button className="btn-viewsale">
                VIEW SALE
              </button>
            </div>
          </div>
          <div className="programs-item">
            <img src="./images/home_banner3.jpg" alt="" />
            <div className="programs-item-content content-left">
              <div className='collection-title color-black collection-title-small'>Exclusive Shoes</div>
              <h3 className='text-size-md'>50% OFF</h3>
              <button className="btn-getyour">
                GET YOUR!
              </button>
            </div>

          </div>
          <div className="programs-item">
            <img src="./images/home_banner4.jpg" alt="" />
            <div className="programs-item-content d-flex">
              <div className="programs-item-row">
                <div className="text-size-md">DEAL</div>
                <div className="text-size-md">PROMOS</div>
                <h4 className="text-size-sm color-gray">STARTING AT $99</h4>
              </div>
              <div className="programs-item-row">
                <button className="btn-shopnow-bg-black">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="women-collection">
          <div className="product-collection-list">
              <div className="product-card">
                  <img src="" alt="" />  
                    <div className="item-left">
                      <div className="product-name">
                        Girl Black
                      </div>
                      <div className="product-rate"></div>
                      <div className="product-price">$49.00</div>
                    </div>
                    <div className="add-to-wishlist">
      
                    </div>
              </div>  
              <div className="product-card">
                  <img src="" alt="" />  
                    <div className="item-left">
                      <div className="product-name">
                        Girl Black
                      </div>
                      <div className="product-rate"></div>
                      <div className="product-price">$49.00</div>
                    </div>
                    <div className="add-to-wishlist">

                    </div>
              </div>  
          </div>
          <div className="content-collection">
            <div className="collection__title">WOMEN'S <div>COLLECTION</div></div>
            <div className="collection-description">Check out this week's hottest style</div>
            <button className='btn-shopnow'>
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="text-center">Heeelllpo</div>
      </>
  )
}
