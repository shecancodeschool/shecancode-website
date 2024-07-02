import React from 'react';

const JobDescriptionForm = () => {
    return (
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-screen-xl mx-auto space-y-12">
                <div className="mb-20">
                    <h1 className="font font-[700] text-[40px] text-[#317ACC] md:text-5xl lg:text-6xl leading-[52px] md:leading-[52px] lg:leading-[52px] mb-[52px]">
                        About the Company
                    </h1>
                    <p className="font-[500] text-[24px] text-[#000000] text-opacity-64 leading-[31.2px]">
                        ShecanCode Limited is a Front-end that helps media companies to promote their films, web series, documentaries, digital products, etc. on YouTube. Our focus is on YouTube video production and growth hacking to increase the visibility and engagement of our client's channels.
                    </p>
                </div>
                <div className="mb-20">
                    <h1 className="font font-[700] text-[40px] text-[#317ACC] md:text-5xl lg:text-6xl leading-[52px] md:leading-[52px] lg:leading-[52px] mb-[52px]">
                        About the Role
                    </h1>
                    <p className="font-[500] text-[24px] text-[#000000] text-opacity-64 leading-[31.2px]">
                        We are seeking a highly motivated and detail-oriented YouTube Executive to join our team. The successful candidate will be responsible for managing our clients' YouTube channels, developing and executing growth strategies, and creating engaging content.
                    </p>
                </div>
                <div className="mb-20">
                    <h1 className="font font-[700] text-[40px] text-[#317ACC] md:text-5xl lg:text-6xl leading-[52px] md:leading-[52px] lg:leading-[52px] mb-[52px]">
                        Responsibilities
                    </h1>
                    <ul className="list-disc list-inside font-[500] text-[24px] text-[#000000] text-opacity-64 leading-[31.2px]">
                        <li>Manage and grow client YouTube channels</li>
                        <li>Develop and execute growth strategies to increase visibility and engagement</li>
                        <li>Create and edit high-quality video content for YouTube</li>
                        <li>Collaborate with internal teams to ensure the delivery of high-quality work on time and within budget</li>
                        <li>Analyze and report on channel performance and provide recommendations for improvement</li>
                    </ul>
                </div>
                <div className="mb-20">
                    <h1 className="font font-[700] text-[40px] text-[#317ACC] md:text-5xl lg:text-6xl leading-[52px] md:leading-[52px] lg:leading-[52px] mb-[52px]">
                        Requirements
                    </h1>
                    <ul className="list-disc list-inside font-[500] text-[24px] text-[#000000] text-opacity-64 leading-[31.2px]">
                        <li>Proven experience in managing YouTube channels and executing growth strategies</li>
                        <li>Strong video editing and content creation skills</li>
                        <li>Excellent communication, organizational, and project management skills</li>
                        <li>Deep understanding of YouTube algorithms and best practices for content creation and optimization</li>
                        <li>Ability to work independently and as part of a team</li>
                    </ul>
                </div>
                <div>
                    <p className="font-[500] text-[24px] text-[#000000] text-opacity-67 leading-[31.2px]">
                        If you are passionate about YouTube and have a proven track record of success, we would love to hear from you. Please apply with your resume and a cover letter that highlights your experience and qualifications for this role to hr@igirerwanda.org
                    </p>
                </div>
                <div>
                    <p className="font-[500] text-[24px] text-[#000000] text-opacity-67 leading-[31.2px]">
                        We are an equal opportunity employer and welcome all qualified candidates to apply.
                    </p>
                </div>
                <div>
                    <p className="font-[700] text-[32px] text-[#317ACC] leading-[41.6px]">
                        Get to know us and join our team
                    </p>
                </div>
                <button className="w-full md:w-[283px] h-[57px] px-4 py-2 bg-[#317ACC] text-white font-[400] text-[18px] rounded">
                    Apply Now
                </button>
            </div>
        </div>
    );
};

export default JobDescriptionForm;
