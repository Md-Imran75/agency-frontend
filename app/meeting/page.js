'use client'
import postOrder from '../lib/postOrder';
import { useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { anton } from '../fonts';
import { userData } from '@/utils/Helper';
import Wrapper from '@/components/wrapper/Wrapper';
import ProtectRoute from '@/utils/ProtectRoute';

const Meeting = () => {




  const notify = () => {
    toast.success('Thanks for book a meeting', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const [order, setOrder] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    userInformation: {}
  })

  const bookMeeting = async (event) => {
    event.preventDefault();
    try {
      if (order.name && order.email && order.phone) {
        const res = await postOrder({ data: order });
      
        if (res) {
          notify();
          setOrder({
            name: '',
            email: '',
            message: '',
            phone: '',
            userName:'',
            userInformation: {},
          });
        }
      }
    } catch (error) {
      
      toast.error('Something went wrong', {
        hideProgressBar: true,
      });
    }
  };



  const handleChange = ({ target }) => {
    const { name, value } = target
    setOrder((order) => ({
      ...order,
      [name]: value
    }))
  }

  useEffect(() => {
    const userInformation = userData();
    const username = userInformation.username
    setOrder((prevOrder) => ({
      ...prevOrder,
      userInformation: userInformation,
      userName: username
    }));
  }, []);

  return (

    <section className="py-10 ">
      
      <Wrapper>
        <div className={`${anton.className} text-center uppercase text-xl md:text-4xl`}>
          <h2 className="text-secondary-400 text-2xl md:text-4xl uppercase font-medium title-font mb-1">Book a meeting with us</h2>
        </div>
        <p className='text-center font-medium mb-20'>
          After a successful booking, we will contact you for next move
        </p>

        <div className='flex md:flex-row flex-col'>


          <div className='md:w-1/2 md:mx-10'>
            <div className='font-bold text-2xl uppercase'>How Our Booking Process Works:</div>
            <div>
              <div className='mt-5'>
                <span className='font-bold'>Fill in the Details:</span><p>Use the form below to provide us with essential details about your project. The more information you provide, the better we can tailor our services to meet your specific needs.
                </p>
              </div>

              <div className='mt-2'>
                <span className='font-bold'>Consultation Call:</span><p>Once we receive your booking, our experts will reach out to you for a detailed consultation. We want to understand your goals, preferences, and expectations to deliver a truly personalized solution.
                </p>
              </div>

              <div className='mt-2'>
                <span className='font-bold'>Transparent Pricing:</span><p>No hidden fees or surprises! We believe in transparent pricing, and our team will provide you with a clear breakdown of the costs involved.
                </p>
              </div>

              <div className='mt-2'>
                <span className='font-bold'>Project Kick-off:</span><p>Once you give the green light, we kick-start the development process. You'll be kept in the loop at every stage, ensuring that your vision is brought to life just as you imagined.
                </p>
              </div>

              <div className='mt-5'>
                <span className='font-bold text-secondary-400'>Ready to Transform Your Online Presence? Book Your Slot Now!</span>

                <p>Simply fill out the form below, and let's embark on a journey to elevate your brand in the digital landscape. At Web Lagbe, we don't just build websites; we craft digital experiences that leave a lasting impression.</p>
                
              </div>
            </div>
          </div>


          <div className='md:mt-0 mt-10 md:w-1/2'>

            <div className='flex flex-col mx-2 border border-background-500 shadow-sm  lg:mx-16 px-10 py-10 bg-primary-100'>

              <div className='text-xl text-black-400 font-bold mb-5 '>Fill this form</div>
              <div className="relative mb-2">
                <input type="text" id="name" name="name" value={order.name} onChange={handleChange} placeholder='Full Name' className="w-full text-sm bg-white rounded border border-black-300  focus:ring-2   outline-none text-black-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>

              <div className="relative mb-2">
                <input type="email" id="email" name="email" placeholder='Email' value={order.email} onChange={handleChange} className="w-full bg-white rounded border border-black-300  focus:ring-2  text-base outline-none text-black-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>


              <div className="relative mb-2">
                <input type="number" id="phone" name="phone" placeholder='phone' value={order.phone} onChange={handleChange} className="w-full bg-white rounded border border-black-300  focus:ring-2  text-base outline-none text-black-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-2">
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  placeholder='message'
                  value={order.message}  // Use the value prop instead of placing content between tags
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-black-300  focus:ring-2  text-base outline-none text-black-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                ></textarea>

              </div>
              <button onClick={bookMeeting} className=" bg-secondary-400 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded uppercase text-lg">Book a meeting</button>



            </div>

          </div>






        </div>
      </Wrapper>
      
    </section>
  );
}

export default Meeting;
