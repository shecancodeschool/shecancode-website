import React from "react";
import Image from "next/image";
import boot from "@/public/Rectangle 19.jpg";

export function OurServiceLeft({
  title,
  text1,
  text2,
  text3,
  text4,
  text5,
  skill1,
  skill2,
  skill3,
  skill4,
  skill5,
  skill6,
  srcImg,
}) {
  return (
    <>
      <div className="flex flex-col-reverse gap-10 w-full md:flex-row">
        <div className="w-full flex flex-col justify-between gap-10">
          <h1 className="z-10 text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold text-[#317ACC]">
            {title}
          </h1>
          <div className="flex flex-col gap-1">
            <p className="z-10 font text-base sm:text-lg md:text-xl text-gray-500">
              {text1}
            </p>
            <p className="z-10 font text-base sm:text-lg md:text-xl text-gray-500">
              {text2}
            </p>
            <p className="z-10 font text-base sm:text-lg md:text-xl text-gray-500">
              {text3}
            </p>
            <p className="z-10 font text-base sm:text-lg md:text-xl text-gray-500">
              {text4}
            </p>
            <p className="z-10 font text-base sm:text-lg md:text-xl text-gray-500">
              {text5}
            </p>
          </div>
          <div className="text-[#317ACC] w-full max-w-[100%] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
            <p>
              <span className="text-blue-950 font-bold mr-2 text-lg sm:text-xl md:text-2xl">
                -
              </span>
              {skill1}
            </p>
            <p>
              <span className="text-blue-950 font-bold mr-2 text-lg sm:text-xl md:text-2xl">
                -
              </span>
              {skill2}
            </p>
            <p>
              <span className="text-blue-950 font-bold mr-2 text-lg sm:text-xl md:text-2xl">
                -
              </span>
              {skill3}
            </p>
            <p>
              <span className="text-blue-950 font-bold mr-2 text-lg sm:text-xl md:text-2xl">
                -
              </span>
              {skill4}
            </p>
            <p>
              <span className="text-blue-950 font-bold mr-2 text-lg sm:text-xl md:text-2xl">
                -
              </span>
              {skill5}
            </p>
            <p>
              <span className="text-blue-950 font-bold mr-2 text-lg sm:text-xl md:text-2xl">
                -
              </span>
              {skill6}
            </p>
          </div>
        </div>
        <div className="w-full md:max-w-[50%]">
          <div className="w-full h-full flex justify-end self-end">
            <Image src={srcImg} alt="bootcamp" className="object-contain" width={1000} />
          </div>
        </div>
      </div>
    </>
  );
}

export function OurServiceRight({
  title,
  text1,
  text2,
  text3,
  text4,
  text5,
  skill1,
  skill2,
  skill3,
  skill4,
  skill5,
  skill6,
  srcImg,
}) {
  return (
    <>
      <div className="flex flex-col gap-10 w-full md:flex-row">
        <div className="w-full md:max-w-[50%] h-full">
          <div className="w-full h-full">
            <Image src={srcImg} alt="bootcamp" className="object-contain" width={1000}/>
          </div>
        </div>
        <div className="w-full flex flex-col justify-between">
          <div className="w-full max-w-[85%] flex flex-col sm:max-w-[100%] justify-between">
            <h1 className="z-10 text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold text-[#317ACC]">
              {title}
            </h1>
            <div className="flex flex-col gap-1">
              <p className="z-10 font text-base sm:text-lg md:text-xl text-gray-500">
                {text1}
              </p>
              <p className="z-10 font text-base sm:text-lg md:text-xl text-gray-500">
                {text2}
              </p>
              <p className="z-10 font text-base sm:text-lg md:text-xl text-gray-500">
                {text3}
              </p>
              <p className="z-10 font text-base sm:text-lg md:text-xl text-gray-500">
                {text4}
              </p>
              <p className="z-10 font text-base sm:text-lg md:text-xl text-gray-500">
                {text5}
              </p>
            </div>
            <div className="text-[#317ACC] w-full max-w-[100%] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
              <p>
                <span className="text-blue-950 font-bold mr-2 text-lg sm:text-xl md:text-2xl">
                  -
                </span>
                {skill1}
              </p>
              <p>
                <span className="text-blue-950 font-bold mr-2 text-lg sm:text-xl md:text-2xl">
                  -
                </span>
                {skill2}
              </p>
              <p>
                <span className="text-blue-950 font-bold mr-2 text-lg sm:text-xl md:text-2xl">
                  -
                </span>
                {skill3}
              </p>
              <p>
                <span className="text-blue-950 font-bold mr-2 text-lg sm:text-xl md:text-2xl">
                  -
                </span>
                {skill4}
              </p>
              <p>
                <span className="text-blue-950 font-bold mr-2 text-lg sm:text-xl md:text-2xl">
                  -
                </span>
                {skill5}
              </p>
              <p>
                <span className="text-blue-950 font-bold mr-2 text-lg sm:text-xl md:text-2xl">
                  -
                </span>
                {skill6}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
