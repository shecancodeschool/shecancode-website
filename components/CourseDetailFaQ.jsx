"use client";
import { useState } from 'react';

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 w-full">
      <button
        className="w-full flex p-4 focus:outline-none text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <span className="text-[16px] font-bold mr-4 text-[#317ACC]">{faq.id < 10 ? `0${faq.id}.` : `${faq.id}.`}</span>
          <span className="font-medium font leading-[38.2px] text-[#4B444D] text-[24px]">{faq.question}</span>
        </div>
        <span className="text-[32px] text-[#317ACC] ml-auto">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && faq.answer && (
        <div className="p-4 text-left ">
          <p className="text-[20px] leading-[32px] text-[#4B444D] font font-normal">{faq.answer}</p>
          
        </div>
      )}
    </div>
  );
};

const CourseDetailFaQ = ({ faqs }) => {
  return (
    <div className="w-full mt-10 relative text-left px-4">
      <h2 className=" text-[40px] max-w-xl font font-semibold text-left text-[#317ACC] mb-6">Still having a doubt? Let’s be more clearer!</h2>
      {faqs.map((faq) => (
        <FAQItem key={faq.id} faq={faq} />
      ))}
    </div>
  );
};

export default CourseDetailFaQ;
