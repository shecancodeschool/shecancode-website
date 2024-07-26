"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import JobModal from './UpdateJob';

const Jobs = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);

    const jobs = [
        {
            name: 'Front-end Trainer',
            location: 'Kacyiru',
            date: '2024-03-02',
            type: 'Full-time',
            published: true,
            description: 'Develop and execute growth strategies to increase visibility and engagement',
            requirements: 'Job requirements here',
            responsibilities: 'Job responsibilities here',
            application_deadline: '2015-10-24',
            reporting_to: 'Reporting to',
        },
        {
            name: 'Mobile Developer',
            location: 'Kacyiru',
            date: '2024-03-02',
            type: 'Full-time',
            published: false,
            description: 'Job description here',
            requirements: 'Job requirements here',
            responsibilities: 'Job responsibilities here',
            application_deadline: '2024-10-24',
            reporting_to: 'Reporting to',
        },
        {
            name: 'QA Engineer',
            location: 'Kacyiru',
            date: '2024-03-02',
            type: 'Full-time',
            published: false,
            description: 'Job description here',
            requirements: 'Job requirements here',
            responsibilities: 'Job responsibilities here',
            application_deadline: '2024-10-24',
            reporting_to: 'Reporting to',
        },
        {
            name: 'Backend Developer',
            location: 'Kacyiru',
            date: '2024-03-02',
            type: 'Full-time',
            published: false,
            description: 'Job description here',
            requirements: 'Job requirements here',
            responsibilities: 'Job responsibilities here',
            application_deadline: '2024-10-24',
            reporting_to: 'Reporting to',
        },
    ];

    const handleEditClick = (job) => {
        setSelectedJob(job);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedJob(null);
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <div className="flex flex-col md:flex-row">
            <aside className="w-full md:w-64 h-screen bg-gray-100 p-6">
                {/* Sidebar content here */}
            </aside>
            <main className="flex-1 p-4 md:p-6 lg:p-8">
                <div className="mb-6">
                    <h1 className="text-[24px] font leading-[31.2px] font-bold text-[#317ACC] mb-4">List job</h1>
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
                            <li className="bg-[#317ACC] text-[17px] font text-[#FFFFFF] px-4 py-2 rounded-lg list-none">Add new job</li>
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
                        <p className="text-[#8F9BB3] text-[13px] leading-[16px] font">Expired Job</p>
                        <p className="text-[#317ACC] text-[25px]">12</p>
                    </div>
                    <div className="bg-[#FFFFFF] shadow p-4 rounded-lg w-[276.63px] md:w-1/3">
                        <p className="text-[#8F9BB3] text-[13px] leading-[16px] fon">Published</p>
                        <p className="text-[#317ACC] text-[25px]">3</p>
                    </div>
                </div>

                <div className="bg-white shadow-md rounded-lg">
                    <div className="p-4 flex justify-between items-center border-b border-gray-200">
                        <p className="text-[17px] font leading-[31.2px] font-bold text-[#222B45]">Job list</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-[#8F9BB3] text-[13px] bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Name</th>
                                    <th scope="col" className="px-6 py-3"></th>
                                    <th scope="col" className="px-6 py-3">Create Date</th>
                                    <th scope="col" className="px-6 py-3">Job type</th>
                                    <th scope="col" className="px-6 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {jobs.map((job, index) => (
                                    <tr className="bg-white border-b" key={index}>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            <div className="font-semibold text-[#222B45] text-[13px] leading-[16px] font">{job.name}</div>
                                            <p className="text-[#8F9BB3] text-[12px] font">{job.location} {formatDate(job.date)}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className={job.published ? 'bg-[#DFC186] text-[14px] font-medium rounded-lg text-center text-[#FFFFFF]  leading-[20px] w-[125px] h-[35px] flex items-center justify-center' : 'bg-[#6B778D] text-[14px] font-medium rounded-lg text-center text-[#FFFFFF] leading-[20px] w-[125px] h-[35px] flex items-center justify-center'}>
                                                {job.published ? 'Published' : 'Not yet published'}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-[#222B45] text-[12px] font">{formatDate(job.date)}</td>
                                        <td className="px-6 py-4 text-[#222B45] text-[12px] font">{job.type}</td>
                                        <td className="px-6 py-4 flex  items-center space-x-4">
                                            <button
                                                onClick={() => handleEditClick(job)}
                                                className=" hover:underline text-[14px] font-bold"
                                            >
                                                <svg
                                                    viewBox="0 0 1024 1024"
                                                    fill="currentColor"
                                                    height="20"
                                                    width="20"
                                                >
                                                    <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" />
                                                </svg>
                                            </button>
                                            <button className=" hover:underline text-[14px] font-bold">
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    height="20"
                                                    width="20"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M17 6h5v2h-2v13a1 1 0 01-1 1H5a1 1 0 01-1-1V8H2V6h5V3a1 1 0 011-1h8a1 1 0 011 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z" />
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

            {showModal && <JobModal show={showModal} job={selectedJob} onClose={handleCloseModal} />}
        </div>
    );
};

export default Jobs;
