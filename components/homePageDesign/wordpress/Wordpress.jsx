import React from 'react'
import { anton } from '@/app/fonts'
import Wrapper from '@/components/wrapper/Wrapper'
import { FaShoppingBasket , FaEthernet , FaGoogleWallet , FaPenAlt , FaGlobe , FaFileWord } from "react-icons/fa";
import HomeCurousel from '@/components/homepageCurousel/HomeCurousel';

const Wordpress = () => {
  return (
    <div className='mt-10 bg-background-500 py-10'>
   <Wrapper>
    <div className='bg-white py-10 px-5'>
    <div className={`text-xl md:text-2xl uppercase text-black-500  font-bold`}>Unlocking the Power of WordPress with <span className='text-secondary-400'>Web Lagbe</span> </div>
    <div className=' grid mt-10 grid-flow-row lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2'>
   
    <div className='border border-background-500 shadow-md px-2 py-2 text-center'>
      <div className='text-[30px] my-1'><FaShoppingBasket className='mx-auto'/></div>
      <div>E-commerce</div>
      <div className='font-bold'>From 300$</div>
    </div>
    <div className='border border-background-500 shadow-md px-2 py-2 text-center' >
      <div className='text-[30px] '><FaEthernet className='mx-auto'/></div>
      <div>Business</div>
      <div className='font-bold'>From 200$</div>
    </div>
    <div className='border border-background-500 shadow-md px-2 py-2 text-center'>
      <div className='text-[30px] '><FaGoogleWallet className='mx-auto'/></div>
      <div>Corporate</div>
      <div className='font-bold'>From 200$</div>
    </div>
    <div className='border border-background-500 shadow-md px-2 py-2 text-center'>
      <div className='text-[30px] '><FaPenAlt className='mx-auto'/></div>
      <div>Educational</div>
      <div className='font-bold'>From 250$</div>
    </div>
    <div className='border border-background-500 shadow-md px-2 py-2 text-center'>
      <div className='text-[30px] '><FaGlobe className='mx-auto'/></div>
      <div>Personal Blog</div>
      <div className='font-bold'> From 150$</div>
    </div>
    
    <div className='border   border-background-500 shadow-md px-2 py-2 text-center'>
      <div className='text-[30px] '><FaFileWord className='mx-auto'/></div>
      <div>News Portal</div>
      <div className='font-bold'>From 300$</div>
    </div>

    </div>
     
     <div className='flex my-10 flex-col md:flex-row'>
      <div className='w-full md:w-1/2'>
        <HomeCurousel/>
      </div>
      <div className='w-full md:mt-0 mt-5 md:w-1/2'>
        <div className=' md:mx-5 font-bold uppercase text-xl md:text-2xl text-black-500'>Why WordPress? Why Web Lagbe?</div>

        <div className='md:mx-5 mt-5 overflow-y-scroll h-[235px]'>
          <div className='mb-2'><span className='font-bold'>Versatility at its Core:</span> WordPress is not just a platform; it's a canvas waiting for your unique brushstroke. Whether you're a small business, an e-commerce giant, or a creative professional, our WordPress solutions are crafted to suit your specific needs. From sleek blogs to dynamic corporate websites, we have the expertise to make your vision a reality.</div>
          <div className='mb-2'>
          <span className='font-bold'>User-Friendly Interface:</span> At Web Lagbe, we understand the importance of simplicity. Our WordPress websites are designed with user-friendly interfaces, making it easy for you to manage and update your content without the need for technical expertise.
          </div>
          <div className='mb-2'>
          <span className='font-bold'>Responsive Design:</span> In a world where users access websites on various devices, responsiveness is key. Our WordPress websites are not just visually stunning but also seamlessly adapt to different screen sizes, ensuring a consistent and enjoyable user experience across devices.
          </div>
          <div className='mb-2'>
          <span className='font-bold'>Customization without Complication:</span> Tailoring your website to reflect your brand identity has never been easier. With our WordPress development services, you have the power to customize every element of your site, from themes and layouts to plugins and functionalities.
          </div>

        </div>
      </div>
     </div>
    </div>
   </Wrapper>
    </div>
  )
}

export default Wordpress
