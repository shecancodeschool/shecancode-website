import React from 'react'
import Image from 'next/image'
import privacyPolicyBanner from "../public/privacyPolicyBanner.png"

const PrivacyPolicyBanner = () => {
    return (
        <>
            <div className="relative h-screen md:h-[529px] flex flex-col justify-end overflow-hidden">
                {/* <div className="absolute top-0 left-0 w-full md:h-full bg-opacity-[70%] bg-[#011225]"></div> */}
                <Image src={privacyPolicyBanner} alt="privacyPolicy-banner" className="inset-0 h-full w-full object-cover" />
                <div className='absolute inset-0 flex flex-col md:mt-4 mt-10 place-content-center gap-[18px] text-white p-4 md:p-0'>
                    <h3 className="font-semibold text-[50px] font leading-[70px] md:text-[60px] md:leading-[72px] text-center md:w-[830px] h-[77px] mx-auto font text-[#FFFFFF]">
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

export default PrivacyPolicyBanner