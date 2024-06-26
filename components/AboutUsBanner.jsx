import React from 'react'
import Image from 'next/image'
import aboutUsbanner from "../public/about-us-banner.png"

const AboutUsBanner = () => {
    return (
        <>
            <div className="relative h-screen md:h-[529px] flex flex-col justify-end overflow-hidden">
                <div className="absolute top-0 left-0 w-full md:h-full bg-opacity-[70%] bg-[#011225]"></div>
                <Image src={aboutUsbanner} alt="about-us-banner" className="inset-0 h-full w-full object-cover" />
                <div className='absolute inset-0 flex flex-col md:mt-4 mt-10 justify-center items-center place-content-center gap-[56px] text-white p-4 md:p-0'>
                    <h3 className="font-bold text-[40px] leading-[48px] md:text-[60px] md:leading-[72px] text-center md:w-[830px] h-[77px] mx-auto font text-[#FFFFFF]">
                        Get To know more About us
                    </h3>
                    <div className="text-center max-w-6xl mx-auto">
                        <p className="font-light text-[20px] leading-[28px] md:text-[30px] md:leading-[36px] text-center text-[#FFFFFF] w-full max-w-[1090px] mx-auto font text-2xl ">
                            Learn web development and land a job in the tech industry with 1-on-1 guidance from an expert mentor and career coach. This program goes beyond teaching coding skills to career services you need to help you land a high-paying job in the tech industry.
                        </p>

                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default AboutUsBanner