"use client"
import {Box, Divider, Typography} from '@mui/material'
import { Dispatch, SetStateAction } from 'react'
import Link from 'next/link'
import { IProduct } from '@/Types/Types'
import Btn from '../Btn/Btn'
import SwiperCarousel from './SwiperCarousel/SwiperCarousel'
import { useRouter } from 'next/navigation'



const ProductCollection = ({sx,delay,Collectiontitle,data,setQuickView} : {
    Collectiontitle: string,
    delay : number,
    data?: IProduct[],
    sx ?: any;
    setQuickView ?: Dispatch<SetStateAction<{
        isOpen: boolean;
        productId: null | string;
    }>>
}) => {

    const router = useRouter()

    return (
        <Box
        id='shop'
            sx={{
            maxWidth: '1200px',
            // width :'99%',
            margin: '0 auto',
            // my: '3em',
            mt:'0em',
            mb:'3em',
            ...sx,
        }}>
             <Box className="flex justify-between col   "
              sx={{pt:4,pb:0,maxWidth:'lg'}}>


<Typography sx={{
      pt: {
        xs: 8,
        md: 14
    },
    mt: {
        xs: 4,
        sm: 12
    },
    maxWidth:'1200px',
    pb:0,
    px:1,
    fontWeight:'400',
    fontSize:{xs:'1.5em',sm:'1.8em'},
    }} component='h1' className='animate-on-scroll  clr '>
       {Collectiontitle}
    </Typography>



</Box>
            
            <Box
                sx={{
            width: '100%',
                display: {
                    xs: "flex",
                 
                }
            }}>
                <SwiperCarousel
                delay={delay}
                
                data={data && data.length > 0 
                && data?.slice(0,25) || []}/>
            </Box>
            <Btn 
            className='animate-on-scroll'
sx={{width:'fit-content',mt:1,mx:'auto'}}
onClick={()=>router.push('/collections/products')}
>
   View More
</Btn>
   
{/* <Divider  light /> */}
        
                </Box>
                
                )
                
            }

export default ProductCollection