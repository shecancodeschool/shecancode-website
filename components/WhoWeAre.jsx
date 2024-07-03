import React from 'react';
import { CareersBanner } from './Banner';

const WhoWeAre = () => {
  return (
    <div className="flex justify-center mt-14 md:my-16">
      {/* <div className="text-center md:flex justify-start align-start">
        <CareersBanner/>
      </div> */}
      <div className='flex flex-col justify-evenly items-center'>
        <h1 className='text-4xl text-[#317ACC] md:text-[60px] lg:text-[50px] xl:text-[60px] text-[20px] font-bold text-center font'>Who we are</h1>
      </div>

    </div>
  );
};

export default WhoWeAre;
