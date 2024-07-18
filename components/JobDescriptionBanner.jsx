import Image from 'next/image';
import bannerImage from "../public/about-us-banner.png";
import Link from 'next/link';

const JobDescriptionBanner = () => {
    return (
        <div className="relative h-screen md:h-[529px] flex flex-col justify-end overflow-hidden">
            <Image src={bannerImage} alt="about-us-banner" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute font top-0 left-0 w-full h-full flex flex-col justify-center items-center p-8 md:p-20 text-[#FFFFFF]">
                <div className="w-full max-w-[1440px] mx-auto">
                    <div className="w-full md:w-[560px]">
                        <div className="text-[24px] font text-[#FFFFFF] leading-[31.2px] font-medium flex items-center space-x-2">
                            <svg
                                viewBox="0 0 512 512"
                                fill="currentColor"
                                height="1em"
                                width="1em"
                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={32}
                                    d="M249.38 336L170 256l79.38-80M181.03 256H342"
                                />
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeMiterlimit={10}
                                    strokeWidth={32}
                                    d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                                />
                            </svg>
                            <a href="/careers">Back to careers</a>
                        </div>
                        <h1 className="text-[32px] md:text-[60px] leading-[83.2px] font-bold mb-8">Frontend Trainee</h1>
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
                        <Link href={'/job-application'}>
                        <button className="w-full md:w-[283px] font h-[57px] px-4 py-2 bg-[#317ACC] text-[#FFFFFF] font-[400] text-[18px] rounded">
                            Apply Now
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDescriptionBanner;
