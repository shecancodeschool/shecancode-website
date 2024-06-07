import React from 'react'
import Image from 'next/image'
import community from "../public/community.svg"
import train from "../public/train.svg"
import employ from "../public/employ.svg"

const slogan = () => {
  return (
    <>
      <div className='w-full max-w-3/4 flex justify-evenly align-middle bg-slog text-black py-5'>
        <div className='flex flex-col xs:flex-row justify-center items-center gap-2'>
         <div className='p-3 bg-btn1 rounded-full'>
           <Image src={community} />
         </div>
         <p>Community</p>
        </div>
        <div className='flex flex-col xs:flex-row justify-center items-center gap-2'>
         <div className='p-3 bg-btn1 rounded-full'>
           <Image src={train} />
         </div>
         <p>Train</p>
        </div>
        <div className='flex flex-col xs:flex-row justify-center items-center gap-2'>
          <div className='p-3 bg-btn1 rounded-full'>
           <Image src={employ} />
          </div>
         <p>Employ</p>
        </div>
      </div>
    </>
  )
}

export default slogan