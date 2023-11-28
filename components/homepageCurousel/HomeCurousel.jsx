import getAnything from '@/app/lib/getAnything'
import CarouselDesign from './CarouselDesign'

const HomeCurousel = async() => {
   const res = await getAnything('/api/home-curousel?populate=*')
   const data = await res?.data
   const image = await data?.attributes?.image?.data
   
  
  return (
    <div>
      <CarouselDesign image={image} />
    </div>
  )
}

export default HomeCurousel
