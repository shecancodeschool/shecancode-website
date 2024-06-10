import Image from 'next/image';

const EducationWalkSection = () => {
    return (
        <div className="bg-white py-8 px-4 sm:px-6 lg:py-12 lg:px-8 flex flex-col lg:flex-row items-center font">
            {/* Image div */}
            <div className="w-full lg:w-1/2 flex flex-col items-center relative">
                <div className="relative mb-10 lg:mb-4 lg:order-1 w-full lg:w-auto">
                    <div className="absolute -top-4 -left-10 bg-blue-50 rounded-md w-full h-full z-0"></div>
                    <Image
                        src="/education-1.jpg"
                        alt="Audience"
                        width={362}
                        height={246}
                        className="rounded-md relative z-10"
                    />
                </div>
                <div className="relative lg:order-2 lg:ml-6 w-full lg:w-auto">
                    <div className="absolute -top-4 -left-10 bg-blue-50 rounded-md w-full h-full z-0"></div>
                    <Image
                        src="/education-2.png"
                        alt="Laptop and hands"
                        width={362}
                        height={246}
                        className="rounded-md relative z-10"
                    />
                </div>
            </div>
            {/* Text div */}
            <div className="w-full lg:w-1/2  lg:mt-0 flex flex-col justify-center items-start">
                <h2 className="text-2xl lg:text-3xl font-semibold text-[#0B2B4E] text-regular-48 mb-4">
                    Let Your Education Do The Walking
                </h2>
                <ul>
                    <li className="flex items-center mb-4">
                        <div className="bg-blue-100 p-2 rounded-full mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0121 13.758m-9 1.242l-6.16-3.422A12.083 12.083 0 003 13.758m9 1.242v5m0 0v5m0-5H3m9 0h9" />
                            </svg>
                        </div>
                        <span className="text-gray-700 text-lg">Free computer, Videos and kits</span>
                    </li>
                    <li className="flex items-center mb-4">
                        <div className="bg-blue-100 p-2 rounded-full mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <span className="text-gray-700 text-lg">Learn at your own pace</span>
                    </li>
                    <li className="flex items-center mb-4">
                        <div className="bg-blue-100 p-2 rounded-full mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0121 13.758m-9 1.242l-6.16-3.422A12.083 12.083 0 003 13.758m9 1.242v5m0 0v5m0-5H3m9 0h9" />
                            </svg>
                        </div>
                        <span className="text-gray-700 text-lg">Collaborate with different learners around the globe</span>
                    </li>
                    <li className="flex items-center mb-4">
                        <div className="bg-blue-100 p-2 rounded-full mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0121 13.758m-9 1.242l-6.16-3.422A12.083 12.083 0 003 13.758m9 1.242v5m0 0v5m0-5H3m9 0h9" />
                            </svg>
                        </div>
                        <span className="text-gray-700 text-lg">Top instructors around the globe</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default EducationWalkSection;
