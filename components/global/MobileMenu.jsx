import React from 'react'
import Link from 'next/link'
const MobileMenu = () => {
  return (
    <div>
      <div className='absolute w-full h-full md:invisible visible bg-white'>
            <div className='flex flex-col text-[17px] items-start px-3'>
            <div className='my-1 py-1 px-2 bg-primary-100 w-full'><Link href={'/'}>Home</Link> </div>
            <div className='my-1 py-1 px-2 bg-primary-100 w-full'><Link href={'/about'}>About Us</Link> </div>
            <div className='my-1 py-1 px-2 bg-primary-100 w-full'><Link href={'/meeting'}>Meeting</Link> </div>
            <div className='my-1 py-1 px-2 bg-primary-100 w-full'><Link href={'/blogs'}>Blog</Link> </div>
            <div className='my-1 py-1 px-2 bg-primary-100 w-full'><Link href={'/privacy-policy'}>Privacy Policy</Link> </div>
            </div>
        </div>
    </div>
  )
}

export default MobileMenu
