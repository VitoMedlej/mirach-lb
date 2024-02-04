"use client";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import {IoIosMenu} from 'react-icons/io'
// import {CiShoppingCart} from 'react-icons/ci'

import { useEffect, useState} from 'react';

import SearchModal from './SearchModal';
import Link from 'next/link';
import {Badge, Button, Container, Divider, Typography} from '@mui/material';
// import { loadState } from '../../Utils/LocalstorageFn';
import {useRouter} from 'next/navigation';
// import {AiOutlinePhone, AiOutlineSearch, AiOutlineMenu} from 'react-icons/ai'
import {CiSearch,CiShoppingCart} from 'react-icons/ci'
import {AiOutlineHome,AiOutlineShoppingCart} from 'react-icons/ai'
import SearchInput from './SearchInput';

import NavButtom from './NavButtom';
import { useCartContext, useDrawerContext, useLangContext } from '@/context/Contexts';
import Btn from '../Btn/Btn';
import useLanguage from '@/Hooks/useLanguage';



export const categories =  [`Craft Supplies`,
`DIY Kits`,
`Artistic Creations`,
`Creative Crafts`,
`Home Decor`];
export default function Navbar() {
    const {open, setOpen} = useDrawerContext();
    const [openModal,
        setOpenModal] = useState(false);
    
    const [localCart,
        setLocalCart] = useState([]);

    const {cartOpen, setCartOpen} = useCartContext();
    const router = useRouter()
    // const localCart = [1]
    useEffect(() => {
        const cart : any = []
        // const cart = loadState('2G184N24-JZ094512JIF12412') || []
        if (cart) {

            setLocalCart(cart)
        }
    }, [cartOpen])
    const {text} = useLanguage()

    const {lang,setLang} = useLangContext()
    return ( <>
     <Box
     id='navy'
    className='center auto   relative bg flex'
        sx={{
            zIndex:12,
        flexWrap: 'wrap',
                width:'100%',
                boxShadow:'none',
        background:'transparent',
        border: 'none',
        px:0,
        flexGrow: 1
    }}>
      
        <AppBar
     id='navy2'

    className='center col relative   flex'

            sx={{

                boxShadow:'none',

                background:'transparent',
            // maxWidth: 'lg',
                width:'100%',
            margin: '0 auto',
        }}>
            <Box className='center text-center' sx={{background:'white',width:'100%',py:.25}}>
                <Typography className='' component='h1' sx={{color:'#0f0f0f',py:.2,fontSize:{xs:'.75em',sm:'.75em'}}}>
            FREE DELIVERY FOR ORDERS ABOVE $40. CASH ON DELIVERY. USD AT DAILY MARKET RATE.
                </Typography>
            </Box>
      <Toolbar className='flex relative center items-center' sx={{py:1,background:'black'}}>
        
        <Box 
        onClick={()=>router.push('/')}
        
        className='cursor pointer' sx={{
            position:{xs:'relative',sm:'absolute'},
            right:{xs:'0%',sm:'50%'},
        
        transform:{sm:'translateX(50%)'},width:{xs:'90px',sm:'auto'},height:'100%'}}>
            <img src="https://ucarecdn.com/14b57f62-b549-4e2f-8685-1bc72625ecc8/conslogo.PNG" alt="" className="img" />
        </Box>

        <Box className="flex flex1 flex-end">

       
            <Box 
    onClick={()=>setOpenModal(!openModal)}
            
            
            className='cursor pointer flex center items-center' sx={{width:'20px'
            ,padding:1
            
            }}>
                <img style={{filter:'invert(1)'}} src="https://cdn-icons-png.flaticon.com/128/54/54481.png" alt="" className="img" />
            </Box>
       

      
            <Box
                onClick={()=>setCartOpen(!cartOpen)}
            className='cursor pointer flex center items-center' sx={{width:'20px'
            ,padding:1
            
            }}>
                <img style={{filter:'invert(1)'}} src="https://cdn-icons-png.flaticon.com/128/1656/1656850.png" alt="" className="img" />
            </Box>


      
            <Box
               onClick={()=>setOpen(!open)}
            className='cursor pointer  center items-center' sx={{width:'20px',
            padding:1,
                display: {xs:'flex',sm:'none'},
        }}>
                <img style={{filter:'invert(1)'}} src="https://cdn-icons-png.flaticon.com/128/1828/1828859.png" alt="" className="img" />
            </Box>
   
        </Box>

        <SearchModal openModal={openModal} setOpenModal={setOpenModal }/>
        
      </Toolbar>
        <NavButtom/>

        </AppBar>
    </Box> 

    < Divider sx={{color : '#00000017'}} />
     </>
    
    );
}