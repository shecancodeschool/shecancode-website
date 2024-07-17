"use client";
import React from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AdmissionPolicy = () => {
    const pathname = usePathname();

    return (
        <div className="max-w-[84rem] mx-auto mt-[67px] p-4">
            <div className="flex flex-col md:flex-row h-full">
                <div className="flex-1 w-full mb-12 md:pr-8">
                    <h1 className="max-w-5xl font font-medium text-[46px] leading-[59.8px] mb-6 text-[#317ACC]">
                        SheCanCode Admissions Policy
                    </h1>
                    <h2 className="font text-[24px] font-bold mb-4 leading-[31.2px] text-[#317ACC]">1. Purpose</h2>
                    <p className="mb-6 font text-[20px] md:text-[24px] leading-[31.2px] text-[#000000]/60 text-justify ">
                        The purpose of this policy is to outline the criteria and procedures for admitting students into SheCanCode programs. This ensures a fair, transparent, and consistent admissions process.
                    </p>
                    <h2 className="font text-[24px] font-bold mb-4 leading-[31.2px] text-[#317ACC]">2. Eligibility Criteria</h2>
                    <p className="mb-6 font text-[20px] md:text-[24px] leading-[31.2px] text-[#000000]/60 text-justify ">
                        Applicants must meet the following eligibility criteria to be considered for admission:
                    </p>
                    <ul className="list-decimal list-inside ml-4 font text-[20px] md:text-[24px] leading-[31.2px] text-[#000000]/60 text-justify ">
                        <li>Age: Applicants must be at least 18 years old.</li>
                        <li>Education: A minimum of a high school diploma or equivalent.</li>
                        <li>Technical Skills: Basic understanding of programming concepts is preferred but not mandatory.</li>
                        <li>Language Proficiency: Proficiency in English, as all courses are conducted in English.</li>
                    </ul>
                    <h2 className="font text-[24px] font-bold mt-4 mb-4 leading-[31.2px] text-[#317ACC]">3. Application Process</h2>
                    <p className="mb-6 font text-[20px] md:text-[24px] leading-[31.2px] text-[#000000]/60 text-justify  ">
                        The application process consists of the following steps:
                    </p>
                    <ul className="list-decimal list-inside ml-4 font text-[20px] md:text-[24px] leading-[31.2px] text-[#000000]/60 text-justify ">
                        <li>Application Form: Interested candidates must complete and submit the online application form available on the SheCanCode website.</li>
                        <li>Personal Statement: Applicants must submit a personal statement detailing their interest in coding and career goals.</li>
                        <li>Assessment: Depending on the program, applicants may need to complete an assessment test to evaluate their basic coding skills.</li>
                        <li>Interview: Shortlisted candidates will be invited for an interview to assess their motivation, commitment, and fit for the program.</li>
                    </ul>
                    <h2 className="font text-[24px] font-bold mt-4 mb-4 leading-[31.2px] text-[#317ACC]">4. Selection Criteria</h2>
                    <p className="mb-6 font text-[20px] md:text-[24px] leading-[31.2px] text-[#000000]/60 text-justify ">
                        The selection process will consider the following factors:
                    </p>
                    <ul className="list-decimal list-inside ml-4 font text-[20px] md:text-[24px] leading-[31.2px] text-[#000000]/60 text-justify ">
                        <li>Motivation and Commitment: Demonstrated through the personal statement and interview.</li>
                        <li>Aptitude for Coding: Evaluated through the assessment test (if applicable).</li>
                        <li>Diversity and Inclusion: SheCanCode aims to create a diverse learning environment and encourages applications from underrepresented groups in tech.</li>
                        <li>Potential for Growth: The applicant’s potential to benefit from and contribute to the SheCanCode community.</li>
                    </ul>
                    <h2 className="font text-[24px] font-bold mt-4 mb-4 leading-[33.6px] text-[#317ACC]">5. Notification of Admission</h2>
                    <ul className="list-decimal list-inside ml-4 font text-[20px] md:text-[24px] leading-[31.2px] text-[#000000]/60 text-justify ">
                        <li>Decision: Applicants will be notified of the admission decision via email within four weeks of completing the interview.</li>
                        <li>Acceptance: Admitted students must confirm their acceptance by submitting an enrollment deposit (if applicable) and completing the enrollment form within two weeks of receiving the admission offer.</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/3 md:ml-8 mt-8 md:mt-0">
                    <h2 className="max-w-5xl font font-medium text-[46px] leading-[59.8px] mb-6 text-[#317ACC]">Table of contents</h2>
                    <ul className="list-inside mb-6 font text-[24px] leading-[31.2px] text-[#000000]/60 text-justify ">
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

export default AdmissionPolicy;
