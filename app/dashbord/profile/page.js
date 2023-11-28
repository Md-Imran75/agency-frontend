'use client'
import React, { useEffect , useState } from 'react'
import { userData } from '@/utils/Helper'
import DashbordMain from '@/components/dashbord/DashbordMain'
import Link from 'next/link'

const Profile = () => {
    const [name, setName] = useState()
    const [userName, setUserName] = useState()
  
  
    useEffect(() => {
      const { name, username } = userData()
      setName(name)
      setUserName(username)
    }, []);
  
  return (
    <div className='mt-10'>
      <div>
      <div className='xl:block hidden w-1/3'>
            <DashbordMain/>
        </div>
      <div className=' md:w-1/3 mx-5 md:mx-auto'>
          <div className='text-2xl font-bold'>{`Welcome Back, ${name}`}</div>
          <div className='text-lg'>{`Username: ${userName}`}</div>
          <div className='text-md font-bold mt-5'>What you want?</div>
          <div className='mt-2 '><Link href={'/meeting'}><button className='px-1 py-1 uppercase bg-secondary-400 text-sm text-white'>Book a meeting</button></Link></div>
      </div>
      </div>
      
    </div>
  )
}

export default Profile
