import React from 'react'
import Image from 'next/image'
import studentAppFormBanner from "../public/studentAppFormBanner.png"

const StudentApplicationBanner = () => {
    return (
        <>
            <div className="relative h-screen md:h-[529px] flex flex-col justify-end overflow-hidden">
                <div className="absolute top-0 left-0 w-full md:h-full bg-opacity-[70%] bg-[#011225]"></div>
                <Image src={studentAppFormBanner} alt="about-us-banner" className="inset-0 h-full w-full object-cover" />
                <div className='absolute inset-0 flex flex-col md:mt-4 mt-10 justify-center items-center place-content-center gap-[56px] text-white p-4 md:p-0'>
                    <h3 className="font-bold text-[40px] font leading-[48px] md:text-[60px] md:leading-[72px] text-center md:w-[830px] h-[77px] mx-auto font text-[#FFFFFF]">
                        Privacy Policy
                    </h3>
                    <div className="text-center max-w-2xl mx-auto">
                        <p className="font leading-[28px] md:leading-[36px] text-center text-[#FFFFFF] w-full max-w-[1090px] mx-auto font text-2xl ">
                        Last Updated May 23rd, 2023
                        </p>

                    </div>

                </div>
            </div>
        </>
    )
}

export default StudentApplicationBanner