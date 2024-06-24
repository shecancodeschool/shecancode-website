import React from 'react';
import Image from 'next/image';
import historicalbgImage from "../public/education-1.jpg";

const HistoricalBackground = () => {
    return (
        <div className="mt-20 flex justify-center items-center">
            <div className="max-w-6xl mx-auto px-5 md:px-10 lg:px-0 gap-x-10 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8 mb-5 md:mb-0 text-center md:text-left">
                    <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 text-[#317ACC] leading-tight">
                        Historical Background
                    </h2>
                    <p className="font-normal text-lg md:text-xl lg:text-2xl leading-6 md:leading-8 text-justify text-[#848383] mt-10">
                        Learn web development and land a job in the tech industry with 1-on-1 guidance from an expert mentor and career coach. This program goes beyond teaching coding skills to career services you need to help you land a high-paying job in the tech industry. You spend time during the course with the career service team to help you reach your job search and job preparation guidance.
                    </p>
                </div>
                <div className="relative md:w-1/2 flex justify-center">
                    <div className="absolute inset-0 bg-[#317ACC] opacity-45 rounded-tl-none rounded-tr-[120px] rounded-bl-[120px] rounded-br-none"></div>
                    <Image
                        src={historicalbgImage}
                        alt="Historical Background Image"
                        className="w-full h-full rounded-tl-none rounded-tr-[120px] rounded-bl-[120px] rounded-br-none object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default HistoricalBackground;
