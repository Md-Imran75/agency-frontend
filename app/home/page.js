
import Blog from '@/components/blogPosts/Blog'
import HeroSection from '@/components/homePageDesign/HeroSection'
import WhyChooseWebLagbe from '@/components/homePageDesign/WhyChooseWebLagbe'
import ServiceSection from '@/components/homePageDesign/service/ServiceSection'
import ServicesFromApi from '@/components/homePageDesign/service/ServicesFromApi'
import Wordpress from '@/components/homePageDesign/wordpress/Wordpress'





const Home = () => {
  return (
    <div className='font-medium'>
      
        
      <div>
        <HeroSection/>
      </div>
      <div>
        <ServiceSection/>
      </div>
      <div>
        <ServicesFromApi/>
      </div>
      <div>
        <Wordpress/>
      </div>

      <div>
        <Blog/>
      </div>
    </div>
  )
}

export default Home
