"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import JobApplicantModal from './JobApplicant';

const Jobs = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedApplicant, setSelectedApplicant] = useState(null);

    const applicants = [
        {
            name: 'Pacifique Ishimwe',
            role: 'Front-end Trainer',
            phone: '123-456-7890',
            email: 'pacifique@gmail.com',
            date: '2015-10-24',
            status: 'Applied',
            resume: 'resume-link',
            coverLetter: 'cover-letter-link',
            nextDate: '2024-07-30',
        },
        {
            name: 'John Doe',
            role: 'Backend Developer',
            phone: '987-654-3210',
            email: 'johndoe@example.com',
            date: '2016-11-20',
            status: 'Interviewed',
            resume: 'resume-link-john',
            coverLetter: 'cover-letter-link-john',
            nextDate: '2024-08-01',
        },
        {
            name: 'Jane Smith',
            role: 'Full Stack Developer',
            phone: '555-555-5555',
            email: 'janesmith@example.com',
            date: '2017-12-15',
            status: 'Hired',
            resume: 'resume-link-jane',
            coverLetter: 'cover-letter-link-jane',
            nextDate: '2024-09-10',
        },
        // Add other applicants here
    ];

    const handleViewApplicant = (applicant) => {
        setSelectedApplicant(applicant);
        setIsModalOpen(true);
    };

    return (
        <div className="flex flex-col md:flex-row">
            <aside className="w-full md:w-64 h-screen bg-gray-100 p-6">
                {/* Sidebar content here */}
            </aside>
            <main className="flex-1 p-4 md:p-6 lg:p-8">
                <div className="mb-6">
                    <h1 className="text-[24px] font leading-[31.2px] font-bold text-[#317ACC] mb-4">Job Application</h1>
                    <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
                        <div className="relative flex-1">
                            <input
                                type="text"
                                placeholder="Search"
                                className="pl-12 pr-4 py-2 border border-gray-300 rounded-full w-full text-[#707070] text-[16px] font leading-[20.8px]"
                            />
                            <svg
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                height="24"
                                width="24"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M18.319 14.433A8.001 8.001 0 006.343 3.868a8 8 0 0010.564 11.976l.043.045 4.242 4.243a1 1 0 101.415-1.415l-4.243-4.242a1.116 1.116 0 00-.045-.042zm-2.076-9.15a6 6 0 11-8.485 8.485 6 6 0 018.485-8.485z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <Link href="/dashboard/new-job">
                            <li className="bg-[#317ACC] text-[17px] font  text-[#FFFFFF] px-4 py-2 rounded-lg list-none">Add new job</li>
                        </Link>
                        <button className="text-[#000000]/65 font text-[17px] flex items-center text-sm md:text-base">
                            Sort by
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <button className="text-[#000000]/65 font text-[17px] flex items-center text-sm md:text-base">
                            Saved search
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <button className="text-gray-600 text-sm md:text-base">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
                    <div className="bg-[#FFFFFF] shadow p-4 rounded-lg w-[276.63px] md:w-1/3 mb-4 md:mb-0">
                        <p className="text-[#8F9BB3] text-[13px] leading-[16px] font">Total Applications</p>
                        <p className="text-[#317ACC] text-[25px]">12</p>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-lg">
                    <div className="p-4 flex justify-between items-center border-b border-gray-200">
                        <p className="text-[17px] font leading-[31.2px] font-bold text-[#222B45]">Job Application</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-[#8F9BB3] text-[13px] bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Name</th>
                                    <th scope="col" className="px-6 py-3">Position</th>
                                    <th scope="col" className="px-6 py-3">Create Date</th>
                                    <th scope="col" className="px-6 py-3">Job type</th>
                                    <th scope="col" className="px-6 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {applicants.map((applicant, index) => (
                                    <tr key={index} className="bg-white border-b">
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            <div className="font-semibold text-[#222B45] text-[13px] leading-[16px]">{applicant.name}</div>
                                            <p className="text-[#8F9BB3] text-[11px] font leading-[13.75px]">{applicant.email}</p>
                                        </td>
                                        <td className="px-6 py-4">{applicant.role}</td>
                                        <td className="px-6 py-4">{applicant.date}</td>
                                        <td className="px-6 py-4">{applicant.status}</td>
                                        <td className="px-6 py-4 text-right">
                                            <button
                                                className="text-[#8F9BB3] hover:text-[#222B45] focus:outline-none"
                                                onClick={() => handleViewApplicant(applicant)}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 1024 1024"
                                                    className="h-5 w-5"
                                                    fill="currentColor"
                                                >
                                                    <path d="M512 426c-47.1 0-85 37.9-85 85s37.9 85 85 85 85-37.9 85-85-37.9-85-85-85z" />
                                                    <path d="M510 170C300.4 170 108.2 286.1 42.7 491.6a68.84 68.84 0 000 40.8C108.3 738 300.6 854 510 854c209.7 0 401.8-116 467.3-321.5a68.84 68.84 0 000-40.8C911.7 286 719.4 170 510 170zm0 634c-155.6 0-303.1-87.4-362.6-279.8a32.9 32.9 0 010-19.4C206.9 312.7 354.4 225 510 225c155.6 0 303.1 87.4 362.6 279.8a32.9 32.9 0 010 19.4C813.1 716.6 665.6 804 510 804z" />
                                                    <path d="M512 426c-47.1 0-85 37.9-85 85s37.9 85 85 85 85-37.9 85-85-37.9-85-85-85z" />
                                                    <path d="M512 346c-91.6 0-166 74.4-166 166s74.4 166 166 166 166-74.4 166-166-74.4-166-166-166zm0 264a98 98 0 110-196 98 98 0 010 196z" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
            {selectedApplicant && (
                <JobApplicantModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    applicant={selectedApplicant}
                />
            )}
        </div>
    );
};

export default Jobs;
