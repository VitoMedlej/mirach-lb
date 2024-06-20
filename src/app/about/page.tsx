"use client"
import FAQ from '@/Components/FAQ/FAQ'
import { Container, Box, Typography, Divider } from '@mui/material'
import React from 'react'

const text = [
 `Welcome to Conceptual, the epitome of wearable storytelling. In the vibrant heart of Beirut, Lebanon, our clothing brand takes pride in crafting distinctive streetwear styles that redefine your wardrobe. Each product is a carefully curated concept, transcending mere clothing to become a unique narrative you wear.`,
  ` Designed and printed in the cultural mosaic of Beirut. Embrace the fusion of luxury fabrics with our street-smart designs, where comfort meets style in every thread. Conceptual invites you to step into a world where fashion is an expression, and your wardrobe becomes a canvas for diverse concepts. Join us on this journey, and let your style tell a story that goes beyond trends`
]
const Index = () => {
  return (
    <Container maxWidth='lg' className='auto' sx={{mx:1,py:4}}>
           <Typography sx={{mb:1,mx:'auto',fontSize:'2.5em',fontWeight:'600'}} className=" center text-center">
            ABOUT US
        </Typography>
        <Box sx={{width:'100%',height:'400px'}}>
            <img src="https://ucarecdn.com/818e1f50-5bc9-427c-b93c-63cc1389844c/mirach_logopng1.png" alt="" className="img contain" />
        </Box>
    
        <Box sx={{my:4}}>
                {
                    text.map(i=>{
                            return <Typography key={i} sx={{maxWidth:'md',py:1}} className='auto text-center'>{i}</Typography>
                    })
                } 
        </Box>
        <Divider></Divider>
        <Typography sx={{pt:4, mb:1,mx:'auto',fontSize:'2.5em',fontWeight:'600'}} className=" center text-center">
            Frequently Asked Questions
        </Typography>
            <FAQ/>
    </Container>
  )
}

export default Index