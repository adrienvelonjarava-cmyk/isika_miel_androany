import ProductList from "@/components/ProductList"
import AutoImageCarousel from "@/components/AutoImageCarousel"
import Image from "next/image"
import FeaturedHoneyProduct from "@/components/FeaturedHoneyProduct";


const Homepage = async ({searchParams} : {searchParams: Promise<{category: string}>}) => {
  const category = (await searchParams).category;
  return (
    <div className="">
      <ProductList category={category} params="homepage"/>
    </div>
  )
}

export default Homepage