import React from 'react'
import './home.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css'; 
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

  export default function index() { 
    return (
    <Swiper
          spaceBetween={50}
          slidesPerView={1} 
          modules={[ Pagination, Scrollbar, A11y]} 
          pagination={{ clickable: true }}
          loop={true}
        >
          <SwiperSlide>
            <img src="./images/home_slide1.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
          <img src="./images/home_slide1.jpg" alt="" />
          </SwiperSlide> 
        </Swiper>

  )
}
