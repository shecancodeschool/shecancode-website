import React from 'react';
import Image from 'next/image';
import LogoImage from "../public/logo/logo1.png";
import Link from "next/link"
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-sky-950 text-white w-full px-5 md:px-4 py-12 md:py-24 font ">
      <div className='max-w-screen-xl mx-auto'>
        <div className="flex flex-col md:flex-row md:gap-8 justify-between items-start mb-8">

          {/* SheCanCODE Slogans and Logo  */}
          <div className="flex flex-col items-start gap-5 justify-center">
            <Image src={LogoImage} width={130} height={30} alt='Shecancode_shool_logo ' />
            <div className="flex flex-col items-start">
              <p className="text-[#CFD3D7] font">Train</p>
              <p className="text-[#CFD3D7] font">Employ</p>
              <p className="text-[#CFD3D7] font">Community</p>
            </div>
          </div>

          {/* Social accounts  */}
          <div className="flex flex-col mb-1 md:mb-0">
            <p className="text-sky-500 font-semibold my-4">Follow us</p>
            <div className="flex flex-col gap-2">
              <a href="https://www.linkedin.com/company/shecancodeschool" className="flex items-center space-x-2 hover:text-sky-500">
                <FaLinkedinIn className='text-sky-600' />
                <span className='font text-[#CFD3D7]'>LinkedIn</span>
              </a>
              <a href="#" className="flex items-center space-x-2 hover:text-sky-500">
                <AiFillInstagram className='text-sky-600' />
                <span className='font text-[#CFD3D7]'>Instagram</span>
              </a>
              <a href="#" className="flex items-center space-x-2 hover:text-sky-500">
                <AiFillFacebook className='text-sky-600' />
                <span className='font text-[#CFD3D7]'>Facebook</span>
              </a>
            </div>
          </div>

          {/* Address  */}
          <div className="flex flex-col mb-8 md:mb-0">
            <p className="text-sky-500 font-semibold my-4">Get in Touch</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center space-x-2 hover:text-sky-800">
                <FaLocationDot className='text-sky-600' />
                <p className='font text-[#CFD3D7]'>KG 549 St, Kacyiru, Gsabo</p>
              </div>
              <div className="flex items-center space-x-2 hover:text-sky-800">
                <MdOutlineEmail className='text-sky-600' />
                <p className='font text-[#CFD3D7]'>education@igirerwanda.org</p>
              </div>
              <div className="flex items-center space-x-2 hover:text-sky-800">
                <FaPhoneAlt className='text-sky-600' />
                <p className='font text-[#CFD3D7]'>0787819193</p>
              </div>
            </div>
          </div>

          {/* Google Maps Iframe  */}
          <div className="w-full md:w-fit h-48 overflow-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.553554881119!2d30.072044274050132!3d-1.9306041366678404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca70041075f0d%3A0x8dd8bd686d407d92!2sSheCanCode%20Training%20Center!5e0!3m2!1sfr!2srw!4v1717664442768!5m2!1sfr!2srw" width="350" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

        </div>

        <hr className="border-white" />

        <div className="flex flex-col md:flex-row justify-between items-start mb-9 space-y-5 flex-wrap-reverse md:space-y-0 mt-4">
          <ul className="flex space-x-1 md:space-x-2 items-start text-start justify-start list-none">
            <li>
              <Link href="/careers" className="md:text-sm text-base text-[#CFD3D7] hover:text-white font cursor-pointer">
                Career
              </Link>
            </li>
            <span>|</span>
            <li>
              <Link href="/about-us" className="md:text-sm text-base text-[#CFD3D7] hover:text-white font cursor-pointer">
                About us
              </Link>
            </li>
            <span>|</span>
            <li>
              <Link href="/contact-us" className="md:text-sm text-base text-[#CFD3D7] hover:text-white font cursor-pointer">
                Contact us
              </Link>
            </li>
            <span>|</span>
            <li>
              <Link href="/privacy-policy" className="md:text-sm text-base text-[#CFD3D7] hover:text-white font cursor-pointer">
                Privacy Policy
              </Link>
            </li>
          </ul>
          <p className=" text-[#CFD3D7] md:text-sm text-start text-base">&copy; {new Date().getFullYear()} SheCanCode School. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;




