import React from 'react';
import Image from 'next/image';
import historicalbgImage from "../public/education-1.jpg";

const HistoricalBackground = () => {
    return (
        <div className="max-w-[84rem] mx-auto">
            <div className="mx-auto px-5 md:px-10 lg:px-0 grid lg:grid-cols-2 gap-[60px] justify-center items-center">
                <div className="md:pr-8 mb-1 md:mb-0 text-center md:text-justify">
                    <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-[42px] mb-4 text-[#317ACC] leading-tight">
                        Historical Background
                    </h2>
                    <p className="font-light text-lg md:text-xl lg:text-[28px] leading-6 md:leading-10 text-justify text-[#848383] mt-10">
                        Learn web development and land a job in the tech industry with 1-on-1 guidance from an expert mentor and career coach. This program goes beyond teaching coding skills to career services you need to help you land a high-paying job in the tech industry. You spend time during the course with the career service team to help you reach your job search and job preparation guidance.
                    </p>
                </div>
                <div className="relative flex justify-center">
                    <div className="absolute inset-0 bg-[#317ACC] opacity-45 md:rounded-tl-none md:rounded-tr-[120px] md:rounded-bl-[120px] md:rounded-br-none"></div>
                    <Image
                        src={historicalbgImage}
                        alt="Historical Background Image"
                        className="w-full md:h-[539px] md:rounded-tl-none  md:rounded-tr-[120px] md:rounded-bl-[120px] md:rounded-br-none object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default HistoricalBackground;
