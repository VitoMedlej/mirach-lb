"use client"
import React, {useEffect} from 'react'
import {Box, Container, Divider, Grid, Typography} from "@mui/material"
import MainCarousel from './MainCarousel/MainCarousel'
import {useRouter} from 'next/navigation'
import Btn from './Btn/Btn'
// import ContactSection from './ContactSection/ContactSection'
import CategoryItem from './HomeCateogryList/CategoryItem'
import {useCategoriesContext} from '@/context/Contexts'
import HomeProductCollection from './HomeProductCollection/HomeProductCollection'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HomeProductsCarousel from './HomeProductsCarousel/HomeProductsCarousel'

gsap.registerPlugin(ScrollTrigger);
const PreLoader = ({data, resImages, categories} : any) => {

    const {setCategories} = useCategoriesContext()
    const router = useRouter();
    // const collection = data?.slice(0, Number(data?.length / 2))
    const collection = data?.slice(0, 3)
    // const carouselProducts = data?.slice(Number(data?.length / 2), 50)
    const carouselProducts : any = null


    useEffect(() => {

        if (categories) {
            setCategories(categories)
        }
        gsap.utils.toArray('.animate-on-scroll').forEach((element: any)  => {
          gsap.fromTo(element,
            {
              opacity: 0,
              y:20,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              scrollTrigger: {
                  trigger: element,
                  start: 'top 70%',
                  markers:false,
              },
          });
      });
    }, [])

    return (

        <Box >

            <MainCarousel resImages={resImages}/> 

            <Box
                className="flex justify-between col center text-center auto"
                sx={{
                px: 1,
                pt: 4,
                pb: 4,
                maxWidth: 'lg'
            }}>

                <Typography
                    component={'h1'}
                    className=' clr2 center text-center box animate-on-scroll'
                    sx={{
                    fontSize: {
                        xs: '1.5em',
                        sm: '2em'
                    },
                    padding: .5,
                    fontWeight: '700'
                }}>
                   Twinkle like star
                </Typography>

                <Typography
                    component={'p'}
                    className='sectionTitle   center text-center box animate-on-scroll'
                    sx={{
                    fontWeight: '200'
                }}>
                    {/* {`The perfect way to elevate your style is with a personalized, handcrafted bag from Mirach.`} */}
                    {
                      `Mirach is a Lebanese handbag line that creates unique and luxury hand crafted bags and accessories. Proudly crafted and produced in Lebanon, our pieces are manufactured with high quality materials, making each item a unique presentation.`
                    }
                </Typography>

            </Box>

            <HomeProductCollection products={collection}/>

            <Typography
                sx={{
                pt: {
                    xs: 8,
                    md: 14
                },
                mt: {
                    xs: 4,
                    sm: 12
                },
                mx: 'auto',
                maxWidth: '1200px',
                pb: 1,
                px: 1,
                fontWeight: '400',
                fontSize: {
                    xs: '1.5em',
                    sm: '1.8em'
                }
            }}
                component='h1'
                className=' animate-on-scroll color '>
                Explore
            </Typography>
            <Grid
  container
  className='flex auto space-evenly row wrap'
  sx={{
    px: 1,
    maxWidth: '1200px'
  }}
>
  {categories && categories.slice(0, 3).map((category : any, index : any) => {
    if (index === 0) {
      return (
        <Grid
          key={category?.categoryName}
          sx={{
            height: {
              xs: '100%',
              sm: '550px',
              md: '750px'
            }
          }}
          item
          xs={12}
          sm={7.5}
          md={6.6}
        >
          <CategoryItem
            href={`${encodeURIComponent(category?.categoryName?.toLowerCase())}/products`}
            title={category?.categoryName}
            imgHeights={{
              xs: '100%',
              md: '730px'
            }}
            img={category?.img}
            sx={{
              width: '100%',
              height: {
                xs: '100%',
                sm: '100%',
                md: '730px'
              }
            }}
          />
        </Grid>
      );
    } else if (index === 1) {
      return (
        <Grid
          key="small-items-container"
          className='flex justify-between'
          sx={{
            height: {
              xs: '100%',
              sm: '550px',
              md: '750px'
            },
            mt: {
              xs: 1,
              sm: 0
            },
            flexDirection: {
              xs: 'row',
              sm: 'column'
            }
          }}
          item
          xs={12}
          sm={4}
          md={4.8}
        >
          <CategoryItem
            href={`${encodeURIComponent(category?.categoryName?.toLowerCase())}/products`}
            title={category?.categoryName}
            imgHeights={{
              xs: '100%',
              sm: '230px',
              md: '325px'
            }}
            img={category?.img}
            sx={{
              width: {
                xs: '49%',
                sm: '100%'
              },
              height: {
                xs: '100%',
                sm: '50%'
              }
            }}
          />
          {categories[2] && (
            <CategoryItem
              href={`${encodeURIComponent(categories[2]?.categoryName?.toLowerCase())}/products`}
              title={categories[2]?.categoryName}
              imgHeights={{
                xs: '100%',
                sm: '230px',
                md: '325px'
              }}
              img={categories[2]?.img}
              sx={{
                width: {
                  xs: '49%',
                  sm: '100%'
                },
                height: {
                  xs: '100%',
                  sm: '50%'
                }
              }}
            />
          )}
        </Grid>
      );
    }
  })}
</Grid>

            <Grid
                className='auto'
                sx={{
                px: 1,
                pt: {
                    xs: 8,
                    md: 14
                },
                mt: {
                    xs: 4,
                    sm: 12
                },
                maxWidth: '1200px'
            }}>
                <Typography
                    sx={{
                     
                    maxWidth: '1200px',
                    pb: 1,
                    px: 1,
                    fontWeight: '400',
                    fontSize: {
                        xs: '1.5em',
                        sm: '1.8em'
                    }
                }}
                    component='h1'
                    className=' auto animate-on-scroll color '>
                    Collections
                </Typography>
                <Box className="flex space-evenly auto wrap gap gap1">

                    {categories && categories.slice(3,25)
                        ?.map((category : any) => {
                            return <CategoryItem
                                href={`${encodeURIComponent(category
                                ?.categoryName
                                    ?.toLowerCase())}/products`}
                                key={category
                                ?.categoryName}
                                title={category
                                ?.categoryName}
                                imgHeights={{
                                xs: '200px',
                                sm: '100%',
                                md: '400px'
                            }}
                                sx={{
                                my: 1,
                                minWidth: {
                                    xs: '100px',
                                    sm: '120px'
                                },
                                width: {
                                    xs: '49%',
                                    sm: '350px',
                                    md: '380px'
                                }
                            }}
                                img={`${category
                                ?.img}`}/>
                        })
}
                </Box>

            </Grid>

            <HomeProductsCarousel 
                Collectiontitle="New Products"
                data={carouselProducts} 
                delay={2500} />

            <Box
                className="w100 "
                sx={{
                my: 4,
                background: '#7eb0b024'
            }}>

                <Grid
                    className='auto'
                    sx={{
                    maxWidth: '1200px',
                    background: '#f9d40100',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    width: '100%',
                    py: 8
                }}
                    container>
                    <Grid
                        sx={{
                        mt: {
                            xs: 4,
                            sm: 1
                        }
                    }}
                        maxWidth='lg'
                        item
                        xs={9}
                        md={4}>
                        <Box
                            sx={{
                            height: '100%',
                            maxWidth: '550px'
                        }}
                            className='auto animate-on-scroll'>
                            <img
                                src="https://ucarecdn.com/e67a749e-abd8-4d9d-866d-dbc81029a2dc/mypic.jpg"
                                alt=""
                                className="img"/>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6} sx={{}}>
                        <Container
                            className='wrap col  auto flex'
                            sx={{
                            py: 4,
                            alignItems: 'left',
                            display: 'flex'
                        }}>

                            <Typography
                                sx={{
                                width: '100%',
                                pt: {
                                    xs: 0,
                                    sm: 0
                                },
                                fontSize: {
                                    xs: '2em',
                                    sm: '3em'
                                },
                                fontWeight: 700
                            }}
                                component='h1'
                                className='color animate-on-scroll '>
                                About Us
                            </Typography>
                            <Typography
                                sx={{
                                width: '100%',
                                flex: 1,
                                maxWidth: '500px',
                                alignItems: 'left',
                                fontSize: {
                                    xs: '.8em',
                                    sm: '.9em'
                                },
                                fontWeight: 300,
                                color: '#4d555e',
                                mt: 2
                            }}
                                className='flex left animate-on-scroll'>
                                {`Shop our collection in Beirut and discover the perfect accessory to elevate your wardrobe. Experience the luxury and authenticity of Lebanese-made bags with Mirach.`
}
                            </Typography>
                            <Btn
                                onClick={() => router.push('/about')}
                                className='animate-on-scroll  '
                                sx={{
                                width: '150px',
                                color: 'black',
                                mt: 2,
                                px: 0
                            }}>
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