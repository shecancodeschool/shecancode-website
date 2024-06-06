import React from 'react'
import Image from 'next/image'
import banner_img from "../public/banner_img.png"
import {ButtonOne, ButtonTwo} from "./Buttons"

const Banner = () => {
  return (
    <>
      <div className="relative h-screen isolate flex flex-col justify-end overflow-hidden">
        <Image src={banner_img} alt="SheCanCODE_grad" className="inset-0 h-full w-full object-cover"/>
        <div className='absolute bottom-10 left-10 md:bottom-52 md:left-60 flex flex-col justify-center items-start md:items-center gap-3 text-white p-4 md:p-0'>
          <h3 className="z-10 mt-3 text-xl md:text-3xl font-bold text-left md:text-center">UNLOCK YOUR CREATIVE POTENTIAL</h3>
          <div>
           <p className='z-10 text-left md:text-center'>The ShecanCode bootcamp, one of the original programs in the country,</p>
           <p className='z-10 text-left md:text-center'>cultivates artists who are inventive, rigorous, and engaged</p>
          </div>
          <div className='w-full flex justify-center items-center gap-5'>
            <ButtonOne text="Enroll Now"/>
            <ButtonTwo text="Get Started"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner;