"use client"
import Link from 'next/link';
import {Typography , Box, Divider } from '@mui/material'
import './style.css'
import SMicons from '../SMicons/SMicons';
// import SMicons from './SMicons';
// // import Logo from '../../assets/icons/logo';


const Footer = () => (
  <footer className="site-footer " style={{color:'black',background:'white'}}>
    <div className="container " style={{color:'black',background:'white'}}>
      <div className="site-footer__top ">
        <div className="site-footer__description">
          <div className='logos cursor'>

            <Link href="/">
              {/* <a><h1 className="site-logo"><Logo />E-Shop</h1></a> */}
              {/* https://res.cloudinary.com/dwxm8f25f/image/upload/v1675357773/logo_ghli5e.jpg */}
              {/* https://res.cloudinary.com/dwxm8f25f/image/upload/v1675713948/logo_sktnut_1_jwy2hk.png */}
            <img className='img contain'
            
            src='https://ucarecdn.com/818e1f50-5bc9-427c-b93c-63cc1389844c/mirach_logopng1.png' alt="Pets Town Lebanon Logo" />
            </Link>
          </div>
          <Typography component='p' sx={{ fontSize: '.85em',color:"black" }}  className='footer-p '>
         We offer a unique selection of personalized, handcrafted bags,
          proudly made in Lebanon. From the elegant IVY and vera tote bags to the culturally inspired A La Libanaise and Koufiya designs, each piece is a statement of Lebanese craftsmanship and style.
           Customize your clutch, Vera, Vee, or any other design to reflect your personal taste. 
           Visit us in our atelier to experience the beauty and quality of Mirach bags. Shop local, embrace authenticity, and carry a piece of Lebanon with you.
          </Typography>
          <SMicons/>


        </div>

        <div className="site-footer__links ">
  
          <ul className=' ul-white'>
            <li className='white link-title'>
              <h1 style={{color:'black'}}>

              Site links
              </h1>
              </li>
            <li ><Link   href="/">
              Home</Link></li>
              
          <li><Link href="/about">About Us</Link></li> 
            <li><Link href="/collections/products">All Products</Link></li> 
            <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="https://wa.me/+96179111760">WhatsApp Us</Link></li>
          </ul>
     
          <ul  className='ul-white' style={{color:'black'}}>
            <li className='link-title'>
            <h1 style={{color:'black'}}>

              Contact
            </h1>
            
              </li>
        

            <li><a href="https://www.instagram.com/mirach_lb_/" target="_blank" rel="noreferrer" >@mirach_lb_</a></li>
            <li><a href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}`} rel="noreferrer" target='_blank' >+{process.env.NEXT_PUBLIC_WA}</a></li>
            {/* <li><a href={`http://tiktok.com/@thecraftroomlb`} rel="noreferrer" target='_blank' >TikTok</a></li> */}
          </ul>
        </div>
  
      </div>
    </div>
        <Divider color='gray'></Divider>
    <div className="site-footer__bottom bg3 " style={{color:'black',borderTop:"1px solid #0000001f"}}>
      <div className="container " style={{color:'black'}}>
        <p>Website Developed By{' '}
          <a style={{ color: 'black' }} href={`${'https://www.onbeirut.com'}`}>OnBeirut Agency </a></p>
      </div>
    </div>
  </footer>
);


export default Footer

