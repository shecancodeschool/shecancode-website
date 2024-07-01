import React from "react";
import { WwdBanner } from "@/components/Banner";
import { OurServiceLeft, OurServiceRight } from "@/components/OurService";
import boot from "@/public/Rectangle 19.jpg";
import talent from "@/public/talent.jpg";
import carrer from "@/public/careersbn.png";
import bcm from "@/public/bcm-sft.jpg";
import cfb from "@/public/cfb.jpg"

function page() {
  return (
    <>
      <div className="w-full flex flex-col gap-10">
        <div className="w-full">
          <WwdBanner />
        </div>
        <div className="flex flex-col justify-evenly items-center h-52">
          <h1 className="text-4xl text-blue-300 md:text-[60px] lg:text-[50px] xl:text-[60px] text-[20px] font-bold text-center font">
            Our services
          </h1>
        </div>
        <div className="my-10 w-full flex flex-col space-y-10">
          <div className="flex justify-center items-center w-full">
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
          <div className="flex justify-center items-center w-full">
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
          <div className="flex justify-center items-center w-full">
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
          <div className="flex justify-center items-center w-full">
            <OurServiceRight
              srcImg={cfb}
              title="Coding for beginners"
              text1="We fuel the growth of purpose driven brands"
              text2="through strategy activation, design empowerment,"
              text3="and market adoption. From cultivating new ideas to"
              text4="connecting the dots for customers or users, these"
              text5="are our core principles."
              skill1="Basic"
              skill5="Challenges"
              skill3="Problem solve"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
