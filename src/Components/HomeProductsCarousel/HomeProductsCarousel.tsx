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
            sx={{
            maxWidth: 'lg',
            width :'99%',
            margin: '0 auto',
            // my: '3em',
            mt:'0em',
            mb:'3em',
            ...sx,
        }}>
             <Box className="flex justify-between col center text-center auto" sx={{px:1,pt:8,pb:4,maxWidth:'lg'}}>

<Typography
component={'h1'}
    className='sectionTitle  center text-center box'
    sx={{
 
    fontSize: {
        xs: '.81em',
        sm: '1em'
    },
    padding:.5,
    fontWeight: '300'
}}>
 NEW COLLECTION
</Typography>
<Typography
component={'h1'}
    className='sectionTitle  center text-center box'
    sx={{
 
    fontSize: {
        xs: '1.5em',
        sm: '2em'
    },
    padding:.5,
    fontWeight: '900'
}}>
Browse our best selling products
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
                
                data={data && data.length > 0 && data?.slice(0,25) || []}/>
            </Box>
            <Btn 
sx={{width:'fit-content',background:'transparent',color:'black',border:'1px solid white ',mt:1,mx:'auto'}}
onClick={()=>router.push('/collection/products')}
>
   Explore More
</Btn>
   
{/* <Divider  light /> */}
        
                </Box>
                
                )
                
            }

export default ProductCollection