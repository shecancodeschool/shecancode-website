import React from 'react'
import Image from 'next/image'
import community from "../public/community.svg"
import train from "../public/train.svg"
import employ from "../public/employ.svg"

const SloganSection = () => {
  return (
    <>
      <div className='w-full  bg-slog text-black py-10'>
        <div className='max-w-screen-xl mx-auto flex flex-wrap justify-evenly gap-16 items-center px-8'>
          
          <div className='flex flex-col xs:flex-row justify-center items-center gap-4'>
            <div className='bg-btn1 p-3 rounded-full'>
              <Image src={community} alt="Community" />
            </div>
            <p className='text-lg md:text-2xl text-black/65'>Community</p>
          </div>
          
          <div className='flex flex-col xs:flex-row justify-center items-center gap-4'>
            <div className='p-3 bg-btn1 rounded-full'>
              <Image src={train} alt="Train" />
            </div>
            <p className='text-lg md:text-2xl text-black/65'>Train</p>
          </div>
          
          <div className='flex flex-col xs:flex-row justify-center items-center gap-4'>
            <div className='p-3 bg-btn1 rounded-full'>
              <Image src={employ} alt="Employ" />
            </div>
            <p className='text-lg md:text-2xl text-black/65'>Employ</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default SloganSection