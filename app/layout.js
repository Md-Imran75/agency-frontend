import Footer from '@/components/global/Footer'
import { roboto } from './fonts'
import './globals.css'
import Navbar from '@/components/global/Navbar'
import { ToastContainer } from 'react-toastify'



export const metadata = {
  title: 'WEB LAGBE',
  description: 'Where Innovation Meets Imagination',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      
      
      <body suppressHydrationWarning={true} >
      <Navbar/>
        {children}
        <Footer/>
        <ToastContainer/>
        </body>
    </html>
  )
}
