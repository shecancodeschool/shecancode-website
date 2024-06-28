import React from 'react'
import { IoMdArrowForward } from "react-icons/io";


function OpenPos({position}) {
  return (
    <>
     <div className='flex justify-between items-center w-full max-w-[100%] h-24 bg-[#0B2B4E] px-10 rounded-md'>
        <p className='text-white text-xl'>{position}</p>
        <div className='p-4 rounded-full bg-white'>
         <IoMdArrowForward />
        </div>
     </div>
    </>
  )
}

export default OpenPos