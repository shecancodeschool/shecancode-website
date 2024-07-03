"use client";
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email';
      valid = false;
    } 

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide your message';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formData);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setSuccessMessage('Thank you for reaching out to us! We will get back to you shortly.');
      setTimeout(() => setSuccessMessage(''), 3000);
    } else {
      console.log('Form has validation errors');
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-screen-xl bg-[#FAFAFA]">
      <div className="border-[#B4BEC8] rounded-lg p-6 shadow-lg mx-auto w-full lg:w-[1255px] bg-[#FFFFFF]">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-[200px]">
          <div className="space-y-4 lg:ml-16">
            <h3 className="text-[#000000] text-opacity-50 text-[24px] leading-8 mt-10">Leave us a message</h3>
            {successMessage && (
              <div className=" text-green-500 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">{successMessage}</strong>
              </div>
            )}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`block w-full lg:w-[572.59px] h-[60.97px] border border-[#B4BEC8] rounded-md shadow-sm py-2 px-3 focus:outline-none text-[16px] text-[#0F001A] mt-8 ${errors.name && 'border-red-500'}`}
                  placeholder="First Name Last Name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`block w-full lg:w-[572.59px] h-[60.97px] border border-[#B4BEC8] rounded-md shadow-sm py-2 px-3 focus:outline-none text-[16px] text-[#878787] ${errors.email && 'border-red-500'}`}
                  placeholder="Email Address"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="6"
                  className={`mt-1 block w-full lg:w-[572.59px] border border-[#B4BEC8] rounded-md shadow-sm py-2 px-3 text-[16px] text-[#878787] focus:outline-none ${errors.message && 'border-red-500'}`}
                  placeholder="Your Message"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full lg:w-[572.59px] h-[60.97px] inline-flex justify-center py-2 px-4 border shadow-sm font-[700] rounded-md text-[#FFFFFF] bg-[#317ACC] mt-6 focus:outline-none text-[18px]"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="space-y-6">
            <div className="text-[#000000] text-opacity-50 font text-[24px] mt-24">
              <p>SheCanCode BootCamp</p>
              <p>KG 549 Street</p>
              <p>
                <a
                  href="https://www.google.com/maps?q=Impact+Center,+Kacyiru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#000000] text-opacity-50 underline"
                >
                  Impact Center, Kacyiru
                </a>
              </p>
              <p>+2507828293894</p>
              <p>education@igirerwanda.org</p>
            </div>
            <div className="w-full flex justify-center items-center md:w-full h-80 overflow-hidden pb-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.553554881119!2d30.072044274050132!3d-1.9306041366678404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca70041075f0d%3A0x8dd8bd686d407d92!2sSheCanCode%20Training%20Center!5e0!3m2!1sfr!2srw!4v1717664442768!5m2!1sfr!2srw"
                width="500"
                height="190"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
