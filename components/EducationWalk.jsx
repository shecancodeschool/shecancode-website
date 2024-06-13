import Image from 'next/image';

const EducationWalkSection = () => {
    return (
        <div className=" max-w-full mx-auto px-6 md:px-[52px]  md:py-3 py-1 md:mt-[113px] mt-8 md:mb-14 mb-7  gap-24 flex flex-col lg:flex-row  justify-center font">
            {/* Image div */}
            <div className=" h-[474px]  md:flex hidden gap-4 flex-col rounded bg-[#6AACE8]/10 items-center relative">
                <div className="relative -right-20  -top-2  ">
                    <Image
                        src="/education-1.jpg"
                        alt="Audience"
                        width={362}
                        height={246}
                        className="rounded-md relative z-10"
                    />
                </div>
                <div className="relative  -left-16 -bottom-1 lg:order-2 lg:ml-6 w-full lg:w-auto">
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
            <div className=" lg:mt-0 flex flex-col justify-center items-start">
                <h2 className="md:text-[48px] text-3xl font-semibold text-[#317ACC] mb-5 md:mb-12 leading-[3rem]">
                    Let Your Education Do <br></br> The Walking
                </h2>
                <ul className='flex flex-col gap-[20px] '>
                    <li className="flex items-center mb-4 cursor-pointer">
                        <div className="bg-[#DDFFFF] p-3 hover:bg-[#011225] transition hover:duration-300 rounded-full mr-4">
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className='text-[#6AACE8]'
                                height="1.5em"
                                width="1.5em"
                            >
                                <path d="M21 3h-7a2.98 2.98 0 00-2 .78A2.98 2.98 0 0010 3H3a1 1 0 00-1 1v15a1 1 0 001 1h5.758c.526 0 1.042.214 1.414.586l1.121 1.121c.009.009.021.012.03.021.086.079.182.149.294.196h.002a.996.996 0 00.762 0h.002c.112-.047.208-.117.294-.196.009-.009.021-.012.03-.021l1.121-1.121A2.015 2.015 0 0115.242 20H21a1 1 0 001-1V4a1 1 0 00-1-1zM8.758 18H4V5h6c.552 0 1 .449 1 1v12.689A4.032 4.032 0 008.758 18zM20 18h-4.758c-.799 0-1.584.246-2.242.689V6c0-.551.448-1 1-1h6v13z" />
                            </svg>
                        </div>
                        <span className="text-gray-700 md:text-[30px] font-medium">Free computer, Videos and kits</span>
                    </li>
                    <li className="flex items-center mb-4  cursor-pointer">
                        <div className="bg-[#DDFFFF] p-3 hover:bg-[#011225] transition hover:duration-300   rounded-full mr-4">
                            <svg
                                fill="currentColor"
                                viewBox="0 0 16 16"
                                className='text-[#6AACE8]'
                                height="1.5em"
                                width="1.5em"
                            >
                                <path d="M8.515 1.019A7 7 0 008 1V0a8 8 0 01.589.022l-.074.997zm2.004.45a7.003 7.003 0 00-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 00-.439-.27l.493-.87a8.025 8.025 0 01.979.654l-.615.789a6.996 6.996 0 00-.418-.302zm1.834 1.79a6.99 6.99 0 00-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 00-.214-.468l.893-.45a7.976 7.976 0 01.45 1.088l-.95.313a7.023 7.023 0 00-.179-.483zm.53 2.507a6.991 6.991 0 00-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 01-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 01-.401.432l-.707-.707z" />
                                <path d="M8 1a7 7 0 104.95 11.95l.707.707A8.001 8.001 0 118 0v1z" />
                                <path d="M7.5 3a.5.5 0 01.5.5v5.21l3.248 1.856a.5.5 0 01-.496.868l-3.5-2A.5.5 0 017 9V3.5a.5.5 0 01.5-.5z" />
                            </svg>
                        </div>
                        <span className="text-gray-700 md:text-[30px] font-medium">Learn at your own pace</span>
                    </li>
                    <li className="flex items-center mb-4  cursor-pointer">
                        <div className="bg-[#DDFFFF] p-3  hover:bg-[#011225] transition hover:duration-300  rounded-full mr-4">
                            <svg
                                viewBox="0 0 24 24"
                                className='text-[#6AACE8]'
                                fill="currentColor"
                                height="1.5em"
                                width="1.5em"
                            >
                                <path d="M20 5h-8.586L9.707 3.293A.997.997 0 009 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z" />
                            </svg>
                        </div>
                        <span className="text-gray-700 md:text-[30px] font-medium">Collaborate with different learners around the globe</span>
                    </li>
                    <li className="flex items-center mb-4  cursor-pointer">
                        <div className="bg-[#DDFFFF] p-3 hover:bg-[#011225] transition hover:duration-300  rounded-full mr-4">
                            <svg
                                fill="none"
                                className='text-[#6AACE8]'
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                height="1.5em"
                                width="1.5em"
                            >
                                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                <path d="M13 7 A4 4 0 0 1 9 11 A4 4 0 0 1 5 7 A4 4 0 0 1 13 7 z" />
                                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                            </svg>
                        </div>
                        <span className="text-gray-700 md:text-[30px] font-medium">Top instructors around the globe</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default EducationWalkSection;
