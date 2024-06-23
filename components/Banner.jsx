import React from "react";
import Image from "next/image";
import banner_img from "../public/banner_img.png";
import { ButtonOne, ButtonTwo } from "./Buttons";
import OurTeam from "@/public/3.png"

export const Banner = () => {
  return (
    <>
      <div className="relative h-screen isolate flex flex-col justify-end overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-[80%] bg-[#011225]"></div>
        <Image
          src={banner_img}
          alt="SheCanCODE_grad"
          className="inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col md:mt-4 mt-10 justify-center items-center place-content-center gap-[56px] text-white p-4 md:p-0">
          <h3 className="z-10  text-4xl md:text-[50px] lg:text-[50px] xl:text-[50px] text-[20px] font-regular text-center font">
            UNLOCK YOUR CREATIVE POTENTIAL
          </h3>
          <div className="text-center max-w-3xl mx-auto">
            <p className="z-10 font md:text-[24px] text-2xl  ">
              The ShecanCode bootcamp, one of the original programs in the
              country,cultivates artists who are inventive, rigorous, and
              engaged
            </p>
          </div>
          <div className="w-full flex justify-center items-center gap-5">
            <button className="bg-btn1 md:px-[33px] md:py-[19px] py-2 px-6 rounded-[12px] md:text-[30px] text-[15px] border  border-btn1 font ">
              Enroll Now
            </button>
            <button className="border border-white md:px-[33px] md:py-[19px] py-2 px-6 rounded-[12px] md:text-[30px] text-[15px] font hover:bg-white hover:text-blue-950 hover:border-white transition-all duration-400 ease-in-out  hover:shadow-lg hover:transform">
              Get started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export const OurTeamsBanner = () => {
  return (
    <>
      <div className="relative h-[30rem] isolate flex flex-col justify-end overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-[80%] bg-[#011225]"></div>
        <Image
          src={OurTeam}
          alt="SheCanCODE_grad"
          className="inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col md:mt-4 mt-10 justify-center items-center place-content-center gap-[56px] text-white p-4 md:p-0">
          <h3 className="z-10  text-4xl md:text-[50px] lg:text-[50px] xl:text-[50px] text-[20px] font-regular text-center font">
            Meet The Team
          </h3>
          <div className="text-center max-w-4xl mx-auto">
            <p className="z-10 font md:text-[24px] text-2xl mb-5">
              An organization is only as strong as the people who are working
              toward the same
            </p>
            <p className="z-10 font md:text-[24px] text-2xl mb-5">
              purpose. Our clear mission unifies us, and their dedication and
              passion are wha
            </p>
            <p className="z-10 font md:text-[24px] text-2xl mb-5">
              make our organization thrive.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
