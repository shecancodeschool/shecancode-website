"use client"
import Image from 'next/image'
import banner_img from "../../public/banner_img.png"
import Im from "../../public/3.png"
import { useState } from 'react';
import Accordion from './accordItem';

export default function FaqSection({ faqSectionData }) {
    const { title, faqs } = faqSectionData;
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen overflow-hidden"
            style={{ backgroundImage: 'url("/3.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-30 flex flex-col items-center justify-center text-white p-4 md:p-0 w-full">
                <div className="bg-[#317ACC] bg-opacity-90 rounded-xl shadow-lg max-w-5xl w-full px-6 md:px-16 py-8 md:py-12">
                    <h2 className="text-2xl md:text-[38px] font-bold mb-8 text-center">{title}</h2>
                    <Accordion items={faqs} />
                </div>
            </div>
        </div>

    );
}
