'use client'
import React from 'react'
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BiArrowBack } from "react-icons/bi";

const CarouselDesign = ({image}) => {
  return (
    <div>
        <Carousel
                
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
                useKeyboardArrows={true}
              
                renderArrowPrev={(clickHandler, hasPrev) => (
                    <div
                        onClick={clickHandler}
                        className="absolute right-[60px] md:right-[60px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                    >
                        <BiArrowBack className=" text-white text-lg" />
                    </div>
                )}
                renderArrowNext={(clickHandler, hasNext) => (
                    <div
                        onClick={clickHandler}
                        className="absolute right-[30px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                    >
                        <BiArrowBack className="rotate-180 text-white text-lg " />
                    </div>
                )}
            >
                

             {image.map((item) => {
                return(
                    
                    <div key={item.id}>
                    <Image
                    src={item.attributes.url}
                    alt={item.attributes.name}
                    height={300}
                    width={1200}
                    loading='lazy'
                    />
                     </div>
                

                )
             })}
                
            </Carousel>
    </div>
  )
}

export default CarouselDesign
