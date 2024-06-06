import React from 'react'
import Image from 'next/image'
import banner_img from "../public/banner_img.png"

const Banner = () => {
  return (
    <>
      <div className="relative isolate flex flex-col justify-end overflow-hidden px-8 pb-8 pt-40 mx-auto mt-24">
        <Image src={banner_img} alt="SheCanCODE_grad" className="absolute inset-0 h-full w-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/40"></div>
        <div className='flex flex-col gap-3'>
         <h3 className="z-10 mt-3 text-3xl font-bold text-white">UNLOCK YOUR CREATIVE POTENTIAL</h3>
         <p className='z-10'>The ShecanCode bootcamp, one of the original  programs in the country,</p>
         <p className='z-10'> cultivates artists who are inventive, rigorous, and engaged</p>
        </div>
        <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
            <button></button>
        </div>
      </div>
    </>
  )
}

export default Banner