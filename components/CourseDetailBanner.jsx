import Image from 'next/image';
import bannerImage from "../public/CourseDetailsBanner.png";
import { BiDotsVertical } from 'react-icons/bi';

const CourseDetailBanner = () => {
    return (
        <div className="relative h-screen md:h-[650px] flex flex-col justify-end overflow-hidden ">
            <Image src={bannerImage} alt="about-us-banner" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute font top-0 left-0 w-full h-full flex flex-col justify-center items-center md:mx-[52px] mx-5 text-[#FFFFFF]">
                <div className="w-full max-w-[1440px] mx-auto mt-16 gap-[27px]">

                    <div>
                    <h1 className="text-[20px] md:text-[60px] md:leading-[83.2px] ] font-semibold">UX & Web Design Master Course:</h1>
                    <h1 className="text-[20px] md:text-[60px] md:leading-[83.2px] font-semibold mb-8">Strategy, Design, Development</h1>
                    <p className="text-[14px]  md:text-[24px] max-w-2xl mb-6 text-[#E0E0E0]">
                        Learn how to apply User Experience (UX) principles to your website designs, code a variety of sites, and increase sales
                    </p>

                    </div>
                    <div className='md:w-1/2 grid grid-cols-1 gap-[13px]'>
                        <div className="w-full grid grid-cols-3 gap-[27px]">
                            <p className="text-[#E0E0E0]">Published By Pacifique</p>
                            <p className="text-[#E0E0E0]">Duration</p>
                            <p className="text-[#E0E0E0]">Price</p>
                        </div>
                        <div className="w-full grid grid-cols-3 gap-[27px]">
                            <p className="text-[#E0E0E0] "> Deadline 08/04/2024</p>
                            <p className="text-[#E0E0E0] ">4months</p>
                            <p className="text-[#E0E0E0]">$400</p>
                        </div>

                    </div>
                    <div className='mt-[27px]'>
                        <button className=" md:w-[283px] font h-[57px] px-4 md:py-2 bg-[#317ACC] text-[#FFFFFF]  md:text-[18px] rounded mt-2">
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailBanner;
