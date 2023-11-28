'use client'
import { useState , useEffect } from 'react'
import Image from 'next/image'
import Wrapper from '../wrapper/Wrapper'
import Link from 'next/link'
import { BsMenuButtonWideFill } from "react-icons/bs";
import MobileMenu from './MobileMenu'
import { userData } from '@/utils/Helper'
import Login from '../login/Login'
import Signup from '../signup/SingUp'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

const Navbar = () => {

    const router = useRouter()
    const [isMObileMenuOpen , setMobileMenuOpen] = useState(false)

    //login out logout button show conditionally by if jwt token available
    const [showButton , setShowButton] = useState(false)
    
    //show dashbord buttons in mobile

    const [showDash , setShowDash] = useState(false)
   
    //logout button and profile show
  const [showLogout , setShowLogout] = useState(false)


  //use state for login modal
  
  const [isOpen , setIsOpen] = useState(false)

  //use state for singup modal

  const [isSignupOpen , setSignupOpen] = useState(false)

  //jwt token

  const userDataReturnValue = userData();
  const jwt = userDataReturnValue && userDataReturnValue.jwt;
   
   
   //logout condition start

   useEffect(() => {
    if(jwt){
      setShowButton(true)
    }
   }, [jwt])

   // logout condition end

   // logout toast message start
   const notify = () => {
    toast.success('Logout Successful.', {
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
  
  return (
    <div className='flex text-black-500 flex-col'>
      <div className='w-full bg-primary-500'>
       <div className=' text-[10px] font-bold md:text-[12px] mt-1 md:mt-2  uppercase text-center h-[20px] md:h-[30px]'>
         We love your business - <Link href={'/about'}><span className='text-secondary-400'>Learn About us</span></Link>
       </div>
      </div>

      <div>
      <Wrapper>
      <div  className='flex py-2 justify-between'>
        <div className='md:w-[130px]  w-[100px]'>
        <Link href={'/'}>
        <Image
            src={'/web lagbe.png'}
            height={100}
            width={130}
            alt='logo'
            />
        </Link>
        </div>
        <div className='md:block mt-2 hidden'>
            <div className='flex justify-start text-[17px] gap-5'>
            <div ><Link href={'/'}>Home</Link> </div>
            <div><Link href={'/about'}>About Us</Link> </div>
            <div><Link href={'/meeting'}>Meeting</Link> </div>
            <div><Link href={'/blogs'}>Blog</Link> </div>
            <div><Link href={'/privacy-policy'}>Privacy Policy</Link> </div>
            </div>
        </div>

        <div className='mt-2 md:hidden text-black-500 md:invisible visible text-[20px]'>
        <button onClick={() => setMobileMenuOpen(!isMObileMenuOpen)}>
          <BsMenuButtonWideFill/>
        </button>
      </div>

        <div className='mt-0 md:mt-2'>
           {/*Login and logout  Button Start */}

                { showButton ? (

                  <div className='flex justify-between gap-5'>
                
                   <div className='cursor-pointer' onClick={() => setShowDash(!showDash)}>
                    <div className='w-[35px] h-[35px] rounded-full bg-primary-500'>
                       <div className='text-black-500 text-[20px] text-center font-bold pt-1 '>W</div>
                    </div>
                   </div>
                  
                  <div>
                  <button
                    className='bg-secondary-400 text-white text-[10px] md:text-[15px] px-1 md:py-1 md:px-3 py-[4px] md:mt-0 mt-[5px] rounded-sm '
                    onClick={() => {
                      localStorage.setItem('user', '')
                      setShowButton(false)
                      notify()
                
                      router.push('/')
                    }}
                    >Logout</button>
                  </div>
                 
                  </div>
                ) :(
                  <div>

              <div>
              <button
                className='bg-secondary-400 text-white text-[10px] md:text-[15px] px-1 md:py-1 md:px-3 py-[4px] md:mt-0 mt-[5px] rounded-sm '
                onClick={() => setIsOpen(!isOpen)}
                >Login</button>
              </div>
             
              </div>
                )}           
                  
              {/*Login and logout Button End*/}
        </div>
      </div>
      </Wrapper>
      </div>
      
      {/* Login Modal Start */}
     {isOpen && <Login setIsOpen={setIsOpen} setShowLogout={setShowLogout} setSignupOpen={setSignupOpen} />}
     {/* Login Modal end */}

     {/* SIngUp Modal start */}
     {isSignupOpen && !isOpen && <Signup setSignupOpen={setSignupOpen} setIsOpen={setIsOpen} />}

     {/* SingUp Modal end */}


   {/* MObile menu section start */}
      {
        isMObileMenuOpen && <MobileMenu/>
      }
   {/* MObile menu section end */}

   {/* Dasbord menu start */}
    
    {showDash && showButton && (
      <div className='absolute   top-[70px] right-[50px] h-[150px] px-5 py-5 my-5 w-[200px] flex flex-col bg-white shadow-md'
     >
       <Link className='mb-[3px] hover:bg-primary-100 border-b-2 border-b-background-500 py-1 px-2' href={'/dashbord'}>Dashbord</Link>
          <Link className='mb-[3px] hover:bg-primary-100 border-b-2 border-b-background-500  py-1 px-2' href={'/dashbord/meeting'}>My Meeting</Link>
          <Link className='mb-[3px] border-b-2 hover:bg-primary-100 border-b-background-500  py-1 px-2' href={'/dashbord/profile'}>My Profile</Link>
      </div>
    )}

   {/* Dasbord menu end */}

      
    </div>
  )
}

export default Navbar
