import PreLoader from '@/Components/PreLoader'
import { Getcategories } from '@/Utils/Getcategories'
import { Getproducts } from '@/Utils/Getproducts'
import React from 'react'

const Home = async () => {
  const categoriesData = await Getcategories()
  const productsData = await Getproducts()
  const categories = categoriesData?.Categories[0]?.cateArray;

  return (
    <PreLoader
    categories={categories}
    resImages={null}
    data={productsData}
  />
  )
}




export const revalidate = 5
export default Home