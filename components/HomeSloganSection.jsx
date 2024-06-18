import React from 'react';
import Image from 'next/image';
import graduationImage from '/public/claudia.png';

const HomeSloganSection = () => {
    return (
        <section
            className="bg-gradient-to-r from-green-100 to-blue-100 h-auto md:h-full overflow-hidden"
            style={{ backgroundImage: 'url("/frame3.png")', backgroundSize: 'cover' }}>
            <div className='max-w-[86rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center place-content-center py-8'>
                <div className="z-10 justify-center md:block hidden">
                    <div className="flex justify-center items-center">
                        <Image
                            src={graduationImage}
                            alt="Graduate"
                            className="rounded-lg w-[60%] max-w-[554px]"
                        />
                    </div>
                </div>

                <div className="flex items-center place-content-center py-8 md:mt-1 md:pt-7">
                    <div className="flex flex-col gap-4 justify-start items-start text-left px-4">
                        <div className="flex flex-col gap-2 w-full">
                            <h1 className="text-[28px] md:text-[52px] font-semibold text-[#333333] mb-4">
                                We are <span className="text-[#317ACC] relative underline-experts">Experts</span> Learning Institution
                            </h1>
                        </div>
                        <div className="text-lg md:text-2xl text-[#0B2B4E] max-w-xl font-light">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit elit, bibendum volutpat platea mi, adipiscing eget magna. Eu nulla ut urna venenatis velit et tincidunt. Id vitae velit.</p>
                        </div>
                        <div className="flex justify-start">
                            <button className="bg-[#317ACC] md:px-[42px] md:py-[20px] px-8 py-2 text-white rounded-md mt-6 transition duration-300 hover:bg-[#255a9e]">
                                Enroll now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSloganSection;
