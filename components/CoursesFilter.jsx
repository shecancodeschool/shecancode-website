import React from 'react'

const CoursesFilter = ({text, bgText, Text}) => {
  return (
    <>
      <div className={`p-2 text-[#C4C4C4] border border-[#C4C4C4] rounded max-h-[40px] cursor-pointer ${bgText} ${Text}`}>
        {text}
      </div>
    </>
  )
}

export default CoursesFilter