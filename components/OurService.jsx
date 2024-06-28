import React from "react";
import Image from "next/image";
import boot from "@/public/Rectangle 19.jpg";

export function OurServiceLeft({title, text1, text2, text3, text4, text5, skill1, skill2, skill3, skill4, skill5, skill6, srcImg}) {
  return (
    <>
      <div className="flex w-full max-w-[80%]">
        <div className="w-full max-w-[85%] flex flex-col justify-evenly">
          <h1 className="z-10  text-4xl md:text-[60px] lg:text-[60px] xl:text-[60px] text-[20px] font-bold font text-blue-400">
            {title}
          </h1>
          <div className="flex flex-col gap-1">
            <p className="z-10 font md:text-[24px] text-2xl text-gray-500">
              {text1}
            </p>
            <p className="z-10 font md:text-[24px] text-2xl text-gray-500">
              {text2}
            </p>
            <p className="z-10 font md:text-[24px] text-2xl text-gray-500">
              {text3}
            </p>
            <p className="z-10 font md:text-[24px] text-2xl text-gray-500">
              {text4}
            </p>
            <p className="z-10 font md:text-[24px] text-2xl text-gray-500">
              {text5}
            </p>
          </div>
          <div className="text-blue-500 w-full max-w-[100%] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
            <p>
              <span className="text-blue-950 font-bold text-2xl">-</span>{skill1}</p>
            <p>
              <span className="text-blue-950 font-bold text-2xl">-</span>{skill2}</p>
            <p>
              <span className="text-blue-950 font-bold text-2xl">-</span>{skill3}</p>
            <p>
              <span className="text-blue-950 font-bold text-2xl">-</span>{skill4}</p>
            <p>
              <span className="text-blue-950 font-bold text-2xl">-</span>{skill5}</p>
            <p>
              <span className="text-blue-950 font-bold text-2xl">-</span>{skill6}</p>
          </div>
        </div>
        <div className="w-full max-w-[50%]">
          <div className="w-full h-full flex justify-end self-end">
            <Image src={srcImg} alt="bootcamp" className="object-contain" />
          </div>
        </div>
      </div>
    </>
  );
}

export function OurServiceRight({title, text1, text2, text3, text4, text5, skill1, skill2, skill3, skill4, skill5, skill6, srcImg}) {
  return (
    <>
      <div className="flex w-full max-w-[80%]">
        <div className="w-full max-w-[50%]">
          <div className="w-full h-full flex justify-start self-start">
            <Image src={srcImg} alt="bootcamp" className="object-contain" />
          </div>
        </div>
        <div className="w-full max-w-[50%] flex justify-center items-center">
        <div className="w-full max-w-[85%] h-full flex flex-col justify-evenly">
          <h1 className="z-10  text-4xl md:text-[60px] lg:text-[60px] xl:text-[60px] text-[20px] font-bold font text-blue-400">
            {title}
          </h1>
          <div className="flex flex-col gap-1">
            <p className="z-10 font md:text-[24px] text-2xl text-gray-500">
              {text1}
            </p>
            <p className="z-10 font md:text-[24px] text-2xl text-gray-500">
              {text2}
            </p>
            <p className="z-10 font md:text-[24px] text-2xl text-gray-500">
              {text3}
            </p>
            <p className="z-10 font md:text-[24px] text-2xl text-gray-500">
              {text4}
            </p>
            <p className="z-10 font md:text-[24px] text-2xl text-gray-500">
              {text5}
            </p>
          </div>
          <div className="text-blue-500 w-full max-w-[100%] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
            <p>
              <span className="text-blue-950 font-bold text-2xl">-</span>{" "}
              {skill1}
            </p>
            <p>
              <span className="text-blue-950 font-bold text-2xl">-</span>{" "}
              {skill2}
            </p>
            <p>
              <span className="text-blue-950 font-bold text-2xl">-</span>{" "}
              {skill3}
            </p>
            <p>
              <span className="text-blue-950 font-bold text-2xl">-</span>{" "}
              {skill4}
            </p>
            <p>
              <span className="text-blue-950 font-bold text-2xl">-</span>{" "}
              {skill5}
            </p>
            <p>
              <span className="text-blue-950 font-bold text-2xl">-</span>{" "}
              {skill6}
            </p>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
