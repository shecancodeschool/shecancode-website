import React from 'react'

const courseStatus = ({Status}) => {
  return (
    <>
      <div className='bg-red-400'>
        <h1>{Status}</h1>
      </div>
    </>
  )
}

export default courseStatus