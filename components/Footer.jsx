import React from 'react';
import Image from 'next/image';
import logo from "../public/logo.png"
import Link from "next/link"
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-sky-950 text-white px-8 md:px-16 py-12 md:py-24 font ">
      <div className='max-w-screen-xl mx-auto'>
        <div className=" flex flex-col md:flex-row justify-between items-start mb-9 space-y-10 md:space-y-0">
          <div className="flex flex-col items-center justify-center space-y-2 mb-6 mt-6">
            <div>
              <Image src={logo} width={130} height={30} alt='Shecancode_shool_logo ' />
            </div>
            <div className="flex flex-col items-start space-y-2 font">
              <p className="text-[#CFD3D7] font">Train</p>
              <p className="text-[#CFD3D7] font">Employ</p>
              <p className="text-[#CFD3D7] font">Community</p>
            </div>
          </div>
          <div className="flex flex-col space-y-2 mt-6">
            <p className="text-sky-500 font-semibold mb-4 font">Follow us</p>
            <div className="flex flex-col space-y-4">
              <a href="#" className="flex items-center space-x-2 hover:text-green-500">
                <FaLinkedinIn />
                <span className='font text-[#CFD3D7]'>shecancode bootcamp</span>
              </a>
              <a href="#" className="flex items-center space-x-2 hover:text-green-500 mb-2">
                <svg
                  fill="#317ACC"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0016 3.542a6.658 6.658 0 01-1.889.518 3.301 3.301 0 001.447-1.817 6.533 6.533 0 01-2.087.793A3.286 3.286 0 007.875 6.03a9.325 9.325 0 01-6.767-3.429 3.289 3.289 0 001.018 4.382A3.323 3.323 0 01.64 6.575v.045a3.288 3.288 0 002.632 3.218 3.203 3.203 0 01-.865.115 3.23 3.23 0 01-.614-.057 3.283 3.283 0 003.067 2.277A6.588 6.588 0 01.78 13.58a6.32 6.32 0 01-.78-.045A9.344 9.344 0 005.026 15z" />
                </svg>
                <span className='font text-[#CFD3D7]'>shecancode bootcamp</span>
              </a>
              <a href="#" className="flex items-center space-x-2 hover:text-green-500 mb-2">
                <svg
                  viewBox="0 0 448 512"
                  fill="#317ACC"
                  height="1em"
                  width="1em"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
                <span className='font text-[#CFD3D7]'>shecancode bootcamp</span>
              </a>
              <a href="#" className="flex items-center space-x-2 hover:text-green-500 mb-2">
                <svg
                  viewBox="0 0 500 1000"
                  fill="#317ACC"
                  height="1em"
                  width="1em"

                >
                  <path d="M500 206H358c-9.333 0-17.667 5-25 15-7.333 10-11 22.333-11 37v102h178v148H322v442H152V508H0V360h152v-86c0-62.667 19.667-115.667 59-159s88.333-65 147-65h142v156" />
                </svg>
                <span className='font text-[#CFD3D7]'>shecancode bootcamp</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4 ">
            <p className="text-sky-500 font-semibold mb-5  font">Get in Touch</p>
            <div className="flex items-center space-x-2 hover:text-green-500 mb-2">
              <svg
                viewBox="0 0 384 512"
                fill="#317ACC"
                height="1em"
                width="1em"


              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192 384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2 12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z" />
              </svg>
              <p className='font text-[#CFD3D7] '>8809 Ohio St, South Gate,<br></br> CA 90280</p>
            </div>
            <div className="flex items-center space-x-2 hover:text-green-500 mb-2">
              <svg

                viewBox="0 0 1024 1024"
                fill="#317ACC"
                height="1em"
                width="1em"

              >
                <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z" />
              </svg>
              <p className='font text-[#CFD3D7]'>contact@igirerwanda.org</p>
            </div>
            <div className="flex items-center space-x-2 hover:text-green-500 mb-2">
              <svg
                viewBox="0 0 512 512"
                fill="#317ACC"
                height="1em"
                width="1em"
              >
                <path d="M478.94 370.14c-5.22-5.56-23.65-22-57.53-43.75-34.13-21.94-59.3-35.62-66.52-38.81a3.83 3.83 0 00-3.92.49c-11.63 9.07-31.21 25.73-32.26 26.63-6.78 5.81-6.78 5.81-12.33 4-9.76-3.2-40.08-19.3-66.5-45.78s-43.35-57.55-46.55-67.3c-1.83-5.56-1.83-5.56 4-12.34.9-1.05 17.57-20.63 26.64-32.25a3.83 3.83 0 00.49-3.92c-3.19-7.23-16.87-32.39-38.81-66.52-21.78-33.87-38.2-52.3-43.76-57.52a3.9 3.9 0 00-3.89-.87 322.35 322.35 0 00-56 25.45A338 338 0 0033.35 92a3.83 3.83 0 00-1.26 3.74c2.09 9.74 12.08 50.4 43.08 106.72 31.63 57.48 53.55 86.93 100 133.22S252 405.21 309.54 436.84c56.32 31 97 41 106.72 43.07a3.86 3.86 0 003.75-1.26A337.73 337.73 0 00454.35 430a322.7 322.7 0 0025.45-56 3.9 3.9 0 00-.86-3.86z" />
              </svg>
              <p className='font text-[#CFD3D7]'>0787819193</p>
            </div>


          </div>
          <div className="w-full md:w-fit h-48 mb-6 mt-6 overflow-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.553554881119!2d30.072044274050132!3d-1.9306041366678404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca70041075f0d%3A0x8dd8bd686d407d92!2sSheCanCode%20Training%20Center!5e0!3m2!1sfr!2srw!4v1717664442768!5m2!1sfr!2srw" width="350" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>


        </div>
        <hr className="border-white" />
        <div className="flex flex-col md:flex-row justify-between items-start mb-9 space-y-10 md:space-y-0 mt-4">
          <p className=" text-[#CFD3D7] md:text-sm text-[12px] font">&copy; 2015 SheCanCode School. All rights reserved.</p>
          <div className="flex space-x-4">
            <ul className="flex space-x-4 list-none p-0 m-0">
              <li>
                <Link href="/careers" className="md:text-sm text-[12px] text-[#CFD3D7] hover:text-white font cursor-pointer">
                  Career
                </Link>
              </li>
              <span>|</span>
              <li>
                <Link href="/about-us" className="md:text-sm text-[12px] text-[#CFD3D7] hover:text-white font cursor-pointer">
                  About us
                </Link>
              </li>
              <span>|</span>
              <li>
                <Link href="/contact-us" className="md:text-sm text-[12px] text-[#CFD3D7] hover:text-white font cursor-pointer">
                  Contact us
                </Link>
              </li>
              <span>|</span>
              <li>
                <Link href="/privacy-policy" className="md:text-sm text-[12px] text-[#CFD3D7] hover:text-white font cursor-pointer">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;




