// ParentComponent.js
import React from 'react';
import HomeSloganSection from './HomeSloganSection';

const CircleComponent = () => {
  return (
    <div className="relative">
      <div className="absolute flex justify-center items-center w-full h-full">
        <div className="w-72 h-72 md:w-96 md:h-96 border-4 border-dashed border-[#09B451] rounded-full"></div>
      </div>
      <HomeSloganSection />
    </div>
  );
};

export default CircleComponent;
