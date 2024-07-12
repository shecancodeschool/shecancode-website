"use client";
import React from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LearnersExpectations = () => {
    const pathname = usePathname();

    return (
        <div className="max-w-[84rem] mx-auto mt-[67px] p-4">
            <div className="flex flex-col md:flex-row h-full">
                <div className="flex-1 w-full mb-12 md:pr-8">
                    <h1 className="max-w-5xl font font-medium text-[46px] leading-[59.8px] mb-6 text-[#317ACC]">
                        SheCanCode Expectations
                    </h1>
                    <h2 className="font text-[24px] font-bold mb-4 leading-[31.2px] text-[#317ACC]">1. Purpose</h2>
                    <p className="mb-6 font text-[20px] md:text-[24px] leading-[31.2px] text-[#000000]/68">
                        The purpose of this document is to clearly outline the expectations for all learners participating in SheCanCode programs. Adherence to these expectations ensures a productive, respectful, and enriching learning environment for everyone involved.
                    </p>
                    <h2 className="font text-[24px] font-bold mb-4 leading-[31.2px] text-[#317ACC]">Core Values</h2>
                    <ol className="list-decimal list-inside ml-4 font text-[20px] md:text-[24px] leading-[31.2px] text-[#000000]/68">
                        <li>Integrity: Uphold honesty and ethical standards in all activities.</li>
                        <li>Respect: Treat everyone with dignity and respect, valuing diverse perspectives.</li>
                        <li>Commitment: Show dedication to learning and complete all tasks to the best of your ability.</li>
                    </ol>
                    <h2 className="font text-[24px] font-bold mt-4 mb-4 leading-[31.2px] text-[#317ACC]">Expectations</h2>
                    <h3 className="font text-[20px] font-bold  mt-4 mb-4 leading-[27px] text-[#317ACC]">1. Academic Integrity</h3>
                    <ul className="list-disc list-inside ml-4 font text-[20px] md:text-[24px] leading-[31.2px] text-[#000000]/68">
                        <li>Original Work: All submissions must be your own. Plagiarism, cheating, and using unauthorized resources are strictly prohibited.</li>
                        <li>Honesty: Provide truthful information in all your interactions and submissions.</li>
                        <li>Collaboration: While collaboration is encouraged, ensure that your contributions are genuine and that group work is fairly divided.</li>
                    </ul>
                    <h3 className="font text-[20px] font-bold mt-4 mb-4  leading-[27px] text-[#317ACC]">2. Participation</h3>
                    <ul className="list-disc list-inside ml-4 font text-[20px] md:text-[24px] leading-[31.2px] text-[#000000]/68">
                        <li>Engagement: Actively participate in all classes, discussions, and activities.</li>
                        <li>Attendance: Attend all scheduled sessions and notify the appropriate staff in advance if you must miss a session.</li>
                        <li>Punctuality: Be on time for all sessions and submit assignments by the deadlines.</li>
                    </ul>
                    <h3 className="font text-[20px] font-bold mt-4 mb-4 leading-[27px] text-[#317ACC]">3. Communication</h3>
                    <ul className="list-disc list-inside ml-4 font text-[20px] md:text-[24px] leading-[31.2px] text-[#000000]/68">
                        <li>Respectful Communication: Communicate respectfully with peers, instructors, and staff. Avoid offensive or discriminatory language.</li>
                        <li>Feedback: Provide constructive feedback to peers and be open to receiving feedback.</li>
                        <li>Responsiveness: Respond promptly to communications from instructors and staff.</li>
                    </ul>
                    <h3 className="font text-[20px] font-bold mt-4 mb-4  leading-[27px] text-[#317ACC]">4. Professionalism</h3>
                    <ul className="list-disc list-inside ml-4 font text-[20px] md:text-[24px] leading-[31.2px] text-[#000000]/68">
                        <li>Behavior: Maintain professional behavior in all interactions. This includes being respectful, courteous, and considerate.</li>
                        <li>Dress Code: Dress appropriately for all virtual and in-person sessions as per the guidelines provided.</li>
                        <li>Ethical Standards: Adhere to the highest ethical standards, avoiding any form of misconduct or unprofessional behavior.</li>
                    </ul>
                    <h3 className="font text-[20px] font-bold mt-4 mb-4 leading-[27px] text-[#317ACC]">5. Technology Usage</h3>
                    <ul className="list-disc list-inside ml-4 font text-[20px] md:text-[24px] leading-[31.2px] text-[#000000]/68">
                        <li>Proper Use: Use SheCanCode’s technology resources appropriately and responsibly.</li>
                        <li>Security: Protect your login credentials and do not share them with others.</li>
                        <li>Digital Etiquette: Follow proper online etiquette, including muting your microphone when not speaking and using video appropriately during virtual sessions.</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/3 md:ml-8 mt-8 md:mt-0">
                    <h2 className="max-w-5xl font font-medium text-[46px] leading-[59.8px] mb-6 text-[#317ACC]">Table of contents</h2>
                    <ul className="list-inside mb-6 font text-[24px] leading-[31.2px] text-[#000000]/68">
                        <li className={`ml-6 mb-2 ${pathname === "/privacy-policy" ? "text-[#317ACC]" : ""}`}>
                            <Link href="/privacy-policy">
                                1. Privacy policy
                            </Link>
                        </li>
                        <li className={`ml-6 mb-2 ${pathname === "/admission-policy" ? "text-[#317ACC]" : ""}`}>
                            <Link href="/admission-policy">
                                2. Admission Policy
                            </Link>
                        </li>
                        <li className={`ml-6 mb-2 ${pathname === "/students-expectations" ? "text-[#317ACC]" : ""}`}>
                            <Link href="/students-expectations">
                                3. SheCanCode Learners expectations
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LearnersExpectations;
