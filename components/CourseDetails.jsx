import Image from 'next/image';
import courseImage from '../public/image8.png';
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
            answer: "Yes, you can select a monthly payment plan of $550.00 a month for 10 months and $1,400.00 upfront. Note: You will be required to pay the full duration of the payment plan even if you finish the program before the payment plan ends. Still doesn’t work for you? Book a call with a Career Advisor and see if you are eligible for a custom payment plan."
        },
        {
            id: 2,
            question: "Are there payment plans available?",
            answer: "Yes, you can select a monthly payment plan of $550.00 a month for 10 months and $1,400.00 upfront. Note: You will be required to pay the full duration of the payment plan even if you finish the program before the payment plan ends. Still doesn’t work for you? Book a call with a Career Advisor and see if you are eligible for a custom payment plan."
        },
        {
            id: 3,
            question: "What’s the “catch” for the job guarantee?",
            answer: "Yes, you can select a monthly payment plan of $550.00 a month for 10 months and $1,400.00 upfront. Note: You will be required to pay the full duration of the payment plan even if you finish the program before the payment plan ends. Still doesn’t work for you? Book a call with a Career Advisor and see if you are eligible for a custom payment plan."
        },
        {
            id: 4,
            question: "What kind of job can I get after the program?",
            answer: "Yes, you can select a monthly payment plan of $550.00 a month for 10 months and $1,400.00 upfront. Note: You will be required to pay the full duration of the payment plan even if you finish the program before the payment plan ends. Still doesn’t work for you? Book a call with a Career Advisor and see if you are eligible for a custom payment plan."
        },
        {
            id: 5,
            question: "What if I have a question that isn’t answered here?",
            answer: "Yes, you can select a monthly payment plan of $550.00 a month for 10 months and $1,400.00 upfront. Note: You will be required to pay the full duration of the payment plan even if you finish the program before the payment plan ends. Still doesn’t work for you? Book a call with a Career Advisor and see if you are eligible for a custom payment plan."
        },
    ];

    return (
        <div className="max-w-[84rem] mx-auto mt-[67px] px-4">
            <div>
                {/* First Section */}
                <div className="flex flex-col gap-8 md:gap-20 md:flex-row md:mb-8">
                    <div className="md:w-[711px] md:h-[682px] md:pr-8">
                        <h1 className="font-semibold text-[24px] md:text-[40px] text-[#317ACC] mb-4">Covers pretty much everything you need to know about UX</h1>
                        <p className="mb-4 font-normal text-[16px] md:text-[24px] text-[#615A63] leading-[24px] md:leading-[38.2px]">
                            This course will teach you everything you need to know about UX, including design, content, and coding. And you'll learn from the ground up, so it doesn't matter how much experience you have when you start.
                        </p>
                        <p className="mb-8 font-normal text-[16px] md:text-[24px] text-[#615A63] leading-[24px] md:leading-[38.2px]">
                            You'll be exposed to principles and strategies, but more importantly, you'll learn how to actually apply these abstract concepts to your projects.
                        </p>
                        <ul className="list-disc list-inside mb-4 font-normal text-[16px] md:text-[24px] text-[#615A63] leading-[24px] md:leading-[38.2px]">
                            <li>Apply UX strategies to a site's content & design</li>
                            <li>Know what dictates how your website should look</li>
                            <li>Design and code a B2B website, a B2C blog</li>
                            <li>Understand information architecture to enhance usability</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-[566px] flex flex-col space-y-4 mt-4 md:mt-0">
                        {[
                            { icon: icon1, title: "Authentic Certificate", desc: "Earn a Certificate upon completion" },
                            { icon: icon2, title: "On-site Classes", desc: "Start instantly and learn at your own pace" },
                            { icon: icon3, title: "Live Frameworks", desc: "Set and maintain flexible deadlines." },
                            { icon: icon4, title: "Beginner Level", desc: "No prior experience required." },
                            { icon: icon5, title: "Rigorous Curriculum", desc: "English" }
                        ].map(({ icon, title, desc }, index) => (
                            <div key={index} className="flex items-center">
                                <Image src={icon} alt={`icon${index + 1}`} />
                                <div className="ml-4 md:ml-8 flex flex-col">
                                    <p className="whitespace-nowrap font-semibold text-[16px] md:text-[20px] text-[#000000] leading-[24px] md:leading-[32px]">{title}</p>
                                    <p className="whitespace-nowrap text-[14px] md:text-[16px] text-[#807A82] leading-[21px] md:leading-[25.6px]">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Second Section */}
                <div className="flex flex-col gap-8 md:flex-row md:items-start mt-8">
                    <Image src={courseImage} alt="Course" className="rounded-lg w-full md:w-[691px] md:h-[666px] mb-4 md:mr-8" />
                    <div>
                        <h2 className="font-semibold text-[24px] md:text-[40px] text-[#317ACC] leading-tight mb-4">Course Prerequisites</h2>
                        <ol className="list-decimal list-inside space-y-2 font-normal text-[16px] md:text-[24px] text-[#000000]/60 leading-[24px] md:leading-[38.2px]">
                            <li>All applicants must be 18 years and above and provide proof of ID/Passport.</li>
                            <li>Have a working laptop that meets the following baseline specifications: Core i5 7th Gen and upwards, 4GB RAM, and at least 256GB of storage.</li>
                            <li>Be available to take a part-time course for at least 20 to 25 hours on weekdays and attend 1 live lecture.</li>
                            <li>Have post-secondary experience i.e. diploma+/bachelor's.</li>
                            <li>Suited for working professionals (Not those who are enrolled in another full-time academic program).</li>
                        </ol>
                    </div>
                </div>

                <div className="md:w-[1334px] md:h-[620px] mt-8 md:mt-[80px]">
                    <div className="mt-8">
                        <h2 className="font-semibold text-[24px] md:text-[40px] text-[#317ACC] leading-tight">Discover our Modules</h2>
                        <div className="flex flex-wrap gap-4 md:gap-16 text-[#807A82] text-[14px] md:text-[16px] items-center mt-4">
                            <div>10 Lessons</div>
                            <div>20 Videos</div>
                            <div>20 Articles</div>
                            <div>18 Assignments</div>
                            <div>24h 32m Completion Time</div>
                            <button className="mt-4 md:mt-0 text-[#3758B2] font-semibold text-[14px] md:text-[16px] ml-auto">Expand All Lessons</button>
                        </div>
                    </div>
                    <ExpandableTabs />
                </div>

                {/* FAQ Section */}
                <div className="md:w-[1321px] mt-8 md:mt-10">
                    <CourseDetailFaQ faqs={faqData} />
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;
