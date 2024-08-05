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
        <div className="relative flex items-center justify-center min-h-screen overflow-hidden"
            style={{ backgroundImage: 'url("/3.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-30 flex flex-col items-center justify-center text-white p-4 md:p-0 w-full">
                <div className="bg-[#317ACC] bg-opacity-90 rounded-xl shadow-lg max-w-5xl w-full px-6 md:px-16 py-8 md:py-12">
                    <h2 className="text-2xl md:text-[38px] font-bold mb-8 text-center">Do you have questions?</h2>
                    <Accordion items={faqs} />
                </div>
            </div>
        </div>

    );
}
