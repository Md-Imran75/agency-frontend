import React from 'react'
import Wrapper from '../wrapper/Wrapper'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";


const Footer = () => {
  return (
    <div className='text-[15px] border-t-2  bg-white border-t-background-500 mt-10  md:text-[15px]'>
      <Wrapper>
        <div className='py-3 mt-5 '>
          <div className='grid grid-flow-row lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2'>
            <div className='mx-3'>
               <div>
               <Link href={'/'}>
               <Image
                src={'/web lagbe.png'}
                height={80}
                width={130}
                alt='footer logo'
                />
               </Link>
               </div>

               <div className='mt-2 md:mr-10 text-justify'>
               In the ever-evolving digital landscape, staying ahead is not just an advantage; it's a necessity. At Web Lagbe, we pride ourselves on being at the forefront of web development trends and technologies. 
               </div>
            </div>

            <div className='mx-3 md:my-0 my-5'>
              <div className='uppercase font-bold'>Important</div>
              <div className='uppercase mt-2 md:mt-8'><Link href={'/'}>Home</Link></div>
              <div className='uppercase '><Link href={'/about'}>About Us</Link></div>
              <div className='uppercase '><Link href={'/blogs'}>Blog</Link></div>

            </div>
            <div className='mx-3'>
              <div className='uppercase font-bold'>Must Watch</div>
              <div className='uppercase mt-2 md:mt-8'><Link href={'/privacy-policy'}>Privacy policy</Link></div>
              <div className='uppercase '><Link href={'/meeting'}>Book a meeting</Link></div>
              <div className='uppercase '><Link href={'/dashbord/meeting'}>My meeting</Link></div>


            </div>
            <div className='mx-3  gap-2'>
              <div className='uppercase font-bold'>Follow us</div>
              <div className='flex mt-2  md:mt-8 gap-5 text-black-500 text-[25px] flex-row justify-start'>
              <div className=' '><a href="https://www.facebook.com/weblagbedotcom"><FaFacebook/></a></div>
              <div className=''><a href=""> <IoLogoYoutube/> </a></div>
              </div>
            
            </div>
          </div>


          <div className='text-center mt-5 py-2 border-t-2 uppercase border-t-background-500'>@2023 WEB LAGBE - Developed by WEB LAGBE</div>


        </div>
      </Wrapper>
    </div>
  )
}

export default Footer
