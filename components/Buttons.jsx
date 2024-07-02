import React from 'react'

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