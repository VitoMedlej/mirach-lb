"use client"
import Link from 'next/link';
import {Typography , Box, Divider } from '@mui/material'
import './style.css'
import SMicons from '../SMicons/SMicons';
// import SMicons from './SMicons';
// // import Logo from '../../assets/icons/logo';


const Footer = () => (
  <footer className="site-footer " style={{color:'white',background:'black'}}>
    <div className="container " style={{color:'white',background:'black'}}>
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
          <Typography component='p' sx={{ fontSize: '.85em',color:"white" }}  className='footer-p '>
          Welcome to Conceptual, where fashion becomes a canvas for storytelling. Our clothing brand invites you to embrace the power of narrative through each meticulously crafted piece. Let Conceptual be your guide as you navigate through a collection where every product is a unique chapter, and your style is the story waiting to be told. Explore the art of self-expression and redefine your wardrobe with Conceptual – where every garment is a statement and every detail unfolds a narrative.
          </Typography>
          <SMicons/>

          {/* <ul className="site-footer__social-networks">
          <li><a href="https://www.facebook.com/profile.php?id=100063581229923" rel="noreferrer" target='_blank'><i className="icon-facebook"></i></a></li>
        <li><a href="#"><i className="icon-twitter"></i></a></li>
          <li><a href="#"><i className="icon-linkedin"></i></a></li>
          <li><a href={`${process.env.NEXT_PUBLIC_INSTA}`}rel="noreferrer" target='_blank' ><i className="icon-instagram"></i></a></li>
          <li><a href="#"><i className="icon-youtube-play"></i></a></li>
        </ul> */}
        </div>

        <div className="site-footer__links ">
        {/* <div>
        <iframe style={{height:'100%',width:'100%',border:0}} frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=Beirut,+Lebanon&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
        </div> */}
          <ul className=' ul-white'>
            <li className='white link-title'>
              <h1 style={{color:'white'}}>

              Site links
              </h1>
              </li>
            <li ><Link   href="/">
              Home</Link></li>
              
          <li><Link href="/about">About Us</Link></li> 
            <li><Link href="/collections/products">All Products</Link></li> 
            <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="https://wa.me/+96170657915">WhatsApp Us</Link></li>
          </ul>
     
          <ul  className='ul-white' style={{color:'black'}}>
            <li className='link-title'>
            <h1 style={{color:'white'}}>

              Contact
            </h1>
            
              </li>
            {/* <li><Link href="mailto:sales@thecraftroom-lb.com">sales@petstown.com</Link></li> */}
            
            {/* <li><a href="https://www.facebook.com/profile.php?id=100076163602459/" target="_blank" rel="noreferrer" >Facebook</a></li> */}

            <li><a href="https://www.instagram.com/conceptual.wic/" target="_blank" rel="noreferrer" >@conceptual.wic</a></li>
            <li><a href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}`} rel="noreferrer" target='_blank' >+{process.env.NEXT_PUBLIC_WA}</a></li>
            {/* <li><a href={`http://tiktok.com/@thecraftroomlb`} rel="noreferrer" target='_blank' >TikTok</a></li> */}
          </ul>
        </div>
  
      </div>
    </div>
        <Divider color='gray'></Divider>
    <div className="site-footer__bottom " style={{color:'white',borderTop:"1px solid #0000001f"}}>
      <div className="container " style={{color:'white'}}>
        <p>Website Developed By{' '}
          <a style={{ color: 'white' }} href={`${'https://www.onbeirut.com'}`}>OnBeirut Agency </a></p>
      </div>
    </div>
  </footer>
);


export default Footer

