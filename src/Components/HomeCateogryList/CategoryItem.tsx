"use client"
import {Box, Typography} from "@mui/material"
import {useRouter} from "next/navigation"
import Btn from "../Btn/Btn"
// import {ICategoryItem} from "../../src/Types"


const CategoryItem = ({img, imgHeights,phone,sx, href, title} : any) => {
    const router = useRouter()

    return (
        <Box
            className='box flex col'
            sx={{
            display : {xs:phone ? 'flex' : 'none',sm:'flex'},

            position: 'relative',
            // m: '5px',
            transition: '.2s ease',
            overflow: 'hidden',
            ...sx
        }}>
       
            <Box
            onClick={() => router.push(`/${href}`)}

                className='layered cursor pointer'
                sx={{
                width: '100%',
                // position: 'absolute',
                height: imgHeights,
                borderRadius: '4px'
            }}>
                
                <img  className='img BR' src={`${img}`} alt="Category Image"/>
            </Box>

            <Btn 
            onClick={() => router.push(`/${href}`)}
            
            v2 className='flex center items-center row gap gap1 justify-center' 
            sx={{
                mt:.1,padding:' .5em',width:'fit-content'}}>
                <Typography component='h1' sx={{color:'black',fontSize:{xs:'.8em',sm:'1em'}}} >
                    {title}
                </Typography>
                <Box sx={{width:'20px',height:'20px'}}>

                <img 
                src='https://cdn-icons-png.flaticon.com/128/664/664866.png' className='img topd cover'/>
                </Box>
            </Btn>
        </Box>
    )
}
export default CategoryItem