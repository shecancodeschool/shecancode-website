"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const JobApplicationForm = () => {

    const labelWithIcon = (text, tooltip) => (
        <div className="flex justify-between items-center group">
            <span className="block text-[20px] text-[#0B2B4E]">{text}</span>
            <div className="relative">
                <svg
                    fill="rgba(0, 0, 0, 0.1)"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    className="cursor-pointer"
                >
                    <path d="M16 8A8 8 0 110 8a8 8 0 0116 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 00.25.246h.811a.25.25 0 00.25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 00.241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                </svg>
                <div className="absolute hidden group-hover:block w-[200px] h-[40px] bg-gray-200 text-gray-800 text-xs rounded py-1 px-2 bottom-full left-1/2 transform -translate-x-1/2 mb-1">
                    {tooltip}
                </div>
            </div>
        </div>
    );

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
        const { name, value, type, files } = e.target;
        if (type === 'file') {
          setFormData({ ...formData, [name]: files[0] });
        } else {
          setFormData({ ...formData, [name]: value });
        }
    };

    return (
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:gap-7 p-4 lg:space-x-4">
            {/* Job Application Form */}
            <div className="w-full lg:w-1/2 p-6">
                <h2 className="text-3xl text-[#317ACC] font-semibold mb-2">Job Application</h2>
                <p className="text-lg mb-4 text-gray-500">Tell us more about you so we can get back to you with more info.</p>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block mb-1 text-[24px] text-[#32536A]">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full py-2 p-2 border border-gray-300 rounded-md"
                        />
                        {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
                    </div>
                    <div>
                        <label className="block mb-1 text-[24px] text-[#32536A]">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full py-2 p-2 border border-gray-300 rounded-md"
                        />
                        {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
                    </div>
                    <div>
                        <label className="block mb-1 text-[24px] text-[#32536A]">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full py-2 p-2 border border-gray-300 rounded-md"
                        />
                        {errors.email && <p className="text-red-500">{errors.email}</p>}
                    </div>
                    <div>
                        <label className="block mb-1 text-[24px] text-[#32536A]">Phone Number</label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            className="w-full py-2 p-2 border border-gray-300 rounded-md"
                        />
                        {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
                    </div>
                    <div>
                        <label className="block mb-1 text-[24px] text-[#32536A]">LinkedIn Link</label>
                        <input
                            type="url"
                            name="linkedIn"
                            value={formData.linkedIn}
                            onChange={handleInputChange}
                            className="w-full py-2 p-2 border border-gray-300 rounded-md"
                        />
                        {errors.linkedIn && <p className="text-red-500">{errors.linkedIn}</p>}
                    </div>
                    <div>
                        <label className="block mb-1 text-[24px]">{labelWithIcon("Upload your Resume [PDF or Document]", "Please upload your resume.")}</label>
                        <div className="">
                            {/* <label className="block mb-1 text-lg text-[#32536A]">Resume</label> */}
                            <div className="relative flex items-center">
                                <input
                                    type="file"
                                    name="resume"
                                    onChange={handleFileChange }
                                    className="absolute opacity-0 w-full h-full cursor-pointer "
                                />

                                <label
                                    htmlFor="file"
                                    className="w-full bg-white border  border-gray-300 rounded-md flex items-center cursor-pointer"
                                >
                                    <span className="flex-grow py-2 p-2 px-3 text-[#000000]/65 font text-[14px]">Select a file</span>
                                    {formData.resume && <span className="text-sm">{formData.resume.name}</span>}
                                    <div className="bg-gray-200 border-l border-gray-300 px-4 py-2">Browse</div>
                                </label>
                            </div>

                        </div>
                        {errors.resume && <p className="text-red-500">{errors.resume}</p>}
                    </div>
                    <div>
                        <label className="block mb-1 text-[24px]">{labelWithIcon("Upload your Cover Letter [PDF or Document]", "Please upload your cover letter.")}</label>
                        <div className="">
                            {/* <label className="block mb-1 text-lg text-[#32536A]">Cover letter</label> */}
                            <div className="relative flex items-center">
                                <input
                                      type="file"
                                      name="coverLetter"
                                      onChange={handleFileChange }
                                      className="absolute opacity-0 w-full h-full cursor-pointer "
                                />

                                <label
                                    htmlFor="file"
                                    className="w-full bg-white border border-gray-300 rounded-md flex items-center cursor-pointer"
                                >
                                    <span className="flex-grow py-2 px-3 text-[#000000]/65 font text-[14px]">Select a file</span>
                                    {formData.coverLetter && <span className="text-sm">{formData.coverLetter.name}</span>}
                                    <div className="bg-gray-200 border-l border-gray-300 px-4 py-2">Browse</div>
                                </label>
                            </div>
                        </div>
                        {errors.coverLetter && <p className="text-red-500">{errors.coverLetter}</p>}
                    </div>
                    <div className="relative">
                        <button
                            type="submit"
                            className="w-full lg:w-auto mt-4 py-2 px-4 border shadow-sm rounded-md text-white bg-[#317ACC] font-normal focus:outline-none text-lg"
                        >
                            Apply Now
                        </button>
                    </div>
                </form>
                {submissionStatus && <p className="text-green-500 mt-4">{submissionStatus}</p>}
            </div>
            {/* Open Positions */}
            <div className="w-full lg:w-1/2 p-6">
                <h2 className="text-3xl text-[#317ACC] font-semibold mb-2">Open Positions</h2>
                <p className="mb-4 text-lg text-gray-500">
                    Get to know us and join our team. We’d love to have more talented people on board. Check out our open positions!
                </p>
                <div className="space-y-4">
                    <div className="text-[#32536A] text-[24px]">
                        <Link href="/graphic-designer">
                            <li className="flex items-center justify-between cursor-pointer">
                                <span>Graphic Designer</span>
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
                    <div className="text-[#32536A] text-[24px]">
                        <Link href="/front-end-engineer">
                            <li className="flex items-center justify-between cursor-pointer">
                                <span>Front-end Engineer</span>
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
                    <div className="text-[#32536A] text-[24px]">
                        <Link href="/back-end-engineer">
                            <li className="flex items-center justify-between cursor-pointer">
                                <span>Back-end Engineer</span>
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
