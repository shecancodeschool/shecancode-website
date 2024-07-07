import React from "react";
import { WwdBanner } from "@/components/Banner";
import { OurServiceLeft, OurServiceRight } from "@/components/OurService";
import boot from "@/public/Rectangle 19.jpg";
import talent from "@/public/talent.jpg";
import carrer from "@/public/careersbn.png";
import bcm from "@/public/bcm-sft.jpg";
import cfb from "@/public/cfb.jpg";

function page() {
  return (
    <>
      <div className="w-full flex flex-col gap-10">
        <div className="w-full">
          <WwdBanner 
           heading= "What we do"
           paragraph="Our company offers thorough tech training services that help people and businesses stay ahead in the quickly changing world of technology. We are experts in software engineering training and talent placement, assisting businesses in locating and hiring qualified personnel" 
          />
        </div>
        <div className="max-w-[84rem] mx-auto flex flex-col justify-center items-center space-y-20 w-full px-4 sm:px-0">
          <div className="flex flex-col justify-evenly items-center ">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-[50px] text-[#317ACC] text-center font-bold">
              Our services
            </h1>
          </div>
          <div className="w-full flex flex-col gap-[84px] pb-[84px]">
            <div className="flex flex-col sm:flex-row justify-center items-center w-full">
              <OurServiceLeft
                srcImg={boot}
                title="Bootcamp"
                text1="We fuel the growth of purpose driven brands"
                text2="through strategy activation, design empowerment,"
                text3="and market adoption. From cultivating new ideas to"
                text4="connecting the dots for customers or users, these"
                text5="are our core principles."
                skill1="Professional skills"
                skill2="Improvement"
                skill3="Community"
                skill4="Innovation"
                skill5="Development"
                skill6="Creative"
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center w-full">
              <OurServiceRight
                srcImg={talent}
                title="Talent placement"
                text1="We fuel the growth of purpose driven brands"
                text2="through strategy activation, design empowerment,"
                text3="and market adoption. From cultivating new ideas to"
                text4="connecting the dots for customers or users, these"
                text5="are our core principles."
                skill1="Professional skills"
                skill2="Improvement"
                skill3="Community"
                skill4="Innovation"
                skill5="Development"
                skill6="Creative"
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center w-full">
              <OurServiceLeft
                srcImg={bcm}
                title="Become a software developer"
                text1="We fuel the growth of purpose driven brands"
                text2="through strategy activation, design empowerment,"
                text3="and market adoption. From cultivating new ideas to"
                text4="connecting the dots for customers or users, these"
                text5="are our core principles."
                skill1="JavaScript"
                skill2="Express"
                skill3="Tailwind"
                skill4="MongoDB"
                skill5="Reactjs"
                skill6="Nodejs"
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center w-full">
              <OurServiceRight
                srcImg={cfb}
                title="Coding for beginners"
                text1="We fuel the growth of purpose driven brands"
                text2="through strategy activation, design empowerment,"
                text3="and market adoption. From cultivating new ideas to"
                text4="connecting the dots for customers or users, these"
                text5="are our core principles."
                skill1="Basic"
                skill2="Basic"
                skill4="Problem solve"
                skill5="Challenges"
                skill3="Problem solve"
                skill6="Challenges"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
