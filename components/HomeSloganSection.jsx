// HomeSloganSection.js
import React from 'react';
import Image from 'next/image';
import graduationImage from '/public/claudia.png';

const HomeSloganSection = () => {
    return (
        <section
            className="flex md:my-7  flex-col gap-24 md:flex-row items-center place-content-center bg-gradient-to-r from-green-100 to-blue-100 h-full overflow-hidden"
            style={{ backgroundImage: 'url("/2.png")', backgroundSize: 'cover' }}>
            <div className="z-10  justify-center  md:block hidden">
                <div className="flex justify-center items-center">
                    <Image
                        src={graduationImage}
                        alt="Graduate"
                        className="rounded-lg z-10  w-[408px]"

                    />
                    {/* <div className="absolute flex justify-center items-center h-full">
                        <div className="z-0 w-72 h-[85%] md:w-96 md:h-94 border-4 border-dashed border-[#09B451] opacity-30 rounded-full"></div>
                    </div> */}
                </div>
            </div>

            <div className="flex md:items-center md:justify-center py-8 md:mt-16 md:pt-7">
                <div className="flex flex-col gap-6 justify-start  md:items-start place-content-center  md:text-left px-4">
                    <div className="flex flex-col md:gap-2 w-full">
                        <h1 className="text-[28px] md:text-[52px] font text-[#333333] font-semibold md:mb-4">
                            We are <span className="text-[#317ACC] relative underline-experts">Experts</span> Learning
                        </h1>
                        <h1 className="text-[28px]  md:text-[52px] text-[#333333] font font-bold">Institution</h1>
                    </div>
                    <div className="mt-4 md:text-[24px]">
                        <p className="text-gray-700 max-w-xl font-light font-k2d">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit elit, bibendum volutpat platea mi, adipiscing eget magna. Eu nulla ut urna venenatis velit et tincidunt. Id vitae velit.</p>
                    </div>
                    <div className="flex justify-start">
                        <button className="bg-[#317ACC] font-k2d text-white py-2 px-8 rounded-md mt-6 transition duration-300 hover:bg-[#255a9e]">
                            Enroll now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSloganSection;
