"use client"

import Image from 'next/image';
import { useEffect, useState } from 'react';

const EducationWalkSection = () => {
    const [sectionData, setSectionData] = useState({
        sectionTitle: "",
        items: [],
        imageOne: "",
        imageTwo: "",
    });

    useEffect(() => {
        const data = [
            {
                icon: "/Book--Streamline-Bootstrap.svg",
                text: "Free Computer, Videos and kits"
            },
            {
                icon: "/Book--Streamline-Bootstrap.svg",
                text: "Learn at your own pace"
            },
            {
                icon: "/Book--Streamline-Bootstrap.svg",
                text: "Collaborate with different learners around the globe"
            },
            {
                icon: "/Book--Streamline-Bootstrap.svg",
                text: "Top instructors around the globe"
            }
        ];

        setSectionData({
            sectionTitle: "Benefit from Out Experience In Empowering Young Women",
            items: data,
            imageOne: "/education-1.jpg",
            imageTwo: "/education-2.png",
        })
    }, []);

    return (
        <div className="w-full mt-8 mx-4 md:mt-28 mb-7 md:mb-14">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
                {/* Image grid */}
                <div className=" h-[474px]  md:flex hidden gap-4 flex-col rounded bg-[#6AACE8]/10 items-center relative">
                    <div className="relative -right-28  -top-7  ">
                        <Image
                            src={sectionData.imageOne}
                            alt="Audience"
                            width={400}
                            height={246}
                            className="rounded-md relative z-10"
                        />
                    </div>
                    <div className="relative  -left-24 -top-7 lg:order-2 lg:ml-6 w-full lg:w-auto">
                        <Image
                            src={sectionData.imageTwo}
                            alt="Laptop and hands"
                            width={400}
                            height={246}
                            className="rounded-md relative z-10"
                        />
                    </div>
                </div>
                
                {/* Text section */}
                <div className="flex flex-col gap-4 md:gap-2 justify-center items-start">
                    <h2 className="text-3xl md:text-4xl w-full font-semibold text-[#317ACC] mb-5 md:mb-10">
                        {sectionData.sectionTitle}
                    </h2>
                    <ul className="flex flex-col gap-3">
                        {sectionData.items && sectionData.items.map((item, index) => (
                            <li key={index} className="flex items-center">
                                <div className="bg-[#DDFFFF] p-3 hover:bg-blue-100 transition duration-300 rounded-full mr-4">
                                    <Image
                                        src={item.icon}
                                        alt="Computer Icon"
                                        width={24}
                                        height={24}
                                    />
                                </div>
                                <span className="text-gray-700 w-full text-xl md:text-xl lg:text-2xl font-medium">
                                    {item.text}
                                </span>
                            </li>))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default EducationWalkSection;
