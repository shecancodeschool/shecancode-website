import React from 'react';
import ReusableSection from './ReusableSection';

const StatisticsSection = ({ statistics }) => {
  return (
    <ReusableSection background={'#e6f5ff'}>
      <h2 className='section-header'>Market-aligned Courses Curated for Your Career Success</h2>
      <p className='text-center text-base md:text-xl max-w-screen-xl text-black/65'>The quality of our programs and their impact on learners is a direct reflection of who we are
        and our ability to consistently meet the objectives we set for our students.
      </p>
      <div className='flex flex-wrap justify-evenly w-full mt-3 items-baseline place-content-center'>
        {statistics && statistics.map((statistics, index) => (
          <div key={index} className='flex flex-col justify-center items-center md:gap-4 mb-8 md:mb-0 md:rounded-lg md:shadow-none mt-4 w-full sm:w-8 md:w-fit flex-shrink'>
            <img src={statistics.icon} alt='student icon' className='w-1/4 md:w-1/3' />
            <p className='font-bold text-4xl text-sky-700'>{statistics.number} {statistics.sign}</p>
            <p className='font-medium text-base text-center md:text-xl text-black/65'>{statistics.title}</p>
          </div>
        ))}
      </div>
    </ReusableSection>
  )
}

export default StatisticsSection;
