"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const JobApplicationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        linkedIn: '',
        resume: null,
        coverLetter: null,
    });

    const [errors, setErrors] = useState({});
    const [submissionStatus, setSubmissionStatus] = useState('');

    const validate = () => {
        const errors = {};
        if (!formData.firstName) errors.firstName = 'First Name is required';
        if (!formData.lastName) errors.lastName = 'Last Name is required';
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email address is invalid';
        }
        if (!formData.phoneNumber) errors.phoneNumber = 'Phone Number is required';
        if (!formData.linkedIn) errors.linkedIn = 'LinkedIn Link is required';
        if (!formData.resume) errors.resume = 'Resume is required';
        if (!formData.coverLetter) errors.coverLetter = 'Cover Letter is required';
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            setSubmissionStatus('We have received your application. Expect to hear from us soon regarding the next steps.');
            setErrors({});
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                linkedIn: '',
                resume: null,
                coverLetter: null,
            });
        } else {
            setSubmissionStatus('');
            setErrors(validationErrors);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: files[0] }));
    };

    return (
        <div className="max-w-[1440px] w-full flex flex-col mx-auto lg:flex-row lg:gap-7 p-4 lg:space-x-4">
            {/* Job Application Form */}
            <div className=" mx-auto  lg:w-[602px] p-6">
                <h2 className="text-[35px] text-[#317ACC] font-semibold mb-2">Job Application</h2>
                <p className="text-[20px] mb-4 text-[#000000]/50">Tell us more about you so we can get back to you with more info.</p>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block mb-1 text-[20px] text-[#32536A]">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-md"
                        />
                        {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
                    </div>
                    <div>
                        <label className="block mb-1 text-[20px] text-[#32536A]">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-md"
                        />
                        {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
                    </div>
                    <div>
                        <label className="block mb-1 text-[20px] text-[#32536A]">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-md"
                        />
                        {errors.email && <p className="text-red-500">{errors.email}</p>}
                    </div>
                    <div>
                        <label className="block mb-1 text-[20px] text-[#32536A]">Phone Number</label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-md"
                        />
                        {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
                    </div>
                    <div>
                        <label className="block mb-1 text-[20px] text-[#32536A]">LinkedIn Link</label>
                        <input
                            type="url"
                            name="linkedIn"
                            value={formData.linkedIn}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-md"
                        />
                        {errors.linkedIn && <p className="text-red-500">{errors.linkedIn}</p>}
                    </div>
                    <div className="space-y-2">
                        <label className="block mb-1 text-[20px] text-[#32536A]">Upload your resume (PDF or Document)</label>
                        <div className="flex items-center justify-center w-full">
                            <label className="flex flex-col items-center justify-center w-full h-32 border border-gray-300 rounded-md cursor-pointer">
                                <div className="flex flex-col items-center justify-center pt-7">
                                    <svg
                                        viewBox="0 0 1024 1024"
                                        fill="currentColor"
                                        height="1em"
                                        width="1em"
                                    >
                                        <defs>
                                            <style />
                                        </defs>
                                        <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" />
                                        <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" />
                                    </svg>
                                    <p className="text-[18px] tracking-wider font text-[#0B2B4E]">Select a File</p>
                                </div>
                                <input
                                    type="file"
                                    name="resume"
                                    onChange={handleFileChange}
                                    className="opacity-0"
                                />
                            </label>
                            {errors.resume && <p className="text-red-500">{errors.resume}</p>}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="block mb-1 text-[20px] text-[#32536A]">Upload your cover letter (PDF or Document)</label>
                        <div className="flex items-center justify-center w-full">
                            <label className="flex flex-col items-center justify-center w-full h-32 border border-gray-300 rounded-md cursor-pointer">
                                <div className="flex flex-col items-center justify-center pt-7">
                                    <svg
                                        viewBox="0 0 1024 1024"
                                        fill="currentColor"
                                        height="1em"
                                        width="1em"
                                    >
                                        <defs>
                                            <style />
                                        </defs>
                                        <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" />
                                        <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" />
                                    </svg>
                                    <p className="text-[18px] tracking-wider font text-[#0B2B4E]">Select a File</p>
                                </div>
                                <input
                                    type="file"
                                    name="coverLetter"
                                    onChange={handleFileChange}
                                    className="opacity-0"
                                />
                            </label>
                            {errors.coverLetter && <p className="text-red-500">{errors.coverLetter}</p>}
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full lg:w-[236px] h-[54px] inline-flex justify-center py-2 px-4 border shadow-sm rounded-md text-[#FFFFFF] bg-[#317ACC] font-normal focus:outline-none text-[18px]"
                    >
                        Apply Now
                    </button>
                </form>
                {submissionStatus && <p className="text-green-500 mt-4">{submissionStatus}</p>}
            </div>
            {/* Open Positions */}
            <div className="w-full lg:w-[572.73px] p-6">
                <h2 className="text-[35px] text-[#317ACC] font-semibold mb-2">Open position</h2>
                <p className="mb-4 text-[20px] text-[#000000]/50">
                    Get to know us and join our team. We’d love to have more talented people on board. Check out our open positions!
                </p>
                <div className="space-y-4">
                    <div className="text-[#32536A] text-[20px]">
                        <Link href="/graphic-designer">
                            <li className="flex items-center justify-between">
                                <span>Graphic designer</span>
                                <svg
                                    fill="#317ACC"
                                    viewBox="0 0 16 16"
                                    height="1.5em"
                                    width="1em"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z"
                                        stroke="#317ACC"
                                        strokeWidth="1.5"
                                    />
                                </svg>
                            </li>
                        </Link>
                    </div>
                    <div className="text-[#32536A] text-[20px]">
                        <Link href="/front-end-engineer">
                            <li className="flex items-center justify-between">
                                <span>Front-end engineer</span>
                                <svg
                                    fill="#317ACC"
                                    viewBox="0 0 16 16"
                                    height="1.5em"
                                    width="1em"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z"
                                        stroke="#317ACC"
                                        strokeWidth="1.5"
                                    />
                                </svg>
                            </li>
                        </Link>
                    </div>
                    <div className="text-[#32536A] text-[20px]">
                        <Link href="/back-end-engineer">
                            <li className="flex items-center justify-between">
                                <span>Back-end engineer</span>
                                <svg
                                    fill="#317ACC"
                                    viewBox="0 0 16 16"
                                    height="1.5em"
                                    width="1em"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z"
                                        stroke="#317ACC"
                                        strokeWidth="1.5"
                                    />
                                </svg>
                            </li>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobApplicationForm;
