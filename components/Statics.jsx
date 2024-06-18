import React from 'react'
import Image from 'next/image'
import student from "../public/student.svg"
import experience from "../public/experience.svg"
import expert from "../public/expert.svg"
import question from "../public/question.svg"
import success from "../public/success.svg"

const Statics = () => {
  return (
    <div className='px-4 md:py-1 py-1 md:mt-[113px] mt-8  mb-7 max-w-[1336px] mx-auto flex flex-col justify-center place-content-center gap-[62px]'>
      <div className='flex justify-center'>
        <p className='md:text-center text-3xl font md:text-[42px] max-w-4xl md:leading-[3rem] font-semibold text-[#317ACC]'>Market-aligned Courses Curated for Your Career Success</p>
      </div>
      <div className='flex justify-center'>
        <p className='md:text-center font md:text-[23px] max-w-6xl  text-black/65'>The quality of our programs and their impact on learners is a direct reflection of who we are
          and our ability to consistently meet the objectives we set for our students.
        </p>
      </div>
      <div className='flex flex-wrap justify-between gap-4 items-center place-content-center'>
      <div className='flex flex-col justify-center items-center gap-6 bg-white md:rounded-lg border md:border-none md:shadow-none w-full sm:w-auto'>
        <Image src={student} alt='student icon' height={87.7} width={60.61} />
        <p className='font-bold text-[36px] text-[#317ACC]'>15k+</p>
        <p className='font-medium text-[16px] md:text-[20px] text-black/65'>Number Of Students</p>
      </div>
      <div className='flex flex-col justify-center gap-6 items-center p-4 bg-white md:rounded-lg border md:border-none md:shadow-none w-full sm:w-auto'>
        <Image src={success} alt='success icon' height={87.7} width={65.02} />
        <p className='font-bold text-[36px] text-[#317ACC]'>75%</p>
        <p className='font-medium text-[16px] md:text-[20px] text-black/65'>Percentage of Success</p>
      </div>
      <div className='flex flex-col justify-center items-center gap-6 p-4 bg-white md:rounded-lg border md:border-none md:shadow-none w-full sm:w-auto'>
        <Image src={question} alt='question icon' height={82.22} width={74.48} />
        <p className='font-bold text-[36px] text-[#317ACC]'>35</p>
        <p className='font-medium text-[16px] md:text-[20px] text-black/65'>Number of Questions</p>
      </div>
      <div className='flex flex-col justify-center items-center gap-6 p-4 bg-white md:rounded-lg border md:border-none md:shadow-none w-full sm:w-auto'>
        <Image src={expert} alt='expert icon' height={64.68} width={105.27} />
        <p className='font-bold text-[36px] text-[#317ACC]'>9+</p>
        <p className='font-medium text-[16px] md:text-[20px] text-black/65'>Years of Experts</p>
      </div>
      <div className='flex flex-col justify-center items-center gap-4 p-4 bg-white md:rounded-lg border md:border-none md:shadow-none w-full sm:w-auto'>
        <Image src={experience} alt='experience icon' height={64.68} width={70} />
        <p className=' font-bold text-[36px] text-[#317ACC]'>15+</p>
        <p className='font-medium text-[16px] md:text-[20px] text-black/65'>Years of Experience</p>
      </div>
    </div>
    </div>
  )
}

export default Statics;
