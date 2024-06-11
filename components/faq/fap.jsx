"use client"
import Image from 'next/image'
import banner_img from "../../public/banner_img.png"
import Im from "../../public/3.png"
import { useState } from 'react';
import Accordion from './accordItem';

const faqs = [
    {
        question: "What is your return policy?",
        answer: "We offer a 15-day return window for a full refund or exchange on unused items. Returns must include original packaging and proof of purchase for processing."
    },
    {
        question: "Do you offer international shipping?",
        answer: "Yes, we offer international shipping to many countries. Shipping costs and delivery times vary by destination."
    },
    {
        question: "What if I receive a damaged or defective product?",
        answer: "If you receive a damaged or defective product, please contact our customer support immediately for assistance."
    },
    {
        question: "Are the product colors on the website accurate?",
        answer: "While we strive to display product colors accurately, there may be slight variations due to monitor settings and lighting conditions."
    },
    {
        question: "How do I contact customer support?",
        answer: "You can contact our customer support via email at support@example.com or by calling 1-800-123-4567."
    }
];

export default function Faq() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="relative h-screen isolate flex flex-col justify-end overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-opacity-70 bg-[#011225]"></div>
            <Image src={Im} alt="SheCanCODE_grad" className="inset-0 h-full w-full object-cover" />
            <div className='absolute md:inset-0 flex flex-col md:mt-4 mt-6 justify-center items-center place-content-center gap-14 text-white p-4 md:p-0'>
                <div className="bg-[#267BD9] mt-10 md:mt-0 rounded-lg shadow-lg my-12 w-full max-w-5xl px-10 md:px-20 py-6 md:py-12">
                    <h2 className="text-xl md:text-[38px] font font-bold mb-12">Do you have questions?</h2>
                    <Accordion items={faqs} />
                </div>
            </div>
        </div>

    );
}
