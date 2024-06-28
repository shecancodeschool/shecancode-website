import React from "react";
import { CareersBanner } from "@/components/Banner";
import Card from "@/components/Card";
import { HireCards } from "@/components/HireCards";
import OpenPos from "@/components/OpenPos";

function Page() {
  const CardProps = [
    { title: "Secured Future", text1: "", text2: "", text3: "", text4: "" },
    {
      title: "Learning Opportunity",
      text1: "",
      text2: "",
      text3: "",
      text4: "",
    },
    { title: "Upgrade Skills", text1: "", text2: "", text3: "", text4: "" },
    { title: "Team work", text1: "", text2: "", text3: "", text4: "" },
  ];

  return (
    <>
      <div className=" h-full flex flex-col justify-evenly gap-16 bg-[#FAFAFA]">
        <div className="w-full">
          <CareersBanner />
        </div>
        <div className="max-w-[86rem] mx-auto flex flex-col justify-center items-center space-y-20 w-full">
          <div className="flex flex-col justify-evenly items-center w-full h-80">
            <h1 className="text-4xl text-blue-300 md:text-[60px] lg:text-[50px] xl:text-[60px] text-[20px] font-bold text-center">
              How we hire our team
            </h1>
            <div className="w-full flex flex-col justify-center items-center">
              <p className="md:text-[24px] text-2xl text-gray-400">
                We like to keep things as simple as possible so we can get to
                what’s really
              </p>
              <p className="md:text-[24px] text-2xl text-gray-400">
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
            <h1 className="text-4xl text-blue-300 md:text-[60px] lg:text-[60px] xl:text-[50px] text-[20px] font-bold text-center">
              Why you Should Join Our
            </h1>
            <h1 className="text-4xl text-blue-300 md:text-[60px] lg:text-[60px] xl:text-[50px] text-[20px] font-bold text-center">
              Awesome Team
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
          <div className="w-full grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
            {CardProps.map((props, index) => (
              <Card key={index} {...props} />
            ))}
          </div>
          <div className="w-full flex flex-col justify-center items-center h-52">
            <div className="w-full h-full flex flex-col gap-10">
              <h1 className="text-blue-300 text-4xlmd:text-[60px] lg:text-[60px] xl:text-[50px] text-[20px] font-bold">
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
          <div className="w-full mx-auto p-4 mb-10">
            <div className="w-full max-w-[100%] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
              <OpenPos position="Front-end trainees" />
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
