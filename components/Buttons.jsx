import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

export const ButtonOne = ({ text }) => {
  return (
    <>
     <div>
      <button className='bg-btn1 px-[24px] py-[12px] font rounded text-[16px]' >{ text }</button>
     </div>
    </>
  )
}

export const ButtonTwo = ({ text }) => {
  return (
    <div>
      <button className='border px-8 py-3 rounded'>{ text }</button>
    </div>
  )
}

export const CarrersButton = ({text}) => {
  return (
    <div className='flex justify-center items-center'>
      <button className='px-8 py-3 rounded bg-blue-500 flex justify-center items-center gap-2'>
        { text }
        <IoIosArrowDown/>
      </button>
    </div>
  )
}