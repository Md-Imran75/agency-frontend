import {Oswald , Anton , Roboto} from 'next/font/google'

 export const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
  })
   
  export const oswald = Oswald({
    
    subsets: ['latin'],
    display: 'swap',
  })
   
  export const anton = Anton({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
  })