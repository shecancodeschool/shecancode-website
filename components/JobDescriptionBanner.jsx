import Image from 'next/image';
import bannerImage from "../public/about-us-banner.png";

const JobDescriptionBanner = () => {
    return (
        <div className="relative h-screen md:h-[529px] flex flex-col justify-end overflow-hidden">
            <Image src={bannerImage} alt="about-us-banner" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center p-8 md:p-20 text-white">
                <div className="w-full max-w-[1440px] mx-auto">
                    <div className="w-full md:w-[560px]">
                        <div className="text-[24px] leading-[31.2px] font-medium mb-4">
                            <a href="/careers">Back to careers</a>
                        </div>
                        <h1 className="text-[64px] leading-[83.2px] font-bold mb-8">Frontend Trainee</h1>
                        <div className="space-y-4 mb-8">
                            <div className="flex flex-col md:flex-row md:space-x-4">
                                <div className="w-full md:w-[172px]">
                                    <p className="mb-1 text-[24px]">Location</p>
                                    <p className="text-[20px]">Kigali, Kacyiru</p>
                                </div>
                                <div className="w-full md:w-[141px]">
                                    <p className="mb-1 text-[24px]">Job type</p>
                                    <p className="text-[20px]">Full-time</p>
                                </div>
                                <div className="w-full md:w-[151px]">
                                    <p className="mb-1 text-[24px]">Salary</p>
                                    <p className="text-[20px]">Negotiable</p>
                                </div>
                            </div>
                        </div>
                        <button className="w-full md:w-[283px] h-[57px] px-4 py-2 bg-[#317ACC] text-white font-[400] text-[18px] rounded">
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDescriptionBanner;
