import React from 'react'
import Image from 'next/image'
import students from "../public/students.png"
import experience from "../public/experience.png"
import expert from "../public/expert.png"
import question from "../public/questions.png"
import success from "../public/success.png"
// import Counter from "../components/counter"

const Statics = () => {
  return (
    <>
      <div className='flex justify-evenly'>
        <div className='flex flex-col justify-center items-center gap-3'>
          <Image src={students} alt='' className='h-12 w-10' />
          <p>15k+</p>
          <p>Number Of</p>
          <p>Students</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-3'>
         <Image src={success} alt='' className='h-12 w-10' />
         <p>75%</p>
         <p>Percentage of</p>
         <p>Success</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-3'>
         <Image src={question} alt='' className='h-12 w-10' />
         <p>35</p>
         <p>Number of</p>
         <p>Questions</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-3'>
         <Image src={expert} alt='' className='h-10 w-12' />
         <p>25+</p>
         <p>Years of</p>
         <p>Experts</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-3'>
         <Image src={experience} alt='' className='h-12 w-10' />
         <p>15+</p>
         <p>Years of</p>
         <p>Experience</p>
        </div>
      </div>
    </>
  )
}

export default Statics