import React from 'react'

export const ButtonOne = ({ text }) => {
  return (
    <>
     <div>
      <button className='bg-btn1 px-8 py-3 rounded'>{ text }</button>
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