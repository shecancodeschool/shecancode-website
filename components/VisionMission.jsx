import React from 'react';

const VisionMission = () => {
  return (
    <div className="max-w-[84rem] mx-auto my-10 md:my-32">
      <div className="mx-auto px-5 md:px-10 lg:px-0 md:gap-[60px] gap-4 grid lg:grid-cols-2">
        {/* Vision Section */}
        <div className="">
          <h2 className="text-[40px] text-center md:text-3xl md:mb-20 mb-3 lg:text-[50px] font-semibold text-[#317ACC] font">Our Vision</h2>
          <p className="text-[#848383] text-xl font md:text-xl lg:text-[24px] leading-6 md:leading-10 mt-10 text-justify">
            The vision calls for more women to be at the forefront of technological advancements, research, and innovation. The graduates from this program will be supported with job placement and apprenticeships. The bootcamp seeks to advance young women into positions where they can influence the direction of technology by equipping them with the most up-to-date technical knowledge and abilities.
          </p>
        </div>

        {/* Mission Section */}
        <div className="h-auto mt-8 md:mt-0">
          <h2 className="text-[40px] text-center md:text-3xl md:mb-20 mb-3 lg:text-[50px] font-semibold text-[#317ACC] font">Our Mission</h2>
          <p className="text-[#848383] text-lg font  md:text-xl lg:text-[24px] leading-6 md:leading-10 mt-10 text-justify">
            We empower young women to pursue and excel in their careers within the tech industry so that they bridge the gender gap in technology, which has historically been male-dominated. The bootcamp aims to provide an inclusive and supportive learning environment that equips participants with the necessary technical skills, knowledge, and confidence to thrive in this field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
