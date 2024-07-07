import React from "react";
import Image from "next/image";
import banner_img from "../public/banner_img.png";
import { ButtonOne, ButtonTwo, CarrersButton } from "./Buttons";
import OurTeam from "../public/3.png";
import Careers from "../public/careersbn.png";

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
            <button className="bg-btn1 md:px-[33px] md:py-[19px] py-2 px-6 rounded-[12px] md:text-[30px] text-[15px]   -btn1 font ">
              Enroll Now
            </button>
            <button className=" -white md:px-[33px] md:py-[19px] py-2 px-6 rounded-[12px] md:text-[30px] text-[15px] font hover:bg-white hover:text-blue-950 hover:-white transition-all duration-400 ease-in-out  hover:shadow-lg hover:transform">
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
          <h3 className="z-10  text-4xl md:text-[60px] lg:text-[60px] xl:text-[60px] text-[20px] font-bold text-center font">
            Meet The Team
          </h3>
          <div className="text-center max-w-4xl mx-auto">
            <p className="z-10 font md:text-[24px] text-2xl">
              An organization is only as strong as the people who are working
              toward the same
            </p>
            <p className="z-10 font md:text-[24px] text-2xl">
              purpose. Our clear mission unifies us, and their dedication and
              passion are wha
            </p>
            <p className="z-10 font md:text-[24px] text-2xl">
              make our organization thrive.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export const CareersBanner = () => {
  return (
    <>
      <div className="relative h-[30rem] isolate flex flex-col justify-end overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-[5%] bg-[#011225]"></div>
        <Image
          src={Careers}
          alt="SheCanCODE_grad"
          className="inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col md:mt-4 mt-10 justify-center items-center place-content-center gap-[56px] text-white p-4 md:p-0">
          <h3 className="z-10  text-4xl md:text-[60px] lg:text-[60px] xl:text-[60px] text-[20px] font-bold text-center font">
            Make an impact at front
          </h3>
          <div className="text-center max-w-4xl mx-auto w-full  h-full max-h-[35%] flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <p className="z-10 font md:text-[24px] text-2xl">
                Ready to take role where you can make a lasting impact on your
                team,
              </p>
              <p className="z-10 font md:text-[24px] text-2xl">
                We'd love to have more talented people on board
              </p>
            </div>
            <CarrersButton text="See all open postions" />
          </div>
        </div>
      </div>
    </>
  );
};

export const WwdBanner = ({ heading, paragraph }) => {
  return (
    <>
      <div className="relative h-[30rem] isolate flex flex-col justify-end overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-[5%] bg-[#011225]"></div>
        <Image
          src={Careers}
          alt="SheCanCODE_grad"
          className="inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col md:mt-4 mt-10 justify-center items-center place-content-center gap-[56px] text-white p-4 md:p-0">
          <h3 className="z-10  text-4xl md:text-[60px] lg:text-[60px] xl:text-[60px] text-[20px] font-bold text-center font">
            {heading}
          </h3>
          <div className="text-center max-w-6xl mx-auto w-full  h-full max-h-[30%] flex flex-col">
            <p className="z-10 font md:text-[24px] text-2xl">{paragraph}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export const NewsDetails = () => {
  return (
    <>
      <div className="relative h-[30rem] isolate flex flex-col justify-end overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-[5%] bg-[#011225]"></div>
        <Image
          src={Careers}
          alt="SheCanCODE_grad"
          className="inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col md:mt-4 mt-10 justify-center items-center text-white md:p-0">
          <div className="h-[320px] w-full flex flex-col justify-between ">
            <div className="max-w-[80%] flex flex-col justify-between gap-5 ml-[70px]">
            <p className="text-[20px] text-[#317ACC]">
              Impact Story
            </p>
            <h3 className="text-[36px] max-w-[900px]">
              Shecancode bootcamp alums names 2024 guggenheum fellows
            </h3>
            <p className="text-[24px] max-w-[656px]">
              Learn how to apply User Experience (UX) principles to your website
              designs, code a variety of sites, and increase sales !
            </p>
            <p>
              Published By <span>Hirwa</span>
            </p>
            <button className="p-5 bg-[#317ACC] py-3 w-[123px]">Read more</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
