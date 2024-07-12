import React from 'react'
import Image from 'next/image'
import admissionPolicyBanner from "../public/AdmissionPolicyBanner.png"

const AdmissionPolicyBanner = () => {
    return (
        <>
            <div className="relative h-screen md:h-[529px] flex flex-col justify-end overflow-hidden">
                {/* <div className="absolute top-0 left-0 w-full md:h-full bg-opacity-[70%] bg-[#011225]"></div> */}
                <Image src={admissionPolicyBanner} alt="AdmissionPolicy-banner" className="inset-0 h-full w-full object-cover" />
                <div className='absolute inset-0 flex flex-col md:mt-4 mt-10 place-content-center gap-[56px] text-white p-4 md:p-0'>
                    <h3 className="font-semibold text-[50px] font leading-[70px] md:text-[60px] md:leading-[72px] text-center md:w-[830px] h-[77px] mx-auto font text-[#FFFFFF]">
                        Admission Policy
                    </h3>
                    

                </div>
            </div>
        </>
    )
}

export default AdmissionPolicyBanner