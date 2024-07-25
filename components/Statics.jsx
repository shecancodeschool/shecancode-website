'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import student from "../public/student.svg";
import experience from "../public/experience.svg";
import expert from "../public/expert.svg";
import question from "../public/question.svg";
import success from "../public/success.svg";

const Statics = () => {
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {
    let stats = [
      {
        icon: "student.svg",
        title: "Learners since 2018",
        number: 700,
        sign: "+"
      },
      {
        icon: "success.svg",
        title: "Employment Rate",
        number: 80,
        sign: "%"
      },
      {
        icon: "success.svg",
        title: "Graduate Satisfaction Score",
        number: 92,
        sign: "%"
      }
    ];

    setStatistics(stats);
  }, []);

  return (
    <div className='px-4 md:py-1 py-1 mt-8 md:mt-20 mb-7 max-w-screen-xl mx-auto flex flex-col justify-center place-content-center gap-12'>
      <div className='flex justify-center'>
        <p className='md:text-center text-3xl font md:text-[42px] max-w-4xl md:leading-[3rem] font-semibold text-[#317ACC]'>Market-aligned Courses Curated for Your Career Success</p>
      </div>

      <div className='flex justify-center'>
        <p className='md:text-center font md:text-xl max-w-6xl  text-black/65'>The quality of our programs and their impact on learners is a direct reflection of who we are
          and our ability to consistently meet the objectives we set for our students.
        </p>
      </div>
      <div className='flex flex-wrap justify-evenly gap-4 items-center place-content-center'>
        {statistics && statistics.map((statistics, index) => (
          <div key={index} className='flex flex-col justify-center items-center gap-6 bg-white md:rounded-lg border md:border-none md:shadow-none w-full sm:w-auto'>
            <Image src={`/${statistics.icon}`} alt='student icon' height={87.7} width={60.61} />
            <p className='font-bold text-[36px] text-[#317ACC]'>{statistics.number} {statistics.sign}</p>
            <p className='font-medium text-[16px] md:text-[20px] text-black/65'>{statistics.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Statics;
