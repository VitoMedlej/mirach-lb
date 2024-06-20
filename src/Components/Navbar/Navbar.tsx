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
import { useCartContext, useCategoriesContext, useDrawerContext, useLangContext } from '@/context/Contexts';
import Btn from '../Btn/Btn';
import useLanguage from '@/Hooks/useLanguage';





export default function Navbar() {
    const { setOpen } = useDrawerContext(); // Assuming you have these context hooks
    const { cartOpen, setCartOpen } = useCartContext();
    const router = useRouter();

    const [openModal, setOpenModal] = useState(false);
    const [localCart, setLocalCart] = useState([]);

    useEffect(() => {
        // Your useEffect logic here
    }, [cartOpen]);

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
                    <Box className='center w100 text-center' sx={{ minWidth: '90vw', background: 'white', width: '100%', py: 0.25 }}>
                        <Typography className='uppercase' component='h1' sx={{ textTransform: 'uppercase', color: '#0f0f0f', py: 0.2, fontSize: { xs: '.75em', sm: '.75em' } }}>
                            Our images are authentic and true-to-life, devoid of any mockups
                        </Typography>
                    </Box>

                    <Toolbar className='flex relative center items-center' sx={{ py: 1, background: 'white' }}>
                        {/* Logo on the far left */}
                        <Box
                            onClick={() => router.push('/')}
                            className='cursor pointer'
                            sx={{
                                position: { xs: 'relative', sm: 'absolute' },
                                left: { xs: '0%', sm: '50%' },
                                transform: { sm: 'translateX(-50%)' },
                                width: { xs: '90px', sm: 'auto' },
                                height: '100%'
                            }}
                        >
                            <img src="https://ucarecdn.com/818e1f50-5bc9-427c-b93c-63cc1389844c/mirach_logopng1.png" alt="MIRACH-LBLOGO" className="img" />
                        </Box>

                        <Box sx={{ color: 'black' }}>
                        {[{categoryName:'foo'}].map((category, index) => (
        <Link key={index} href={`/${category?.categoryName}/products`} passHref>
            <Box component="a" sx={{ color: 'black', ml: 2, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                {category?.categoryName}
            </Box>
        </Link>
    ))}

    {/* Static links */}
    <Link href="/home" passHref>
        <Box component="a" sx={{ color: 'black', ml: 2, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
            Home
        </Box>
    </Link>
    <Link href="/collection" passHref>
        <Box component="a" sx={{ color: 'black', ml: 2, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
            Collection
        </Box>
    </Link>
                        </Box>

                        <Box className="flex flex1 flex-end">
                            <Box
                                onClick={() => setOpenModal(!openModal)}
                                className='cursor pointer flex center items-center'
                                sx={{ width: '20px', padding: 1 }}
                            >
                                <img style={{ filter: 'invert(0)' }} src="https://cdn-icons-png.flaticon.com/128/54/54481.png" alt="" className="img" />
                            </Box>

                            <Box
                                onClick={() => setCartOpen(!cartOpen)}
                                className='cursor pointer flex center items-center'
                                sx={{ width: '20px', padding: 1 }}
                            >
                                <img style={{ filter: 'invert(0)' }} src="https://cdn-icons-png.flaticon.com/128/1656/1656850.png" alt="" className="img" />
                            </Box>

                            <Box
                                onClick={() => setOpen(!open)}
                                className='cursor pointer center items-center'
                                sx={{ width: '20px', padding: 1, display: { xs: 'flex', sm: 'none' } }}
                            >
                                <img style={{ filter: 'invert(0)' }} src="https://cdn-icons-png.flaticon.com/128/1828/1828859.png" alt="" className="img" />
                            </Box>
                        </Box>
                    </Toolbar>

                    {/* Render your SearchModal component */}
                    <SearchModal openModal={openModal} setOpenModal={setOpenModal} />

                </AppBar>
            </Box>

            {/* Divider */}
            <Divider sx={{ color: '#00000017' }} />
        </>
    );
}