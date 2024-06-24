import React from 'react';
import Image from 'next/image';
import IconCollaboration from "../public/Icon-collaboration.svg";
import IconTransparency from "../public/Icon_Transparency-1.svg";
import IconTrust from "../public/Icon-Trust.png";

const CoreValues = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 bg-gray-50">
      {/* Our Values Section */}
      <div className="flex justify-center mt-14 md:mt-20">
        <div className="text-center">
          <h1 className="font-semibold font text-[40px] md:text-[50px] leading-[50px] md:leading-[65px] text-[#317ACC] inline-block">
            Our Values
          </h1>
          <p className="text-[#000000] text-[32px] text-opacity-50 ml-[119.5px] md:text-xl lg:text-2xl leading-6 md:leading-8 mt-10 text-justify">These are the values that drive our operations and help to keep us on track to our core mandate to stakeholders. They speak to how we do what we do</p>
        </div>
      </div>


      {/* Core Values Section */ }
  <div className="mt-20 flex flex-col items-center max-w-5xl mx-auto">
    <div className="flex flex-row justify-center gap-10">
      <div className="flex flex-col items-center text-center p-4 rounded-lg relative w-[346.53px]">
        <div className="flex items-start space-x-2">
          <Image src={IconCollaboration} alt="Collaboration Icon" className="w-12 h-12" />
          <h2 className="text-xl font-bold text-blue-600">Collaboration</h2>
        </div>
        <p className="mt-4 text-[20px] font-[400] leading-[25.2px] text-justify text-[#000000]  text-opacity-50">
          Collaboration is the process of two or more people or organizations working together to complete a task or achieve a goal.
        </p>
      </div>
      <div className="flex flex-col items-center text-center p-4 rounded-lg relative w-[346.53px]">
        <div className="flex items-start space-x-2">
          <Image src={IconTransparency} alt="Transparency Icon" className="w-12 h-12" />
          <h2 className="text-xl font-bold text-blue-600">Transparency</h2>
        </div>
        <p className="mt-4 text-[20px] font-[400] leading-[25.2px] text-justify text-[#000000]  text-opacity-50">
          Transparency, as used in science, is operating in such a way that it is easy for others to see what actions are performed.
        </p>
      </div>
    </div>
    <div className="flex flex-row justify-center gap-10 mt-8">
      <div className="flex flex-col items-center text-center p-4 rounded-lg relative w-[346.53px]">
        <div className="flex items-start space-x-2">
          <Image src={IconTrust} alt="Trust Icon" className="w-12 h-12" />
          <h2 className="text-xl font-bold text-blue-600">Trust</h2>
        </div>
        <p className="mt-4 text-[20px] font-[400] leading-[25.2px] text-justify text-[#000000]  text-opacity-50">
          Trust will help us foster a positive and productive environment that delivers value to our users and customers.
        </p>
      </div>
      <div className="flex flex-col items-center text-center p-4 rounded-lg relative w-[346.53px]">
        <div className="flex items-start space-x-2">
          <Image src={IconTrust} alt="Exemplary Icon" className="w-12 h-12" />
          <h2 className="text-xl font-bold text-blue-600">Exemplary</h2>
        </div>
        <p className="mt-4 text-[20px] font-[400] leading-[25.2px] text-justify text-[#000000]  text-opacity-50">
          Trust will help us foster a positive and productive environment that delivers value to our users and customers.
        </p>
      </div>
    </div>
  </div>
    </div >
  );
};

export default CoreValues;
