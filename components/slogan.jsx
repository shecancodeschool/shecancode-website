import React from 'react'
import Image from 'next/image'
import community from "../public/community.svg"
import train from "../public/train.svg"
import employ from "../public/employ.svg"

const Slogan = () => {
  return (
    <>
      <div className='w-full  bg-slog text-black py-[40px]'>
        <div className='max-w-[809px] mx-auto flex flex-wrap justify-evenly gap-[67px] items-center'>
          <div className='md:w-[225px] flex flex-col xs:flex-row justify-center items-center gap-[16px] '>
            <div className=' bg-btn1 p-3 rounded-full'>
              <Image src={community} alt="Community" height={30} width={30} />
            </div>
            <p className='md:text-[24px]  text-[#317ACC]'>Community</p>
          </div>
          <div className='md:w-[225px] flex flex-col xs:flex-row justify-center items-center gap-[16px] '>
            <div className='p-3 bg-btn1 rounded-full'>
              <Image src={train} alt="Train" height={30} width={30} />
            </div>
            <p className='md:text-[24px] text-[#317ACC]'>Train</p>
          </div>
          <div className='md:w-[225px] flex flex-col xs:flex-row justify-center items-center gap-[16px] '>
            <div className='p-3 bg-btn1 rounded-full'>
              <Image src={employ} alt="Employ" height={30} width={30} />
            </div>
            <p className='md:text-[24px] text-[#317ACC]'>Employ</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Slogan