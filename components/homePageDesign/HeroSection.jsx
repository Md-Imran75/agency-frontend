import React from 'react'
import { anton } from '../../app/fonts'
import Link from 'next/link'
import Wrapper from '../wrapper/Wrapper'
const HeroSection = () => {
  return (
    <div className='py-8 md:py-14  w-full'>
      <Wrapper>
      <div className={`${anton.className} text-2xl md:text-4xl text-center text-black-500 mt-[20px]`}>
        Welcome to <span className='text-secondary-400  uppercase'> Web Lagbe</span> <br /> Your Gateway to Exceptional  Web Development
        </div>

        <div className='text-center px-0 text-[15px] font-medium md:px-[200px] mt-5'>
        At Web Lagbe, we don't just build websites; we craft digital experiences that leave a lasting impression. Your online presence is more than just a collection of pages—it's your brand, your identity, and the first interaction many potential clients will have with your business. We understand the significance of a well-designed, functional website, and we're here to bring your vision to life.
        </div>

        <div className={`${anton.className} text-[15px] text-center  mt-7`}>
          <Link href={'/about'}>
          <button className='uppercase  bg-primary-500 px-[10px] rounded-md mr-5 text-black-500 py-[5px]'>About Us</button>
          </Link>
          <Link href={'/meeting'}>
          <button  className='uppercase bg-primary-500 px-[10px] rounded-md text-black-500  py-[5px]'>Book a meeting</button>
          </Link>
        </div>
      </Wrapper>
    </div>
  )
}

export default HeroSection
