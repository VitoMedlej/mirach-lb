import PreLoader from '@/Components/PreLoader'
import { Getcategories } from '@/Utils/Getcategories'
import { Getimages } from '@/Utils/Getimages'
import { Getproducts } from '@/Utils/Getproducts'


const Home = async () => {
  const categoriesData = await Getcategories()
  const productsResponse = await Getproducts()
  const ImagesResponse = await Getimages()
  // DO NOT ask me why the data is nested the way it is
  // I wrote it at 1am in the morning, HALF ASLEEP  
  const categories = categoriesData?.Categories[0]?.cateArray;
  const images = ImagesResponse?.data?.Images[0]?.imagesArray;

  return (
    <PreLoader
    categories={categories}
    resImages={images}
    data={productsResponse?.data?.featuredProducts}
  />
  )
}

export const revalidate = 0
export default Home