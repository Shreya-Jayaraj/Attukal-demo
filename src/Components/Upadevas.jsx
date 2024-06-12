
import shiva from "../assets/shiva2.png";
import ganapathi from "../assets/ganapathi2.png";
import nagar from "../assets/nagar2.png";
import madan_thampuran from "../assets/madan_thamburan2.png";
import './Upadevas.css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


function Upadevas() {
  return (
    <div className="container-upadevas">
      <h1 className="heading-upadevas">UPADEVAS</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={shiva} alt="slide_image" />
          <div className="image-name-up">Lord Shiva</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={ganapathi} alt="slide_image" />
          <div className="image-name-up">Lord Ganpathi</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={nagar} alt="slide_image" />
          <div className="image-name-up">Lord Nagar</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={madan_thampuran} alt="slide_image" />
          <div className="image-name-up">Lord Madan Thampuran</div>
        </SwiperSlide>
        

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
         
        </div>
      </Swiper>
    </div>
  );
}

export default Upadevas;