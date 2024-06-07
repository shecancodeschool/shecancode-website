import React from 'react'
import Image from 'next/image'
import student from "../public/student.svg"
import experience from "../public/experience.svg"
import expert from "../public/expert.svg"
import question from "../public/question.svg"
import success from "../public/success.svg"

const Statics = () => {
  return (
    <>
      <div className='flex flex-wrap justify-evenly gap-4'>
        <div className='flex flex-col justify-center items-center'>
          <Image src={student} alt='student icon' className='h-12 w-10' />
          <p className='my-2'>15k+</p>
          <p>Number Of</p>
          <p>Students</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <Image src={success} alt='success icon' className='h-12 w-10' />
          <p className='my-2'>75%</p>
          <p>Percentage of</p>
          <p>Success</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <Image src={question} alt='question icon' className='h-12 w-10' />
          <p className='my-2'>35</p>
          <p>Number of</p>
          <p>Questions</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <Image src={expert} alt='expert icon' className='h-10 w-12' />
          <p className='my-2'>25+</p>
          <p>Years of</p>
          <p>Experts</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <Image src={experience} alt='experience icon' className='h-12 w-10' />
          <p>15+</p>
          <p>Years of</p>
          <p>Experience</p>
        </div>
      </div>
    </>
  )
}

export default Statics;
