'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Statistics = () => {
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {
    let stats = [
      {
        icon: "https://shecancode-website-dev.vercel.app/student.svg",
        title: "Learners since 2018",
        number: 700,
        sign: "+"
      },
      {
        icon: "https://shecancode-website-dev.vercel.app/success.svg",
        title: "Employment Rate",
        number: 80,
        sign: "%"
      },
      {
        icon: "https://shecancode-website-dev.vercel.app/experience.svg",
        title: "Graduate Satisfaction Score",
        number: 92,
        sign: "%"
      }
    ];

    setStatistics(stats);
  }, []);

  return (
    <div className='px-4 md:px-2 py-16 md:py-16 max-w-screen-xl mx-auto flex flex-col justify-center place-content-center gap-8'>
      <div className='flex justify-center'>
        <h2 className='text-center text-3xl font md:text-4xl max-w-screen-md md:leading-[3rem] font-semibold text-[#317ACC]'>Market-aligned Courses Curated for Your Career Success</h2>
      </div>

      <div className='flex justify-center'>
        <p className='text-center text-base md:text-xl max-w-screen-xl text-black/65'>The quality of our programs and their impact on learners is a direct reflection of who we are
          and our ability to consistently meet the objectives we set for our students.
        </p>
      </div>
      <div className='flex flex-wrap justify-evenly gap-1 md:gap-4 items-center place-content-center'>
        {statistics && statistics.map((statistics, index) => (
          <div key={index} className='flex flex-col justify-center items-center md:gap-4 mb-8 md:mb-0 bg-white md:rounded-lg md:shadow-none mt-4 w-full sm:w-[32%] md:w-fit flex-shrink'>
            <img src={statistics.icon} alt='student icon' className='w-1/4 md:w-1/3' />
            <p className='font-bold text-4xl text-[#317ACC]'>{statistics.number} {statistics.sign}</p>
            <p className='font-medium text-base text-center md:text-xl text-black/65'>{statistics.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Statistics;
