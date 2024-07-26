"use client";
import { useState } from 'react';
import Image from 'next/image';
import LoginImg from "../public/LoginImg.png";
import LogoImage from "../public/logo/logo1.png";
import Link from 'next/link';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({ email: '' });
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        setErrors({ email: '' });
        setSuccessMessage('');

        const newErrors = {};

        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email address is invalid';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setSuccessMessage('A verification code has been sent to your email.');

        setEmail('');
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            <div className="flex flex-col lg:flex-row w-full">
                <div className="relative flex-1 hidden lg:block lg:w-1/2">
                    <Image
                        className="absolute inset-0 object-cover w-full h-full"
                        src={LoginImg}
                        alt="Login Image"
                        layout="fill"
                    />
                </div>
                <div className="flex flex-col justify-center w-full lg:w-1/2 p-8 lg:p-20">
                    <div className="max-w-lg mx-auto w-full bg-white rounded-lg shadow-md p-8">
                        <div className="flex flex-col">
                           
                            <h2 className="mt-5 text-[35px] text-[#317ACC]">Forgot password</h2>
                        </div>
                        <div className="mt-8">
                            {successMessage && (
                                <div className="bg-green-100 text-green-900 rounded-md p-4 mb-4">
                                    {successMessage}
                                </div>
                            )}
                            <div className="mt-6">
                                <p className="text-[16px] text-[#828282]">
                                    Enter your email for the verification process, we will send a 4-digit code to your email.
                                </p>
                                <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                                    <div>
                                        <label htmlFor="email" className="block text-sm text-[#153060]">Email</label>
                                        <div className="mt-1">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="hannah.green@test.com"
                                                className="block w-full px-3 py-2 bg-gray-200 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                        </div>
                                    </div>
                                    <div>
                                       <Link href="/dashboard/reset-password">
                                       <button
                                            type="submit"
                                            className="relative flex justify-center w-full px-4 py-2 text-white bg-[#317ACC] rounded-md"
                                        >
                                            CONTINUE
                                        </button>
                                       </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
