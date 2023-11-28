'use client'
import DashbordMain from '@/components/dashbord/DashbordMain';
import { userData } from '@/utils/Helper'
import ProtectRoute from '@/utils/ProtectRoute';
import { useState, useEffect } from 'react';

const Dashbord = () => {

  const [name, setName] = useState()
  const [userName, setUserName] = useState()


  // if (!isJwtTokendivresent()) {
  //   if(tydiveof window !== 'undefined'){
  //     window.location.href = '/';
  //     return null;
  //   }
  // }


  useEffect(() => {
    const { name, username } = userData()
    setName(name)
    setUserName(username)
  }, []);





  return (
    <ProtectRoute>
    <div className='md:flex-row  overflow-hidden text-black-500 mt-10 flex-col flex'>
     
      <div className='xl:block hidden w-1/4'>
        <DashbordMain />
      </div>
      <div className=' xl:w-3/4 mx-10 xl:pr-10'>
        <div className='text-2xl uppercase font-bold '>
          🚀 Welcome to Web Lagbe - Your Gateway to Seamless Web Solutions! 🚀</div>
        <div className='mt-10 uppercase font-bold mb-2 text-xl '>{`Welcome Back, ${name}`}</div>
        <div>
          <div>Embark on a journey of digital excellence with Web Lagbe, your trusted partner in crafting exceptional WordPress and Full Stack websites. As you step into our exclusive client login portal, you open the door to a world where innovation meets functionality.

            <div className='font-bold mt-5 mb-2'>Why Choose Web Lagbe?</div>

            <div className='mt-1'><span className='font-bold'> Wordpress Wizards:</span> Our team of experts breathes life into your vision, creating stunning, user-friendly WordPress websites that captivate your audience.</div>

            <div className='mt-1'><span className='font-bold'> Full Stack Brilliance:</span> Elevate your online presence with our Full Stack prowess. From front-end finesse to back-end robustness, we've got you covered.</div>

            <div className='mt-1'><span className='font-bold'> Seamless Collaboration:</span> Experience a client portal designed for YOU. Effortlessly communicate, review, and track the progress of your project in real-time.</div>

            <div className='mt-1'><span className='font-bold'> Timely Updates:</span> Stay in the loop with regular updates on your project. Our commitment to transparency ensures you're always in control.</div>

            <div className='mt-1 mb-2'><span className='font-bold'>Security First:</span> Trust is the foundation of our client relationships. Rest easy knowing your data is secure with our state-of-the-art security measures.</div>


            Web Lagbe - Where Your Vision Meets the Web!

          </div>
        </div>
      </div>

      
    </div>
    </ProtectRoute>
  )
}

export default Dashbord