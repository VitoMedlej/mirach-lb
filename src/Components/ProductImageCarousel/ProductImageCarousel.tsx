"use client"
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
import { MagnifierContainer, GlassMagnifier } from "react-image-magnifiers";

export default function App({images,index,setSwiper}:{setSwiper?:any,index?:number,images:string[] | []| undefined}) {


  return (
    <>
      <Swiper
        onSwiper={setSwiper}
        spaceBetween={30}
        autoplay={{delay:2000}}
        navigation={true}
        onScroll={()=>console.log(true)}
        pagination={{clickable: true}}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
 {
  images && images.map((img, index) => {
    return (
      <SwiperSlide key={img}>
        <MagnifierContainer>
          <GlassMagnifier
            key={img} // Use the image URL as the key
            magnifierSize={'50%'}
            imageSrc={img}
            imageAlt="Example"
            largeImageSrc={img} // Optional
          />
        </MagnifierContainer>
      </SwiperSlide>
    );
  })
}
      </Swiper>
     
    </>
  );
}
