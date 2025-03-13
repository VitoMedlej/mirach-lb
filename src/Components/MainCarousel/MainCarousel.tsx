"use client"
import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
// import {Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from 'next/navigation';
import { Autoplay, Navigation } from 'swiper';





const Preloader3 = ({resImages} : any) => {
    const router = useRouter()
    const [imgs,setImgs] = useState<any>(
    //     [
    //         {
    //             img:`https://i.ytimg.com/vi/WW2nquaHjU8/maxresdefault.jpg`
    //         },
    //         {
    //             img:'https://mybestpricetoday.com/wp-content/uploads/2020/11/Women_Bags_Banner-e1606189928602-1200x546.jpg'
    //         },
    //         {
    //             img: 'https://4.bp.blogspot.com/_whDe6iujUPU/TH0x4Rdn8mI/AAAAAAAAGjw/cqYFRV3TpLc/s1600/DSC07183.JPG'
    //         }
    //  ]
    )


    useEffect(() => {
      
    
      if (resImages) {
        setImgs(resImages)
      }
    }, [])
    

        
    return (
      <Box
      sx={{
          width:'100%',
          transform:'translateY(-1px)',
          maxWidth:'none',
          height: {xs:'max-content',sm:'100%',md:'600px'},
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
              delay: 3000,
              disableOnInteraction: false
          }}
          modules={[Navigation,Autoplay]}
          className="mySwiper swiper "
      >
          {imgs && imgs?.map((item:any) => {
            
              return (
                  <SwiperSlide className='ztop ' key={`${item?.img}`}>
                      <Box sx={{position:'relative', height: '100%', width:'100%'}}>
                          <img
                              className={`img cover`}
                              src={`${item?.img}-/resize/600/`}
                            //   src={`${item?.img}/-/resize/${imageSize}/`}
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


  