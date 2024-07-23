"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LoginImg from "../public/LoginImg.png";
import LogoImage from "../public/logo/logo1.png";

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '' });
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        setErrors({ email: '', password: '' });
        setSuccessMessage('');

        const newErrors = {};

        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email address is invalid';
        }

        if (!password) {
            newErrors.password = 'Password is required';
        } else if (password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setSuccessMessage('You have successfully logged in!');

        setEmail('');
        setPassword('');
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            <div className="flex flex-col justify-center w-full lg:flex-row">
                <div className="flex flex-col justify-center w-full lg:w-1/2 p-8 lg:p-20">
                    <div className="max-w-lg mx-auto w-full bg-white rounded-lg shadow-md p-8">
                        <div className="flex flex-col items-center justify-center text-center">
                            <Image src={LogoImage} width={82.21} height={60} alt="Logo" />
                            <h2 className="mt-5 font text-[35px] text-[#317ACC]">Welcome Back</h2>
                        </div>
                        <div className="mt-8">
                            {successMessage && (
                                <div className="bg-green-100 text-green-900 rounded-md p-4 mb-4">
                                    {successMessage}
                                </div>
                            )}
                            <div className="mt-6">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="email" className="block text-[14px] text-[#153060] font">Email</label>
                                        <div className="mt-1">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="hannah.green@test.com"
                                                className="block w-full px-3 py-2 bg-[#EAEAEA] border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="password" className="block text-[14px] text-[#153060] font">Password</label>
                                        <div className="mt-1">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="Password123@"
                                                className="block w-full px-3 py-2 bg-[#EAEAEA] border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="relative flex justify-center w-full px-4 py-2 text-[#FFFFFF] font text-[16px] bg-[#317ACC] rounded-md"
                                        >
                                            LOG IN
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex w-full justify-center">
                                            <Link href="forgot-password">
                                                <li className="text-[#317ACC] text-[14px] list-none font">Forgot your password?</li>
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative flex-1 hidden lg:block lg:w-1/2">
                    <Image
                        className="absolute inset-0 object-cover w-full h-full"
                        src={LoginImg}
                        alt="Login Image"
                        layout="fill"
                    />
                </div>
            </div>
        </div>
    );
}

export default SignIn;
