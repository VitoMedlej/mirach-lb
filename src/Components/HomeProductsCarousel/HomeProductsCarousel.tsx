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
    data: IProduct[],
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
              sx={{pt:4,pb:4,maxWidth:'lg'}}>


<Typography sx={{
    pt:{xs:2,sm:6},
    maxWidth:'1200px',
    pb:1,
    px:1,
    fontWeight:'400',
    fontSize:{xs:'1.5em',sm:'1.8em'},
    }} component='h1' className='  color '>
       Best Sellers
    </Typography>



</Box>
            
            <Box
                sx={{
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
sx={{width:'fit-content',mt:1,mx:'auto'}}
onClick={()=>router.push('/collections/products')}
>
   Explore More
</Btn>
   
{/* <Divider  light /> */}
        
                </Box>
                
                )
                
            }

export default ProductCollection