"use client";
import { useState } from 'react';
import Image from 'next/image';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import LoginImg from "../public/LoginImg.png";

function ResetPassword() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({ newPassword: '', confirmPassword: '' });
    const [successMessage, setSuccessMessage] = useState('');
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        setErrors({ newPassword: '', confirmPassword: '' });
        setSuccessMessage('');

        const newErrors = {};

        if (!newPassword) {
            newErrors.newPassword = 'New password is required';
        } else if (newPassword.length < 8) {
            newErrors.newPassword = 'Password must be at least 8 characters';
        }

        if (!confirmPassword) {
            newErrors.confirmPassword = 'Confirm password is required';
        } else if (confirmPassword !== newPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setSuccessMessage('Your password has been successfully updated.');

        setNewPassword('');
        setConfirmPassword('');
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            <div className="flex flex-col lg:flex-row w-[100%]">
                <div className="relative flex-1 w-full lg:w-1/2">
                    <div className="absolute inset-0">
                        <Image
                            className="object-cover w-full h-full"
                            src={LoginImg}
                            alt="Login Image"
                            layout="fill"
                            priority
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center w-full lg:w-1/2 p-8 lg:p-20">
                    <div className="max-w-lg mx-auto w-full bg-white rounded-lg shadow-md p-8">
                        <div className="flex flex-col">
                            <h2 className="mt-5 text-[35px] text-[#317ACC]">New Password</h2>
                        </div>
                        <div className="mt-8">
                            {successMessage && (
                                <div className="bg-green-100 text-green-900 rounded-md p-4 mb-4">
                                    {successMessage}
                                </div>
                            )}
                            <div className="mt-6">
                                <p className="text-[16px] text-[#828282]">
                                    Set the new password for your account so you can login and access all features.
                                </p>
                                <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                                    <div className="relative">
                                        <label htmlFor="newPassword" className="block text-sm text-[#153060]">Enter new password</label>
                                        <div className="mt-1 relative">
                                            <input
                                                id="newPassword"
                                                name="newPassword"
                                                type={showNewPassword ? "text" : "password"}
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                                placeholder="8 symbols at least"
                                                className="block w-full px-3 py-2 bg-[#EAEAEA] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                                {showNewPassword ? (
                                                    <AiOutlineEyeInvisible 
                                                        className="text-gray-500 cursor-pointer"
                                                        onClick={() => setShowNewPassword(false)}
                                                    />
                                                ) : (
                                                    <AiOutlineEye 
                                                        className="text-gray-500 cursor-pointer"
                                                        onClick={() => setShowNewPassword(true)}
                                                    />
                                                )}
                                            </div>
                                            {errors.newPassword && <p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>}
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <label htmlFor="confirmPassword" className="block text-sm text-[#153060]">Confirm password</label>
                                        <div className="mt-1 relative">
                                            <input
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                type={showConfirmPassword ? "text" : "password"}
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                placeholder="8 symbols at least"
                                                className="block w-full px-3 py-2 bg-[#EAEAEA] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                                {showConfirmPassword ? (
                                                    <AiOutlineEyeInvisible 
                                                        className="text-gray-500 cursor-pointer"
                                                        onClick={() => setShowConfirmPassword(false)}
                                                    />
                                                ) : (
                                                    <AiOutlineEye 
                                                        className="text-gray-500 cursor-pointer"
                                                        onClick={() => setShowConfirmPassword(true)}
                                                    />
                                                )}
                                            </div>
                                            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="relative text-[16px] flex justify-center w-full px-4 py-2 text-white bg-[#317ACC] rounded-md mb-4" // Added mb-4 here
                                        >
                                            UPDATE PASSWORD
                                        </button>
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

export default ResetPassword;
