import React from 'react'
import Image from 'next/image'
import student from "../public/student.svg"
import experience from "../public/experience.svg"
import expert from "../public/expert.svg"
import question from "../public/question.svg"
import success from "../public/success.svg"

const Statics = () => {
  return (
    <div className='px-6 md:px-14 md:py-3 py-1 md:mt-16 mt-8 md:mb-14 mb-7 gap-8 flex flex-col justify-center place-content-center'>
      <div className='flex justify-center'>
        <p className='text-center font text-[42px] max-w-3xl font-semibold text-[#221E1E]'>Market-aligned Courses Curated for Your Career Success</p>
      </div>
      <div className='flex justify-center'>
        <p className='text-center font text-[23px] max-w-6xl'>The quality of our programs and their impact on learners is a direct reflection of who we are
          and our ability to consistently meet the objectives we set for our students.
        </p>
      </div>
      <div className='flex flex-wrap justify-evenly gap-4 my-12'>
        <div className='flex flex-col justify-center items-center'>
          <Image src={student} alt='student icon' className='' height={87.7}  width={60.61}/>
          <p className='my-2 font text-[36px] text-[#317ACC]'>15k+</p>
          <p className='font text-[20px] text-[#0B2B4E]' >Number Of</p>
          <p className='font text-[20px] text-[#0B2B4E]'>Students</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <Image src={success} alt='success icon'  height={87.7}  width={65.02} />
          <p className='my-2 font text-[36px] text-[#317ACC]'>75%</p>
          <p className='font text-[20px] text-[#0B2B4E]'>Percentage of</p>
          <p className='font text-[20px] text-[#0B2B4E]'>Success</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <Image src={question} alt='question icon'  height={82.22} width={74.48} />
          <p className='my-2 font text-[36px] text-[#317ACC]'>35</p>
          <p className='font text-[20px] text-[#0B2B4E]'>Number of</p>
          <p className='font text-[20px] text-[#0B2B4E]'>Questions</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <Image src={expert} alt='expert icon'  height={64.68} width={105.27}  />
          <p className='my-2 font text-[36px] text-[#317ACC]' >9+</p>
          <p className='font text-[20px] text-[#0B2B4E]'>Years of</p>
          <p className='font text-[20px] text-[#0B2B4E]'>Experts</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <Image src={experience} alt='experience icon'  height={74.22} width={82.48}  />
          <p className='font text-[36px] text-[#317ACC]'>15+</p>
          <p className='font text-[20px] text-[#0B2B4E]'>Years of</p>
          <p className='font text-[20px] text-[#0B2B4E]'>Experience</p>
        </div>
      </div>
    </div>
  )
}

export default Statics;
