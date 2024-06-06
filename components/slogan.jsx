import React from 'react'
import Image from 'next/image'
import community from "../public/community.png"
import train from "../public/train.png"
import employ from "../public/employ.png"

const slogan = () => {
  return (
    <>
      <div className='flex justify-center align-middle'>
        <div className='flex gap-2'>
         <Image src={community}/>
         <p>Community</p>
        </div>
        <div className='flex gap-2'>
         <Image src={train}/>
         <p>Train</p>
        </div>
        <div className='flex gap-2'>
         <Image src={employ}/>
         <p>Employ</p>
        </div>
      </div>
    </>
  )
}

export default slogan