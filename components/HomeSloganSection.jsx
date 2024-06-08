// HomeSloganSection.js
import React from 'react';
import Image from 'next/image';
import graduationImage from '/public/claudia.png';

const HomeSloganSection = () => {
    return (
        <section
            className="relative flex flex-col md:flex-row items-center bg-gradient-to-r from-green-100 to-blue-100 p-8 md:p-16 rounded-lg overflow-hidden"
            style={{ backgroundImage: 'url("/HomeSloganSectionbg.jpeg")', backgroundSize: 'cover' }}>
            <div className="relative z-10 flex-1 flex justify-center mb-8 md:block hidden">
                <div className="relative flex justify-center items-center">
                    <Image
                        src={graduationImage}
                        alt="Graduate"
                        className="rounded-lg z-10"
                        width={300}
                        height={300}
                    />
                    <div className="absolute flex justify-center items-center h-full">
                        <div className="z-0 w-72 h-[85%] md:w-96 md:h-94 border-4 border-dashed border-[#09B451] opacity-30 rounded-full"></div>
                    </div>
                </div>
            </div>

            <div className="relative z-10 flex-1 justify-center md:text-left ">
                <div className='flex flex-col w-full'>
                    <h1 className="text-3xl md:text-4xl text-black font font-bold mb-4">
                        We are <span className="text-[#317ACC]">Experts</span> Learning
                    </h1>
                    <h1 className="text-3xl md:text-4xl text-black font font-bold">Institution</h1>
                </div>
                <div className='mt-4'>
                    <p className="text-gray-700 font">Lorem ipsum dolor sit amet, consectetur</p>
                    <p className='text-gray-700 font'>adipiscing elit. Sit elit, bibendum volutpat</p>
                    <p className='text-gray-700 font'>platea mi, adipiscing eget magna. Eu nulla ut</p>
                    <p className='text-gray-700 font'> urna venenatis velit et tincidunt. Idvitae velit.</p>
                </div>
                <button className="bg-[#317ACC] text-white py-2 px-8 rounded-md mt-6 transition duration-300">
                    Enroll now
                </button>
            </div>
        </section>
    );
};

export default HomeSloganSection;
