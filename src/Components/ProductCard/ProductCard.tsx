"use client"
// import {IProduct} from '@/Types/Types'
import {Box, Typography} from '@mui/material'
import React from 'react'
import Btn from '../Btn/Btn'
// import {GrAdd} from 'react-icons/gr'
import {useRouter} from 'next/navigation'
import useCart from '@/Hooks/useCart'

import {BiCartAdd} from 'react-icons/bi';


const ProductCard = ({
    title,
    price,
    sizes,

    images,
    category,
    _id,
    width,
    height,
    inStock
    ,
    newPrice,
    sx

} : {
    inStock?:boolean,
    _id: string,
    title: string,
    sizes: {
        size: number;
        price: number;
      }[] | null;
    price: number,
    newPrice ?: number,
    images: string[],
    category: string,
    width?: string | number | any,
    height?: string | number,
    sx?:any,
}) => {
    const router = useRouter()
    return (
        <Box
            className='  trans cardproduct center text-center'
            sx={{
            // boxShadow: `rgba(0, 0, 0, 0.05) 0px 0px 0px 1px`,
            // border : '1px solid #000000a',
            py: 1,
            margin: '0em auto',
            my:1,
            minWidth: {sm:'30%'},
            width: width
                ? width
                : {
                    xs: '48%',
                    sm: '32%',
                    md:'22%'
                },
            ...sx,
        }}>
            <Box 
            className='cursor auto'
               onClick={() => router.push(`/product/${_id}`)}
            sx={{
                width:{xs:'98%',sm:'100%',md:'auto'},
                height: height || {sm:'300px',md:'400px'}
                // height: height || {xs:'100%',sm:'300px',md:'400px'}
            }}>
                <img
                    src={images
                    ? `${images[0]}/-/resize/500/`
                    : ''}
                    alt="Prdouct image"
                    className="img contain "/>
            </Box>
            
            <Box 
            
            sx={{
                px: .95,
                mt:1.5,
                alignItems: "left",
            }}>  <Typography
            className='flex cursor limited w100  left '
                    component='h1'
                    onClick={() => router.push(`/product/${_id}`)}
                    sx={{
                        textAlign: 'left',
                        color:'black'
                    ,fontSize: {xs:'.85em',sm:'1.05em',md:'1.12em'},
                    fontWeight: '500'
                }}>
                    {title}
                </Typography>
        
               
              
               {inStock !== false ?
               <>
              <Typography
    component='p'
    className="clr cursor"
    sx={{
        ':hover':{
            textDecoration:'underline',
        },
        display:'flex',
        alignItems:"left",
        my: 0.5,
        fontWeight: '400',
        fontSize: { xs: '.99em', sm: '1em' },
    }}
>
{newPrice ? (
    <>
        <s style={{color:'red'}} >${Number(price)?.toFixed(2)}</s>&nbsp;&nbsp;<span>{`$${Number(newPrice)?.toFixed(2)}`}</span>
    </>
) : (
    `$${Number(price)?.toFixed(2)}`
)}
</Typography>
               {/* <Typography
                    sx={{
                    mb:.5,
                    color:'green',
                    fontWeight: '700',
                    fontSize: {xs:'.99em',sm:'1em'}
                }}>
                    {price}$
                </Typography> */}
                {/* <Btn 
            className='cursor    gap1'
                
                     onClick={()=>
                        sizes &&  sizes?.length > 0 ? 
                        router.push(`/product/${_id}`)
                        :
                        addToCart(1,_id,{title,category,img:images[0],_id,price:newPrice?Number(newPrice):price},true)}
                    
                    sx={{

                        margin:'0 auto'
                    // borderRadius:'8',
                    ,py:{xs:'.5em',sm:'1em'},
                    px:{xs:'1em',sm:'3.5em',lg:'5em'}
                        ,
                        ':hover':{color:'white !IMPORTANT',background:'white '}
                }}>
                    <Box  className="flex">

                    {sizes && sizes?.length > 0 ? 'Select Size' :  'ADD TO CART'}
                  
                    </Box>
                </Btn> */}
                
               </>

               :

                  <Typography
                    sx={{
                    mb:.5,
                    color:'red',
                    fontWeight: '600',
                    fontSize: {xs:'.99em',sm:'1.06em'}
                }}>
                    Out Of Stock
                </Typography>
                }
            </Box>
        </Box>
    )
}

export default ProductCard