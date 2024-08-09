'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CarrersButton } from "./Buttons";
import OurTeam from "../public/3.png";
import Careers from "../public/careersbn.png";

export const Banner = () => {
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {
    let stats = [
      {
        icon: "https://shecancode-website-dev.vercel.app/student.svg",
        title: "Learners since 2018",
        number: 700,
        sign: "+"
      },
      {
        icon: "https://shecancode-website-dev.vercel.app/success.svg",
        title: "Employment Rate",
        number: 80,
        sign: "%"
      },
      {
        icon: "https://shecancode-website-dev.vercel.app/experience.svg",
        title: "Graduate Satisfaction Score",
        number: 92,
        sign: "%"
      }
    ];

    setStatistics(stats);
  }, []);

  return (
    <>
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
          <h3 className="z-10  text-[26px] md:text-[26px] lg:text-[52px] xl:text-[52px] font-bold text-center font">
            Make an impact at front
          </h3>
          <div className="text-center max-w-4xl mx-auto w-full  h-full max-h-[35%] flex flex-col justify-between">
            <div className="flex flex-col justify-center items-center">
              <p className="z-10 font w-[85%] md:text-[24px] text-[12px]">
                Ready to take role where you can make a lasting impact on your
                team, We'd love to have more talented people on board
              </p>
            </div>
            <CarrersButton text="See all open postions" />
          </div>
        </div>
      </div>
    </>
  );
};

export const BlogBanner = ({ heading, paragraph, propImage }) => {
  return (
    <>
      <div className="relative h-[30rem] isolate flex flex-col justify-end overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-[5%] bg-[#011225]"></div>
        <Image
          src={propImage}
          alt="SheCanCODE_grad"
          className="inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col md:mt-4 mt-10 justify-center items-center place-content-center gap-[56px] text-white p-4 md:p-0">
          <h3 className="z-10  text-[60px] md:text-[60px] lg:text-[60px] xl:text-[60px] font-bold text-center font">
            {heading}
          </h3>
          <div className="text-center max-w-6xl mx-auto w-full  h-full max-h-[30%] flex flex-col">
            <p className="z-10 font text-[20px] md:text-[35px]">{paragraph}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export const WwdBanner = ({ heading, paragraph, propImage }) => {
  return (
    <>
      <div className="relative h-[30rem] isolate flex flex-col justify-end overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-[5%] bg-[#011225]"></div>
        <Image
          src={propImage}
          alt="SheCanCODE_grad"
          className="inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col md:mt-4 mt-10 justify-center items-center place-content-center gap-[56px] text-white p-4 md:p-0">
          <h3 className="z-10  text-[60px] md:text-[60px] lg:text-[60px] xl:text-[60px] font-bold text-center font">
            {heading}
          </h3>
          <div className="text-center max-w-6xl mx-auto w-full  h-full max-h-[30%] flex flex-col">
            <p className="z-10 font text-[12px] md:text-[24px] ">{paragraph}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export const NewsDetails = () => {
  return (
    <>
      <div className="relative h-screen md:h-[529px] flex flex-col justify-end overflow-hidden">
        <div className="absolute top-0 left-0 w-full md:h-full bg-opacity-[70%] bg-[#011225]"></div>
        <Image
          src={Careers}
          alt="SheCanCODE_grad"
          className="inset-0 h-full w-full object-cover"
        />
        <div className="absolute max-w-[83rem] mx-auto inset-0 flex flex-col md:mt-4 mt-10 justify-center items-center text-white md:p-0">
          <div className="h-[320px] w-full flex flex-col p-4 md:p-0 justify-between">
            <div className="w-full md:p-0 flex flex-col justify-between gap-5">
              <p className="text-[14px] text-[#317ACC] md:text-[20px]">
                Impact Story
              </p>
              <h3 className="text-[24px] max-w-[900px] md:text-[36px]">
                Shecancode bootcamp alums names 2024 guggenheum fellows
              </h3>
              <p className="text-[20px] max-w-[656px] md:text-[24px]">
                Learn how to apply User Experience (UX) principles to your
                website designs, code a variety of sites, and increase sales!
              </p>
              <p>
                Published By <span>Hirwa</span>
              </p>
              <button className="p-5 bg-[#317ACC] py-3 w-[123px]">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const CourseBanner = ({ heading, paragraph, propImage }) => {
  return (
    <>
      <div className="relative h-[30rem] isolate flex flex-col justify-end overflow-hidden md:h-auto">
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-[5%] bg-[#011225]"></div>
        <Image
          src={propImage}
          alt="SheCanCODE_grad"
          className="inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col md:mt-4 mt-10 justify-center items-center place-content-center gap-[56px] text-white p-4 md:p-0">
          <h3 className="z-10 text-[25px] md:text-[25px] lg:text-[50px] xl:text-[60px] max-w-[60%] font-bold text-center font">
            {heading}
          </h3>
        </div>
      </div>
    </>
  );
};
