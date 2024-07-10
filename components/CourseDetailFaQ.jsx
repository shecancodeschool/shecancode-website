"use client";
import { useState } from 'react';

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 w-full">
      <button
        className="w-full flex p-4 justify-between focus:outline-none text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <span className="text-[16px] font-bold mr-4 text-[#317ACC]">{faq.id < 10 ? `0${faq.id}.` : `${faq.id}.`}</span>
          <span className="font-medium leading-[38.2px] text-[#4B444D] text-[20px] sm:text-[24px]">{faq.question}</span>
        </div>
        <div>
          <span className="text-[32px] text-[#317ACC] ml-auto">{isOpen ? '-' : '+'}</span>
        </div>
      </button>
      {isOpen && faq.answer && (
        <div className="p-4 text-left">
          <p className="text-[16px] sm:text-[20px] leading-[32px] text-[#4B444D] font-normal">{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

const CourseDetailFaQ = ({ faqs }) => {
  return (
    <div className="mt-10 text-left px-4">
      <h2 className="text-[32px] sm:text-[40px] max-w-xl font-semibold text-left text-[#317ACC] mb-6">Still having a doubt? Let’s be more clearer!</h2>
      {faqs.map((faq) => (
        <FAQItem key={faq.id} faq={faq} />
      ))}
    </div>
  );
};

export default CourseDetailFaQ;
