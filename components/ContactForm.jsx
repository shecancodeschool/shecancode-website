import React from 'react';

const ContactForm = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-screen-xl">
      <h2 className="text-center font-semibold text-4xl text-[#317ACC] leading-16 mb-16">Contact</h2>
      <div className="border border-gray-300 rounded-lg p-6 shadow-lg mx-auto w-full lg:w-[1289px] bg-[#FFFFFF]">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-[200px] gap-6">
          <div className="space-y-4 lg:ml-16">
            <h3 className="text-[#000000] text-opacity-50 text-[24px] leading-8 mt-10">Leave us a message</h3>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="block w-full lg:w-[572.59px] h-[60.97px] border border-[#B4BEC8] rounded-md shadow-sm py-2 px-3 font focus:outline-none text-[16px] text-[#0F001A] mt-8"
                  placeholder="First Name Last Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full lg:w-[572.59px] h-[60.97px] border border-[#B4BEC8] font rounded-md shadow-sm py-2 px-3 focus:outline-none text-[16px] text-[#878787]"
                  placeholder="Email Address"
                />
              </div>
              <div>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className=" mt-1 block w-full lg:w-[572.59px] border border-[#B4BEC8] rounded-md shadow-sm py-2 px-3 text-[16px] text-[#878787] focus:outline-none font"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full lg:w-[572.59px] h-[60.97px] inline-flex justify-center py-2 px-4 border  shadow-sm font-[700] rounded-md text-[#FFFFFF] bg-[#317ACC] mt-6 focus:outline-none font text-[18px]"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="space-y-4">
            <div className="text-[#000000] text-opacity-50 font text-[24px] mt-24 mb-20">
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
            <div className="w-full md:w-full h-96 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.553554881119!2d30.072044274050132!3d-1.9306041366678404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca70041075f0d%3A0x8dd8bd686d407d92!2sSheCanCode%20Training%20Center!5e0!3m2!1sfr!2srw!4v1717664442768!5m2!1sfr!2srw"
                width="473"
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
