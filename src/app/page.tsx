import PreLoader from '@/Components/PreLoader'
import { Getcategories } from '@/Utils/Getcategories'
import { Getproducts } from '@/Utils/Getproducts'


const Home = async () => {
  const categoriesData = await Getcategories()
  const productsResponse = await Getproducts()
  const categories = categoriesData?.Categories[0]?.cateArray;

  return (
    <PreLoader
    categories={categories}
    resImages={null}
    data={productsResponse?.data?.featuredProducts}
  />
  )
}

export const revalidate = 0
export default Home