import React from "react";
import { CareersBanner } from "../../components/Banner";
import Card from "../../components/Card";
import { HireCards } from "../../components/HireCards";
import OpenPos from "../../components/OpenPos";
import Link from "next/link";


function Page() {
  const CardProps = [
    { title: "Secured Future"},
    { title: "Learning Opportunity"},
    { title: "Upgrade Skills"},
    { title: "Team work"},
  ];

  return (
    <>
      <div className=" h-full flex flex-col justify-evenly gap-16 bg-[#FAFAFA]">
        <div className="w-full">
          <CareersBanner />
        </div>
        <div className="max-w-[84rem] mx-auto p-4 md:p-0 flex flex-col justify-center items-center space-y-20 w-full">
          <div>
            <h1 className="text-4xl md:mt-[30px] md:mb-[67px] text-[#317ACC] md:text-[60px] lg:text-[50px] xl:text-[60px] text-[36px] font-bold md:text-center">
              How we hire our team
            </h1>
            <div className="max-w-[850.73px] mx-auto flex  md:justify-center md:items-center">
              <p className="md:text-[24px] text-2xl text-gray-400 md:text-center">
                We like to keep things as simple as possible so we can get to
                what’s really
                important - finding out more about you
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
              <HireCards
                h1="Application and recruiter screen"
                digit="01"
                p1="Lorem ipsum dolor sit amet,"
                p2="consectetur adipiscing elit,"
                p3="sed do eiusmod tempor"
                p4="incididunt ut labore et dolore"
                p5="magna aliqua."
                bgColor="bg-[#E2F1FF]"
                titleColor="text-blue-600"
                digitColor="text-blue-600"
              />
              <HireCards
                h1="First round interview"
                digit="02"
                p1="Lorem ipsum dolor sit amet,"
                p2="consectetur adipiscing elit,"
                p3="sed do eiusmod tempor"
                p4="incididunt ut labore et dolore"
                p5="magna aliqua."
                bgColor="bg-[#D5F6F8]"
                titleColor="text-blue-600"
                digitColor="text-blue-600"
              />
              <HireCards
                h1="Task or challenge"
                digit="03"
                p1="Lorem ipsum dolor sit amet,"
                p2="consectetur adipiscing elit,"
                p3="sed do eiusmod tempor"
                p4="incididunt ut labore et dolore"
                p5="magna aliqua."
                bgColor="bg-[#6AACE8]"
                textColor="text-white"
                titleColor="text-blue-600"
                digitColor="text-blue-600"
              />
              <HireCards
                h1="Final interview"
                digit="04"
                digitColor="text-white"
                p1="Lorem ipsum dolor sit amet,"
                p2="consectetur adipiscing elit,"
                p3="sed do eiusmod tempor"
                p4="incididunt ut labore et dolore"
                p5="magna aliqua."
                bgColor="bg-[#317ACC]"
                titleColor="text-white"
                textColor="text-white"
              />
            </div>
          </div>
          <div className="w-full flex flex-col justify-center align-middle gap-5">
            <h1 className="text-4xl text-[#317ACC] md:text-[60px] lg:text-[60px] max-w-[637px] mx-auto leading-normal xl:text-[50px] text-[36px] font-bold md:text-center">
              Why you Should Join Our Awesome Team
            </h1>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <p className="md:text-[24px] text-2xl text-gray-400">
              we want to feel like home when you are working at Shecancode
              bootcamp & for that we have curated a great set
            </p>
            <p className="md:text-[24px] text-2xl text-gray-400">
              of benefits for you.It all starts with the free lunch!
            </p>
          </div>
          <div className="w-full grid gap-[50px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
            {CardProps.map((props, index) => (
              <Card key={index} {...props} />
            ))}
          </div>
          <div className="w-full flex flex-col justify-center items-center h-52">
            <div className="w-full h-full flex flex-col gap-10">
              <h1 className="text-[#317ACC] text-4xlmd:text-[60px] lg:text-[60px] xl:text-[50px] text-[20px] font-bold">
                Open positions
              </h1>
              <div>
                <p className="md:text-[24px] text-2xl text-gray-400">
                  Get to know us and join our team. We'd love to have more
                  talented
                </p>
                <p className="md:text-[24px] text-2xl text-gray-400">
                  people on board. Check out our open positions!
                </p>
              </div>
            </div>
          </div>
          <div className="w-full mx-auto pb-12">
            <div className="w-full max-w-[100%] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
             <Link href="/job-description">
             <OpenPos position="Front-end trainees" />
             </Link>
              <OpenPos position="Back-end trainee" />
              <OpenPos position="Graphic Designer" />
              <OpenPos position="Mobile developer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
