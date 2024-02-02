"use client"
import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
// import {Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from 'next/navigation';
import { Autoplay } from 'swiper';

import useLanguage from '@/Hooks/useLanguage';
import Btn from '../Btn/Btn';



const Preloader3 = ({res}:{res:any}) => {
    const router = useRouter()
    const [imgs,setImgs] = useState([
      {
        img: 'https://thevybe.co/cdn/shop/files/VAR_6213_1400x.jpg?v=1688976097',
        position:'',
    }
    ,{
        img : 'https://irrelevantlvng.com/img/cms/IMG_1323.JPG',
        position:'bottom',
    }
     ])
     const redir = () => {
        router.push('/services')
        // console.log('abc')
     }
    useEffect(() => {
        console.log('res: ', res);
    if (res && res?.MainCarousel && res?.MainCarousel?.length > 0) {
        console.log('res?.MainCarousel: ', res?.MainCarousel);
        // console.log('res: ', );
        setImgs(res?.MainCarousel)
    }
    }, [])
  const {text} = useLanguage()
    
    return (
        <Box
            sx={{
            // py: {xs:'.75em',sm:'2em',md:'3em'},
            // width: {xs:'98%',md:'74%',lg:'80%'},
            width:'100%',
            transform:'translateY(-1px)',
            maxWidth:'none',
            // maxWidth: 'lg',
            minHeight:'400px',
            maxHeight:{sm:'100%',md:'500px',lg:'550px'},
            margin: '0 auto',
         
            height : {xs:'500px',sm:'500px',md:'100%'},
             
            display: {
                xs: 'flex'
            },
            // mt:20,
        }}>
            <Swiper
            
                navigation={false}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                delay: 3000,
                disableOnInteraction: true
            }}
                modules={[Autoplay]}
                className="mySwiper swiper">
    
                {imgs.map((item) => {
    
                    return <SwiperSlide 
                     
                    className='ztop  ' key={item.img}>
                        <Box
                            sx={{
                                position:'relative',
                                height: '100%',
                            width:'100%'
                        }}>
                        {/* <Container className='auto center text-center ' sx={{width:'100%'}} maxWidth='lg' disableGutters>
                            
                      
                            <Box sx={{pointerEvents:'none',top:0,right:0,width:'100%',zIndex:1123,height:'100%',background:'black',opacity:.55}} className="absolute">

                            </Box>
                            <Box 
                            className='auto center text-center'
                            sx={{
                                top:'50%',
                                // maxWidth:'850px',
                                transform:'translateY(-50%)',
                                zIndex:123456,
                                position:'absolute'}}>
                                <Typography 
                                className='auto'
                                
                                sx={{
                                 maxWidth:'600px',
                                  
                                  color:'white',fontSize:{xs:'2em',
                                sm:'3.1em',md:'3.65em',lg:'3.5em'},fontWeight:'900'}}>
                             
                             WHERE EXCELLENCE MEETS AUTOMOTIVE CARE
                                </Typography>
                                <Typography 
                                className='center auto text-center'
                                sx={{color:'white',fontSize:{xs:'.85em',sm:'.87em'},mt:1,maxWidth:'600px'}}>
                                  We take pride in providing the best-in-class services to keep your vehicle in pristine condition.

                                </Typography>
                                <Box className="flex auto">

                                <Btn
                                onClick={()=>redir()}
                                
                                className='bg white borderColor ' sx={{mx:'auto',mt:3}}>
                             View Services

                                </Btn>
                            
                                </Box>
                            </Box>
                            </Container> */}
                            <img
            
                                className={`img   
                                `}
                                // ${item?.className}
                                src={`${item.img}`}
                                alt="Main Carousel Image"/>
           
                        </Box>
                    </SwiperSlide>
                })
    }
    
            </Swiper>
    
        </Box>
    )
}

export default Preloader3