// components/CourseDetails.jsx
import Image from 'next/image';
import courseImage from '../public/image 8.png';
import ExpandableTabs from './ExpandableTabs';
import CourseDetailFaQ from './CourseDetailFaQ';
import icon1 from "../public/icon1.png";
import icon2 from "../public/icon2.png";
import icon3 from "../public/icon3.png";
import icon4 from "../public/icon4.png";
import icon5 from "../public/icon5.png";

const CourseDetails = () => {
    const faqData = [
        {
            id: 1,
            question: "Do I need to take both the UX and UI programs to learn about both disciplines?",
            answer: ""
        },
        {
            id: 2,
            question: "Are there payment plans available?",
            answer: "Yes, you can select a monthly payment plan of $550.00 a month for 10 months and $1,400.00 upfront. Note: You will be required to pay the full duration of the payment plan even if you finish the program before the payment plan ends. Still doesn’t work for you? Book a call with a Career Advisor and see if you are eligible for a custom payment plan."
        },
        {
            id: 3,
            question: "What’s the “catch” for the job guarantee?",
            answer: ""
        },
        {
            id: 4,
            question: "What kind of job can I get after the program?",
            answer: ""
        },
        {
            id: 5,
            question: "What if I have a question that isn’t answered here?",
            answer: ""
        },
    ];

    return (
        <div className=" max-w-[84rem] mx-auto flex mt-[67px]">
            <div>
            {/* First Section */}
            <div className="flex flex-col gap-20 md:flex-row md:mb-8 ">
                <div className=" md:w-[711px] md:h-[682px] md:pr-8">
                    <h1 className="md:w-[722px] md:h-[140px] font-semibold max-w-xl font md:text-[40px] text-[24px] text-[#317ACC] mb-4">Covers pretty much everything you need to know about UX</h1>
                    <p className="mb-4 font font-normal md:text-[24px] text-[#615A63] leading-[38.2px]">
                        This course will teach you everything you need to know about UX, including design, content, and coding. And you'll learn from the ground up, so it doesn't matter how much experience you have when you start.
                    </p>
                    <p className="mb-8 font font-normal text-[24px] text-[#615A63] leading-[38.2px]">
                        You'll be exposed to principles and strategies, but more importantly, you'll learn how to actually apply these abstract concepts to your projects.
                    </p>
                    <ul className="list-disc list-inside w-[725px] h-[125px] mb-4 font font-normal text-[24px] text-[#615A63] leading-[38.2px]">
                        <li>Apply UX strategies to a site's content & design</li>
                        <li>Know what dictates how your website should look</li>
                        <li>Design and code a B2B website, a B2C blog</li>
                        <li>Understand information architecture to enhance usability</li>
                    </ul>
                </div>
                <div className="w-[566px] h-[388px] flex flex-col space-y-4 mt-4">
                    <div className="flex items-center">
                        <Image src={icon1} alt="icon1" />
                        <div className="ml-8 flex flex-col">
                            <p className="whitespace-nowrap font font-semibold text-[20px] text-[#000000] leading-[32px]">Authentic Certificate</p>
                            <p className="whitespace-nowrap text-[#807A82] font-[16px] font leading-[25.6px]">Earn a Certificate upon completion</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <Image src={icon2} alt="icon2" />
                        <div className="ml-8 flex flex-col">
                            <p className="whitespace-nowrap font font-semibold text-[20px] text-[#000000] leading-[32px]">On-site Classes</p>
                            <p className="whitespace-nowrap text-[#807A82] font-[16px] font leading-[25.6px]">Start instantly and learn at your own pace</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <Image src={icon3} alt="icon3" />
                        <div className="ml-8 flex flex-col">
                            <p className="whitespace-nowrap font font-semibold text-[20px] text-[#000000] leading-[32px]">Live Frameworks</p>
                            <p className="whitespace-nowrap text-[#807A82] font-[16px] font leading-[25.6px]">Set and maintain flexible deadlines.</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <Image src={icon4} alt="icon4" />
                        <div className="ml-8 flex flex-col">
                            <p className="whitespace-nowrap font font-semibold text-[20px] text-[#000000] leading-[32px]">Beginner Level</p>
                            <p className="whitespace-nowrap text-[#807A82] font-[16px] font leading-[25.6px]">No prior experience required.</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <Image src={icon5} alt="icon5" />
                        <div className="ml-8 flex flex-col">
                            <p className="whitespace-nowrap font font-semibold text-[20px] text-[#000000] leading-[32px]">Rigorous Curriculum</p>
                            <p className="whitespace-nowrap text-[#807A82] font-[16px] font leading-[25.6px]">English</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Section */}
            <div className="flex flex-col max-w-[84rem]  gap-[80px] md:flex-row items-center md:items-start md:mb-8 mt-8 ">
                <Image src={courseImage} alt="Course" className="rounded-lg mb-4 object-cover  md:w-[691px] md:h-[666px] md:mr-8" />
                <div className="">
                    <h2 className=" font-semibold max-w-xl font text-[40px] text-[#317ACC] leading-[50px] mb-4">Course Prerequisites</h2>
                    <ol className="list-decimal list-inside space-y-2 font font-normal text-[24px] text-[#000000]/60">
                        <li>All applicants must be 18 years and above and provide proof of ID/Passport.</li>
                        <li>Have a working laptop that meets the following baseline specifications: Core i5 7th Gen and upwards, 4GB RAM, and at least 256GB of storage.</li>
                        <li>Be available to take a part-time course for at least 20 to 25 hours on weekdays and attend 1 live lecture.</li>
                        <li>Have post-secondary experience i.e. diploma+/bachelor's.</li>
                        <li>Suited for working professionals (Not those who are enrolled in another full-time academic program).</li>
                    </ol>
                </div>
            </div>

            <div className="md:w-[1334px] md:h-[620px] mt-[80px]">
                <div className="mt-8">
                    <h2 className="md:w-[526px] md:h-[70px] font-semibold max-w-xl font text-[40px] text-[#317ACC] leading-[50px] mt-10">Discover our Modules</h2>
                    <div className="flex flex-wrap gap-16 font text-[#807A82] text-[14px] items-center">
                        <div>10 Lessons</div>
                        <div>20 Videos</div>
                        <div>20 Articles</div>
                        <div>18 Assignments</div>
                        <div>24h 32m Completion Time</div>
                        <button className="mt-4 text-[#3758B2] font font-semibold text-[16px] ml-auto">Expand All Lessons</button>
                    </div>
                </div>
                <div className="">
                    <ExpandableTabs />
                </div>
            </div>

            {/* FAQ Section */}
            <div className="md:w-[1321px] mb-5">
                <CourseDetailFaQ faqs={faqData} />
            </div>
        </div>
        </div>
    );
};

export default CourseDetails;
