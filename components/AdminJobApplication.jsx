import React from 'react';
import Link from 'next/link';

const Jobs = () => {
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
                    <div className="bg-[#FFFFFF] shadow p-4 rounded-lg  w-[276.63px] md:w-1/3  mb-4 md:mb-0">
                        <p className="text-[#8F9BB3] text-[13px] leading-[16px] font">Total Applications</p>
                        <p className="text-[#317ACC] text-[25px]">12</p>
                    </div>
                    
                </div>

                <div className="bg-white shadow-md rounded-lg">
                    <div className="p-4 flex justify-between items-center border-b border-gray-200">
                        <p className="text-[17px] font leading-[31.2px] font-bold text-[#222B45] ">Job Application</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-[#8F9BB3] tex5t-[1px]  bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Name</th>
                                    <th scope="col" className="px-6 py-3">Position</th>
                                    <th scope="col" className="px-6 py-3">Create Date</th>
                                    <th scope="col" className="px-6 py-3">Job type</th>
                                     <th scope="col" className="px-6 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b">
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        <div className="font-semibold text-[#222B45] text-[13px] leading-[16px] font">Pacifique Ishimwe</div>
                                        <p className="text-[#8F9BB3] text-[12px] font">pacifique@gmail.com</p>
                                    </td>
                                    <td className="text-[13px]  font-semibold  text-[#222B45]">Front-end Trainer</td>



                                    <td className="px-6 py-4 text-[#222B45] text-[12px] font">24 Oct, 2015</td>
                                    <td className="px-6 py-4 text-[#222B45] text-[12px] font">Full-time</td>

                                    <td className="px-6 py-4 flex space-x-2">
                                        <a href="#" className="text-[#C5CEE0] hover:underline">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M17.414 2.586a2 2 0 00-2.828 0L3 14.172V17h2.828l11.586-11.586a2 2 0 000-2.828zM5 16H4v-1h1v1z" />
                                            </svg>
                                        </a>
                                        <a href="#" className="text-[#C5CEE0] hover:underline">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H3a1 1 0 100 2h1v10a2 2 0 002 2h8a2 2 0 002-2V6h1a1 1 0 100-2h-2V3a1 1 0 00-1-1H6zm2 4a1 1 0 012 0v8a1 1 0 01-2 0V6zm4 0a1 1 0 012 0v8a1 1 0 01-2 0V6z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b">
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        <div className="font-semibold text-[#222B45] text-[13px] leading-[16px] font">Hirwa</div>
                                        <p className="text-[#8F9BB3] text-[12px] font">hirwa@gmail.com</p>
                                    </td>
                                    <td className="text-[13px]  font-semibold  text-[#222B45]">Back-end Trainer</td>
                                    <td className=" px-6 py-4 text-[#222B45] text-[12px] font">24 Oct, 2015</td>
                                    <td className="px-6 py-4 text-[#222B45] text-[12px] font">Full-time</td>

                                    <td className="px-6 py-4 flex space-x-2">
                                        <a href="#" className="text-[#C5CEE0] hover:underline">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M17.414 2.586a2 2 0 00-2.828 0L3 14.172V17h2.828l11.586-11.586a2 2 0 000-2.828zM5 16H4v-1h1v1z" />
                                            </svg>
                                        </a>
                                        <a href="#" className="text-[#C5CEE0] hover:underline">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H3a1 1 0 100 2h1v10a2 2 0 002 2h8a2 2 0 002-2V6h1a1 1 0 100-2h-2V3a1 1 0 00-1-1H6zm2 4a1 1 0 012 0v8a1 1 0 01-2 0V6zm4 0a1 1 0 012 0v8a1 1 0 01-2 0V6z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b">
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        <div className="font-semibold text-[#222B45] text-[13px] leading-[16px] font">Ntiru</div>
                                        <p className="text-[#8F9BB3] text-[12px] font">Ntiru@gmail.com</p>
                                    </td>
                                    <td className="text-[13px]  font-semibold text-[#222B45]">Back-end Trainer</td>
                                    <td className="px-6 py-4 text-[#222B45] text-[12px] font">24 Oct, 2015</td>
                                    <td className="px-6 py-4 text-[#222B45] text-[12px] font">Full-time</td>

                                    <td className="px-6 py-4 flex space-x-2">
                                        <a href="#" className="text-[#C5CEE0] hover:underline">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M17.414 2.586a2 2 0 00-2.828 0L3 14.172V17h2.828l11.586-11.586a2 2 0 000-2.828zM5 16H4v-1h1v1z" />
                                            </svg>
                                        </a>
                                        <a href="#" className="text-[#C5CEE0] hover:underline">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H3a1 1 0 100 2h1v10a2 2 0 002 2h8a2 2 0 002-2V6h1a1 1 0 100-2h-2V3a1 1 0 00-1-1H6zm2 4a1 1 0 012 0v8a1 1 0 01-2 0V6zm4 0a1 1 0 012 0v8a1 1 0 01-2 0V6z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b">
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        <div className="font-semibold text-[#222B45] text-[13px] leading-[16px] font">Stella</div>
                                        <p className="text-[#8F9BB3] text-[12px] font">Stella@gmail.com</p>
                                    </td>
                                    <td className="text-[13px]  font-semibold  text-[#222B45]">Back-end Trainer</td>
                                    <td className="px-6 py-4 text-[#222B45] text-[12px] font">24 Oct, 2015</td>
                                    <td className="px-6 py-4 text-[#222B45] text-[12px] font">Full-time</td>

                                    <td className="px-6 py-4 flex space-x-2">
                                        <a href="#" className="text-[#C5CEE0] hover:underline">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M17.414 2.586a2 2 0 00-2.828 0L3 14.172V17h2.828l11.586-11.586a2 2 0 000-2.828zM5 16H4v-1h1v1z" />
                                            </svg>
                                        </a>
                                        <a href="#" className="text-[#C5CEE0] hover:underline">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H3a1 1 0 100 2h1v10a2 2 0 002 2h8a2 2 0 002-2V6h1a1 1 0 100-2h-2V3a1 1 0 00-1-1H6zm2 4a1 1 0 012 0v8a1 1 0 01-2 0V6zm4 0a1 1 0 012 0v8a1 1 0 01-2 0V6z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Jobs;
