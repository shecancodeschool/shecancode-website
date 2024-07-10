import Image from 'next/image';
import bannerImage from "../public/CourseDetailsBanner.png";

const CourseDetailBanner = () => {
    return (
        <div className="relative h-screen md:h-[650px] flex flex-col justify-end overflow-hidden">
            <Image src={bannerImage} alt="about-us-banner" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute font top-0 left-0 w-full h-full flex flex-col justify-center items-center p-8 md:p-20 text-[#FFFFFF]">
                <div className="w-full max-w-[1440px] mx-auto mt-16">


                    <h1 className="text-[32px] md:text-[60px] leading-[83.2px] font-semibold">UX & Web Design Master Course:</h1>
                    <h1 className="text-[32px] md:text-[60px] leading-[83.2px] font-semibold mb-8">Strategy, Design, Development</h1>
                    <p className="text-[24px] max-w-2xl mb-6">
                        Learn how to apply User Experience (UX) principles to your website designs, code a variety of sites, and increase sales
                    </p>
                    <p className="mb-6">
                        Published By Pacifique
                    </p>
                    <div className="w-full md:w-[172px] flex flex-row gap-6">
                        <p className="mb-1">Deadline</p>
                        <p className="ml-2 ">08/04/2024</p>
                    </div>
                    <div className="w-full md:w-[172px] flex flex-row gap-6">
                        <p className="mb-1 ">Duration</p>
                        <p className="ml-2 ">4months</p>
                    </div>
                    <div className="w-full md:w-[172px] flex flex-row gap-6">
                        <p className="mb-1">Price</p>
                        <p className="ml-2">$400</p>
                    </div>


                    <button className="w-full md:w-[283px] font h-[57px] px-4 py-2 bg-[#317ACC] text-[#FFFFFF] font-[400] text-[18px] rounded mt-2">
                        Apply Now
                    </button>

                </div>
            </div>
        </div>
    );
};

export default CourseDetailBanner;
