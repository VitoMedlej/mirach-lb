"use client"
import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
// import {Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from 'next/navigation';
import { Autoplay } from 'swiper';

// import useLanguage from '@/Hooks/useLanguage';
// import Btn from '../Btn/Btn';



const Preloader3 = () => {
    const router = useRouter()
    const [imgs,setImgs] = useState([
    //   {
    //     img:`https://ucarecdn.com/d723b198-f523-466d-8fba-fa88709d50bf/
    //     `
    //   },
    //   {
    //     img: 'https://ucarecdn.com/27331520-c27e-42a6-bece-56d493cd7e01/',
    //     position:'',
    // }
    // ,{
    //     img : 'https://ucarecdn.com/f0b39016-75a9-4dfa-98bb-2af8e91bb295/',
    //     position:'bottom',
    // }
     ])


     const fetchDataAndSetImgs = async () => {
        try {
    
    
          const response = await fetch('https://api.jsonbin.io/v3/b/65c502b2266cfc3fde879c83', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'X-Master-Key': '$2a$10$tKlp8yokSY5sQ58K9UJosuUM4/0k2FCFKG2LqzaNegXtNdlivpIwG'
            },
            // cache: 'no-store'
            next:{revalidate:10}

          })
          if (!response?.ok) {
            throw new Error(`Failed to fetch data. Status: ${response?.status}`);
          }
    
          const data = await response.json();
          console.log('data: ', data);
        if (!data?.record) return;
          setImgs(data?.record); // Assuming 'record' is the property containing the images in the response
        }
        catch(e){
          console.log('e: ', e);
    
        }
       }
     const redir = () => {
        router.push('/services')
        // console.log('abc')
     }
    useEffect(() => {
        fetchDataAndSetImgs()
    }, [])
        
    return (
        <Box
            sx={{
            // py: {xs:'.75em',sm:'2em',md:'3em'},
            // width: {xs:'98%',md:'74%',lg:'80%'},
            width:'100%',
            transform:'translateY(-1px)',
            maxWidth:'none',
            // maxWidth: 'lg',
            height: {xs:'max-content',sm:'500px',md:'100%'},
    minHeight: {xs:'fit-content',sm:'400px'},
            maxHeight:{sm:'fit-content',md:'500px',lg:'550px'},
            margin: '0 auto',
         
             
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
    
                {imgs && imgs.map((item:any) => {
    
                    return <SwiperSlide 
                     
                    className='ztop  ' key={`${item?.img}`}>
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
                                src={`${item?.img}`}
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