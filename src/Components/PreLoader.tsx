"use client"
import React, { useEffect } from 'react'
import { Box,  Container, Divider, Grid, Typography } from "@mui/material"
// import ContactSection from './ContactSection/ContactSection'
// import HomeProductCollection from './HomeProductCollection/HomeProductCollection'
// import HomeProductsCarousel from './HomeProductsCarousel/HomeProductsCarousel'
import MainCarousel from './MainCarousel/MainCarousel'
import { useRouter } from 'next/navigation'
import Perks from './Perks/Perks'
// import FullscreenPoster from './FullscreenPoster/FullscreenPoster'
// import Testimonials from './Testimonials/Testimonials'
import Btn from './Btn/Btn'
import useLanguage from '@/Hooks/useLanguage'
// import ContactSection from './ContactSection/ContactSection'
import HomeProductsCarousel from './HomeProductsCarousel/HomeProductsCarousel'
import CategoryItem from './HomeCateogryList/CategoryItem'
import { useCategoriesContext } from '@/context/Contexts'
import HomeProductCollection from './HomeProductCollection/HomeProductCollection'

const 
PreLoader = ({data,resImages,categories}:any) => {
  console.log('data ', data);


  const {setCategories} = useCategoriesContext()
  const router= useRouter();



  useEffect(() => {
    
    if (categories) {
      setCategories(categories)
    }
   
  }, [])
  
  
{/* <>
{categories.map((cate:
  {
categoryName : string,
img: string,
subcategories?: string[]
  }
)=>{
  return <div key={cate?.categoryName}>{cate?.categoryName}</div>
})}
</> */}
  return (

        <Box >
         
          
      <MainCarousel  />
      {/* <HomeProductCollection  products={data}/> */}

      <Box className="flex justify-between col center text-center auto"
       sx={{px:1,pt:4,pb:4,maxWidth:'lg'}}>


<Typography
component={'h1'}
    className='  center text-center box'
    sx={{
 
    fontSize: {
        xs: '1.5em',
        sm: '2em'
    },
    padding:.5,
    fontWeight: '700'
}}>
Never out of style
</Typography>

<Typography
component={'p'}
    className='sectionTitle   center text-center box'
    sx={{
 
 
    fontWeight: '200'
}}>
{`The perfect way to elevate your style is with a personalized, handcrafted bag from Mirach.`}
</Typography>

</Box>


        {/* <HomeProductsCarousel  delay={3000} data={data} Collectiontitle={''} /> */}

      <HomeProductCollection  products={data} />




      <Typography sx={{
    pt:{xs:8,md:14},
    mt:12,
    mx:'auto',
    maxWidth:'1200px',
    pb:1,
    px:1,
    fontWeight:'400',
    fontSize:{xs:'1.5em',sm:'1.8em'},
    }} component='h1' className='  color '>
       Explore
    </Typography>
        <Grid container className='flex auto space-evenly  row wrap' sx={{px:1, maxWidth:'1200px'}}>
          
          
            <Grid sx={{height:{xs:'100%',sm:'550px',md:'750px'}}} item xs={12} sm={7.5} md={6.6}>
                <CategoryItem 
                  imgHeights={{xs:`100%`,md:'730px'}}
                img='https://www.gabyandrea.com/cdn/shop/collections/Category_HpThumbnail-Pic-t2292501.png?v=1712420506&width=750'
                title='My Collection' sx={{width:'100%',height:{xs:'100%',sm:'100%',md:"730px"}}} />
            </Grid>


            <Grid
             className='flex justify-between' 
             sx={{
              
              height:{xs:'100%',sm:'550px',md:'750px'},
              mt:{xs:1,sm:0},flexDirection: {xs: 'row', sm: 'column'}}}  item xs={12} sm={4} md={4.8}>
         
         
            <CategoryItem 
             imgHeights={{xs:`100%`,sm:'230px',md:'325px'}}
            
            img='https://www.gabyandrea.com/cdn/shop/collections/BeautyPlus_20230807174248526_save.jpg?v=1712421292&width=750'
            
            title='My Collection'
             sx={{width:{xs:'49%',sm:'100%'},height:{xs:'100%',sm:'50%'}}} />

            
            <CategoryItem
                  imgHeights={{xs:`100%`,sm:'230px',md:'325px'}}
            
            img='https://www.gabyandrea.com/cdn/shop/files/Untitled_design_19.png?v=1668010076&width=550'
            
            title='My Collection' sx={{width:{xs:'49%',sm:'100%'},height:{xs:'100%',sm:'50%'}}} />

            </Grid>

            </Grid>






       
      


<Grid className='auto' sx={{px:1,pt:8,maxWidth:'1200px'}}>
<Typography sx={{
    pt:{xs:2,sm:8},
    maxWidth:'1200px',
    pb:1,
    px:1,
    fontWeight:'400',
    fontSize:{xs:'1.5em',sm:'1.8em'},
    }} component='h1' className=' auto color '>
       Collections
    </Typography>
    <Box className="flex space-evenly auto wrap gap gap1">

    {
      categories && categories?.map((category : any)=>{
        return <CategoryItem 
        key={category?.categoryName}
        title={category?.categoryName}
        imgHeights={{xs:'200px',sm:'100%',md:'400px'}}

        sx={{my:1,minWidth:{xs:'100px',sm:'120px'}, width:{xs:'49%',sm:'350px',md:'380px'}}}
        
        img={`${category?.img}`} />
      })
    }
    </Box>

</Grid>

  




<Box className="w100 " sx={{my:4,background:'#7eb0b024'}}>

<Grid className='auto' 
             sx={{maxWidth:'1200px',background:'#f9d40100',alignItems:'center'
             ,justifyContent:'space-evenly',width:'100%',py:8}} container>
<Grid  sx={{mt:{xs:4,sm:1}}} maxWidth='lg' item xs={9} md={4}>
  <Box sx={{height:'100%',maxWidth:'550px'}} className='auto'>
    <img src="https://ucarecdn.com/e67a749e-abd8-4d9d-866d-dbc81029a2dc/mypic.jpg" alt="" className="img" />
  </Box>
</Grid>







<Grid  item xs={12} md={6} sx={{}}>
<Container   className='wrap col  auto flex' sx={{py:4,alignItems:'left',display:'flex'}}>

    <Typography sx={{width:'100%',
    pt:{xs:0,sm:0},
    fontSize:{xs:'2em',sm:'3em'},
    fontWeight:700}} component='h1' className='color '>
        About Us
    </Typography>
    <Typography 
    sx={{width:'100%',flex:1,
      maxWidth:'500px',
      alignItems:'left',
    fontSize:{xs:'.8em',sm:'.9em'},fontWeight:300,color:'#4d555e',mt:2}} 
    className='flex left'>
{
  `Shop our collection in Beirut and discover the perfect accessory to elevate your wardrobe. Experience the luxury and authenticity of Lebanese-made bags with Mirach.`
}
    </Typography>
    <Btn 
    onClick={()=>router.push('/about')}
    
    className='  ' sx={{width:'150px',color:'black',mt:2,px:0}}>
    {'Learn More'}

    </Btn>
</Container>

</Grid>

</Grid>

</Box>
   


  </Box>
  )
}

export default PreLoader