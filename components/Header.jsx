'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from "../public/SCC_Logo.png"
import { ButtonOne } from "./Buttons"
import { BiMenuAltRight } from "react-icons/bi";
import LogoImage from "../public/logo/logo1.png"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`fixed z-50 w-full px-4 md:px-[50px] md:py-3 py-3 transition-colors duration-300 ${scrolled ? 'bg-[#111E37] bg-opacity-100' : 'bg-[#111E37] bg-opacity-0'} text-white`}>
        <div className='max-w-[86rem] mx-auto flex justify-between items-center'>
          <div>
            <Link href={'/'} >
              <Image src={LogoImage} width={82.21} height={60} />
            </Link>
          </div>
          <div className='hidden md:flex'>
            <ul className='w-full flex justify-between items-center  gap-[30px]  font'>
              <Link href="/">
                <li className='text-[17px] font-semibold'>Home</li>
              </Link>
              <Link href="/courses">
                <li className='text-[17px] font-semibold'>About us</li>
              </Link>
              <Link href="/community">
                <li className='text-[17px] font-semibold'>What we do</li>
              </Link>
              <Link href="/careers">
                <li className='text-[17px] font-semibold'>Careers</li>
              </Link>
              <Link href="/news">
                <li className='text-[17px] font-semibold'>News and Events</li>
              </Link>
              <Link href="/news">
                <li className='text-[17px] font-semibold'>Our teams</li>
              </Link>
              <Link href="/news">
                <li className='text-[17px] font-semibold'>Contact us</li>
              </Link>
            </ul>
          </div>
          <div className='hidden md:block'>
            <ButtonOne text="Enroll now" />
          </div>
          <div className='md:hidden'>
            <BiMenuAltRight size={30} onClick={toggleMenu} />
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className='md:hidden fixed top-0 left-0 w-full h-full bg-[#011225] text-white z-40'>
          <ul className='flex flex-col items-start gap-y-4 ml-10 py-4 mt-20'>
            <Link href="/home">
              <li onClick={toggleMenu}>Home</li>
            </Link>
            <Link href="/courses">
              <li onClick={toggleMenu}>Courses</li>
            </Link>
            <Link href="/community">
              <li onClick={toggleMenu}>Community</li>
            </Link>
            <Link href="/careers">
              <li onClick={toggleMenu}>Careers</li>
            </Link>
            <Link href="/news">
              <li onClick={toggleMenu}>News and Events</li>
            </Link>
            <Link href="/news">
              <li onClick={toggleMenu}>Our teams</li>
            </Link>
            <Link href="/news">
              <li onClick={toggleMenu}>Contact us</li>
            </Link>
            <ButtonOne text="Enroll now" onClick={toggleMenu} />
          </ul>
        </div>
      )}
    </>
  )
}

export default Header;
