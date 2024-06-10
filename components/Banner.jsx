import React from 'react'
import Image from 'next/image'
import banner_img from "../public/banner_img.png"
import {ButtonOne, ButtonTwo} from "./Buttons"

const Banner = () => {
  return (
    <>
     <div className="relative h-screen isolate flex flex-col justify-end overflow-hidden">
     <div className="absolute top-0 left-0 w-full h-full bg-opacity-75 bg-[#011225]"></div>
       <Image src={banner_img} alt="SheCanCODE_grad" className="inset-0 h-full w-full object-cover"/>
       <div className='absolute inset-0 flex flex-col md:mt-4 mt-6 justify-center items-center place-content-center gap-14 text-white p-4 md:p-0'>
         <h3 className="z-10 mt-3 text-xl md:text-[50px] text-[20px] text-center font">UNLOCK YOUR CREATIVE POTENTIAL</h3>
         <div className="text-center">
           <p className='z-10 font md:text-[24px] text-[18px] '>The ShecanCode bootcamp, one of the original programs in the country,</p>
           <p className='z-10 font md:text-[24px] text-[18px] '>cultivates artists who are inventive, rigorous, and engaged</p>
         </div>
         <div className='w-full flex justify-center items-center gap-5'>
         <button className='bg-btn1 md:px-10 md:py-3 py-2 px-6 rounded md:text-[30px] text-[15px] border  border-btn1 font ' >Enroll Now</button>
         <button className='border border-white md:px-10 md:py-3 py-2 px-6 rounded md:text-[30px] text-[15px] font hover:bg-white hover:text-blue-950 hover:border-white transition-all duration-400 ease-in-out  hover:shadow-lg hover:transform'>Get started</button>
         </div>
       </div>
     </div>

    </>
  )
}

export default Banner;
