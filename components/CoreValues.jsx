import React from 'react';
import Image from 'next/image';
import IconCollaboration from "../public/Icon-collaboration.svg";
import IconTransparency from "../public/Icon_Transparency-1.svg";
import IconTrust from "../public/Icon-Trust.png";
import Logo from "../public/logo/logo1.png"

const CoreValues = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-12">
      {/* Our Values Section */}
      <div className="flex justify-center mt-14 md:mt-10">
        <div className="text-center">
          <h1 className="font-semibold font text-[40px] md:text-3xl md:text-[50px] leading-[28px] md:leading-[65px] text-[#317ACC] inline-block">
            Our Values
          </h1>
          <div className='max-w-5xl'>
            <p className="text-[#848383] text-2xl font md:mx-2 mx-4  text-justify md:text-center  md:text-lg lg:text-[24px] md:leading-10 mt-10">These are the values that drive our operations and help to keep us on track to our core mandate to stakeholders. They speak to how we do what we do</p>
          </div>
        </div>
      </div>


      {/* Core Values Section */}
      <div className="mt-2 grid lg:grid-cols-3 lg:grid-rows-3 max-w-5xl mx-auto py-12 sm:grid-cols-1">

        {/* div1 */}
        <div className="">

        <div className="flex flex-col text-center p-4 rounded-lg md: sm:w-full">
            <div className="flex items-center justify-center gap-2 ">
              <Image src={IconCollaboration} alt="Collaboration Icon" className="w-14 h-16" />
              <span className="text-2xl md:text-[35px] font-bold text-[#317ACC]">Collaboration</span>
            </div>
            <p className="mt-4 text-[#848383] text-2xl  font leading-[25.2px] md:text-lg lg:text-[24px] text-justify ">
              Collaboration is the process of two or more people or organizations working together to complete a task or achieve a goal.
            </p>
          </div>
          </div>
          <div/>

        <div className="">
         
          <div className="flex flex-col text-center p-4 rounded-lg md: sm:w-full">
            <div className="flex items-center justify-center gap-2 ">
              <Image src={IconTransparency} alt="Transparency Icon" className="w-14 h-16" />
              <h2 className="text-2xl md:text-[35px] font-bold text-[#317ACC]">Transparency</h2>
            </div>
            <p className="mt-4 text-[#848383] text-2xl font leading-[25.2px] md:text-lg lg:text-[24px] text-justify ">
              Transparency, as used in science, is operating in such a way that it is easy for others to see what actions are performed.
            </p>
          </div>
        </div>
        {/* img */}
        <div/>
        <div className='hidden md:block col-span-1 place-content-center'>
          <Image src={Logo} width={350} height={414.21} />
        </div>
        <div/>
        {/* div2 */}
        <div className="flex flex-col text-center p-4 rounded-lg md: sm:w-full ">
        <div className="flex items-center justify-start gap-2 ">
              <Image src={IconTransparency} alt="Transparency Icon" className="w-14 h-16" />
              <h2 className="text-2xl md:text-[35px]  font-bold text-[#317ACC]">Trust</h2>
            </div>
            <p className="mt-4 text-[#848383] text-2xl font leading-[25.2px] md:text-lg lg:text-[24px] text-justify ">
              Trust will help us foster a positive and productive environment that delivers value to our users and customers.
            </p>
          </div>
        <div/>

          <div className="flex flex-col text-center p-4 rounded-lg md: sm:w-full ">
            <div className="flex items-center justify-start gap-2 ">
              <Image src={IconTrust} alt="Exemplary Icon" className="w-12 h-12" />
              <h2 className="text-xl md:text-[35px] font-bold text-[#317ACC]">Exemplary</h2>
            </div>
            <p className="mt-4 text-[#848383] text-2xl font leading-[25.2px] md:text-lg lg:text-[24px] text-justify ">
              Trust will help us foster a positive and productive environment that delivers value to our users and customers.
            </p>
          </div>
      </div>
    </div >
  );
};

export default CoreValues;
