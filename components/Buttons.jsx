import React from 'react'

export const ButtonOne = ({text}) => {
  return (
    <>
     <div>
      <button className='bg-btn1 px-2 py-2 rounded'>{text}</button>
     </div>
    </>
  )
}

export const ButtonTwo = () => {
  return (
    <div>
      <button className='border px-2 py-2 rounded'>{text}</button>
    </div>
  )
}