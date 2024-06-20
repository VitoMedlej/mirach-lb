"use client"
import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
// import {Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from 'next/navigation';
import { Autoplay, Navigation } from 'swiper';





const Preloader3 = () => {
    const router = useRouter()
    const [imgs,setImgs] = useState([

     ])



        
    return (
      <Box
      sx={{
          width:'100%',
          transform:'translateY(-1px)',
          maxWidth:'none',
          height: {xs:'max-content',sm:'100%',md:'100%'},
          minHeight: {xs:'fit-content',sm:'400px'},
          maxHeight:{sm:'fit-content',md:'100%',lg:'100%'},
          margin: '0 auto',
          display: {xs: 'flex'}
      }}
  >
      <Swiper
          navigation={true}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          autoplay={{
              delay: 4022222222200,
              disableOnInteraction: false
          }}
          modules={[Navigation,Autoplay]}
          className="mySwiper swiper"
      >
          {imgs && imgs.map((item:any) => {
              let imageSize;
              if (window.innerWidth <= 640) {
                  imageSize = '640x480';
              } else if (window.innerWidth <= 1366) {
                  imageSize = '1366x768';
              } else {
                  imageSize = '1920x1080';
              }
  
              return (
                  <SwiperSlide className='ztop' key={`${item?.img}`}>
                      <Box sx={{position:'relative', height: '100%', width:'100%'}}>
                          <img
                              className={`img cover`}
                              src={`${item?.img}/-/resize/${imageSize}/`}
                              alt="Main Carousel Image"
                          />
                      </Box>
                  </SwiperSlide>
              )
          })}
      </Swiper>
  </Box>
  
    )
}

export default Preloader3


  