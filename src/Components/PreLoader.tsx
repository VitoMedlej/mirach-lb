"use client"
import React from 'react'
import { Box,  Container, Divider, Grid, Typography } from "@mui/material"
// import ContactSection from './ContactSection/ContactSection'
import HomeProductCollection from './HomeProductCollection/HomeProductCollection'
// import HomeProductsCarousel from './HomeProductsCarousel/HomeProductsCarousel'
import MainCarousel from './MainCarousel/MainCarousel'
import { useRouter } from 'next/navigation'
import Perks from './Perks/Perks'
// import FullscreenPoster from './FullscreenPoster/FullscreenPoster'
import Testimonials from './Testimonials/Testimonials'
import Btn from './Btn/Btn'
import useLanguage from '@/Hooks/useLanguage'
import ContactSection from './ContactSection/ContactSection'
import HomeProductsCarousel from './HomeProductsCarousel/HomeProductsCarousel'

const 
PreLoader = ({data,resImages}:any) => {
  const router= useRouter();
  const {text} = useLanguage()
  const textsArray = [
    {
      id: 1,
      title: text('100% Natural', '100٪ طبيعي'),
      desc: text(
        'Our honey is sourced from the purest natural environments, ensuring 100% natural goodness without any artificial additives or preservatives.',
        'عسلنا يأتي من أجواء طبيعية نقية، مما يضمن لك الخير الطبيعي بنسبة 100٪ دون أي إضافات صناعية أو مواد حافظة.'
      ),
    },
    {
      id: 2,
      title: text('Purity and Potency', 'النقاء والفعالية'),
      desc: text(
        'We carefully select our beehives in pristine locations, ensuring the purity and potency of our honey, so you experience the best benefits.',
        'نحن نختار خلايانا بعناية في أماكن نقية، مما يضمن نقاء وفعالية عسلنا، لتجربة فوائد متميزة.'
      ),
    },
    {
      id: 3,
      title: text('Expertly Formulated', 'صياغة خبيرة'),
      desc: text(
        'Our honey is expertly crafted by our team of experienced beekeepers, ensuring a premium product that delivers superior taste and quality.',
        'تم تصنيع عسلنا بخبرة من قبل فريق من مربي النحل ذوي الخبرة، مما يضمن لك منتجًا ممتازًا يقدم طعمًا وجودة فائقين.'
      ),
    },
    {
      id: 4,
      title: text('Great Value', 'قيمة عظيمة'),
      desc: text(
        'DIY CRAFTS honey provides great value for your health, offering the highest quality honey at an affordable price for you and your family.',
        'عسل بي أورجانيك يقدم قيمة عظيمة لصحتك، حيث يوفر عسل عالي الجودة بسعر معقول لك ولعائلتك.'
      ),
    },
  ];
  

  return (
    <Box >
      <MainCarousel res={null} />
      {/* <HomeProductCollection  products={data}/> */}
        <HomeProductsCarousel data={data} Collectiontitle={''} delay={2000}/>
      {/* <HomeProductCollection  products={data}/> */}

        <Divider light></Divider>
       
        <Container sx={{maxWidth:'lg',pt:12,justifyContent:'space-between'}} className='flex row wrap space-between items-between' maxWidth='xl'>

            <Box className='relative flex center items-center ' sx={{mb:2, width:{xs:'100%',sm:'49%'},height:{xs:'450px',sm:'400px',md:'600px'}}}>
                  <img src="https://ucarecdn.com/e8223403-6f3b-4db7-9f01-493999855b15/63b44409a07a410cae6f4ea935b6c361.jpg" alt="Natural Supplements Image" className="img" />
                  <Box sx={{bottom:0,pb:'2em'}}  className="absolute flex center auto items-center text-center col ">
                    <Typography className='center text-center' 
                    component='h1'
                    sx={{
                      background:'black',
                      px:1,
                      mb:1,
                      fontSize:'2em',textShadow:' #000000c',fontWeight:700,color:'white'}}>
                    {text('Oversized Outfits', 'المكملات الغذائية الطبيعية')}

                    </Typography>
                    <Btn v2
        onClick={()=>router.push(`/Oversized Outfits/products?type=all`)}
                    
                    sx={{mx:'auto'}}>
                    {text('SHOP NOW', 'تسوق الآن')}

                    </Btn>
                  </Box>
            </Box>
            

            <Box className='relative flex center items-center ' sx={{mb:2, width:{xs:'100%',sm:'49%'},height:{xs:'450px',sm:'400px',md:'600px'}}}>
                  <img src="https://ucarecdn.com/9dc50f11-50d3-4aa1-bfd3-3c534de5c88d/151d89709c404360bc4b6d31ca614255.jpg" alt="Natural Supplements Image" className="img" />
                  <Box sx={{bottom:0,pb:'2em'}}  className="absolute flex center auto items-center text-center col ">
                    <Typography className='center text-center' 
                    component='h1'
                    sx={{
                      background:'black',
                      px:1,
                      mb:1,
                      fontSize:'2em',textShadow:' #000000c',fontWeight:700,color:'white'}}>
                    {text('Sporty Streets')}

                    </Typography>
                    <Btn v2
        onClick={()=>router.push(`/Sporty Streets/products?type=all`)}
                    
                    sx={{mx:'auto'}}>
                    {text('SHOP NOW', 'تسوق الآن')}

                    </Btn>
                  </Box>
            </Box>
          
      </Container>
      <Divider sx={{mt:'4em'}} light></Divider>


      <Box sx={{margin:'0 auto'}} className='center   '>
           
           <Box className="flex justify-between col auto" 
           sx={{px:1,py:{xs:8,sm:12},maxWidth:'lg'}}>

<Typography
component={'h1'}
    className='sectionTitle  center text-center box'
    sx={{
 
    fontSize: {
        xs: '2em',
        sm: '3em'
    },
    pb:.5,
    fontWeight: '900'
}}>
 Diamond Painting is easy and fun!
</Typography>
<Typography
component={'p'}
    className='sectionTitle  center text-center box'
    sx={{
 
    fontSize: {
        xs: '1em',
        sm: '1.1em'
    },
    fontWeight: '200'
}}>
Relax and unwind as you seamlessly create your own stunning diamond art.
</Typography>

<Btn  
sx={{
  background:'black',color:'white',
  width:'fit-content',mt:2,mx:'auto'}}
onClick={()=>router.push('/collection/products')}
>
   Explore More
</Btn>
</Box>
</Box>
     



        
  </Box>
  )
}

export default PreLoader