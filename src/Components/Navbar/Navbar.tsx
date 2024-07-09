"use client";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {  useState} from 'react';
import SearchModal from './SearchModal';
import Link from 'next/link';
import { Typography} from '@mui/material';
import {useRouter} from 'next/navigation';

import { useCartContext, useCategoriesContext, useDrawerContext, useLangContext } from '@/context/Contexts';





export default function Navbar() {
    const { open, setOpen } = useDrawerContext(); // Assuming you have these context hooks
    const { cartOpen, setCartOpen } = useCartContext();
  const {categories} = useCategoriesContext()

    const router = useRouter();

    const [openModal, setOpenModal] = useState(false);

    // useEffect(() => {
    // }, [cartOpen]);

    return (
        <>
            <Box
                id='navy'
                className='center auto relative bg flex'
                sx={{
                    zIndex: 12,
                    flexWrap: 'wrap',
                    width: '100%',
                    boxShadow: 'none',
                    background: 'transparent',
                    border: 'none',
                    px: 0,
                    flexGrow: 1
                }}
            >
                <AppBar
                    id='navy2'
                    className='center col relative flex'
                    sx={{
                        boxShadow: 'none',
                        background: 'transparent',
                        width: '100%',
                        margin: '0 auto'
                    }}
                >
                    <Box className='center bg3  w100 text-center' sx={{ minWidth: '90vw', background: 'white', width: '100%', py: 0.25 }}>
                        <Typography className='uppercase clr' component='h1'
                         sx={{ textTransform: 'uppercase',
                            fontWeight:500,
                          color: '#0f0f0f', py: 0.2, fontSize: { xs: '.65em', sm: '.75em' } }}>
                        Shipping anywhere in Lebanon & Worldwide 📍
                        </Typography>
                    </Box>

                    <Toolbar className='flex relative center items-center'
                    
                    sx={{ boxShadow:'1px 1px 3px #857a5b4a', py: 1, background: 'white' }}>
                        {/* Logo on the far left */}
                        <Box
                            onClick={() => router.push('/')}
                            className='cursor pointer'
                            sx={{
                                position: { xs: 'relative', sm: 'absolute' },
                                left: { xs: '0%', sm: '50%' },
                                transform: { sm: 'translateX(-50%)' },
                                width: { xs: '100px', sm: 'auto' },
                                height: '100%'
                            }}
                        >
                            <img 
                            src="https://ucarecdn.com/83ee755f-e11f-40b6-9761-65b4b5ecd627/-/resize/200/" alt="MIRACH-LBLOGO" className="img contain" />
                        </Box>



                        <Box className='row' sx={{ display:{xs:'none',md:'flex'}, color: 'black' }}>
                       
                        <Link className='decor-none nav-link' href="/" >
        <Box component="p" sx={{ fontWeight:500, color: 'black', ml: 2, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
            Home
        </Box>
    </Link>
    <Link className='decor-none nav-link' href="/collection/products" >
        <Box component="p" sx={{ fontWeight:500, 
            color: 'black', ml: 2, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
            Collection
        </Box>
    </Link>
                       
                        {categories && categories?.slice(0,2)?.map((category : any,  index : any)  => (
        <Link className=' decor-none nav-link' key={category?.categoryName} href={`/${encodeURIComponent(category?.categoryName?.toLowerCase())}/products`} >
            <Box component="p" sx={{fontWeight:500, color: 'black', ml: 2, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                {category?.categoryName}
            </Box>
        </Link>
    ))}

   
 
                        </Box>

                        <Box className="flex flex1 flex-end">
                            <Box
                                onClick={() => setOpenModal(!openModal)}
                                className='cursor pointer flex center items-center'
                                sx={{ width: '20px', padding: 1 }}
                            >
                                <img style={{ filter: 'invert(0)' }} src="https://cdn-icons-png.flaticon.com/128/9177/9177086.png" alt="" className="img" />
                            </Box>

                            <Box
                                onClick={() => setCartOpen(!cartOpen)}
                                className='cursor pointer flex center items-center'
                                sx={{ width: '20px', padding: 1 }}
                            >
                                <img style={{ filter: 'invert(0)' }} src="https://cdn-icons-png.flaticon.com/128/687/687259.png" alt="" className="img" />
                            </Box>

                            <Box
                                onClick={() => setOpen(!open)}
                                className='cursor pointer center items-center'
                                sx={{ width: '20px', padding: 1, display: { xs: 'flex', sm: 'none' } }}
                            >
                                <img style={{ filter: 'invert(0)' }} src="https://cdn-icons-png.flaticon.com/128/10513/10513594.png" alt="" className="img" />
                            </Box>
                        </Box>
                    </Toolbar>

                    {/* Render your SearchModal component */}
                    <SearchModal openModal={openModal} setOpenModal={setOpenModal} />

                </AppBar>
            </Box>

        </>
    );
}