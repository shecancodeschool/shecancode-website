'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from "../public/SCC_Logo.png"
import { ButtonOne } from "./Buttons"
import { BiMenuAltRight } from "react-icons/bi";

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
      <div className={`fixed z-50 w-full flex justify-between items-center px-4 md:px-16 md:py-3 py-1 transition-colors duration-300 ${scrolled ? 'bg-[#111E37] bg-opacity-100' : 'bg-[#111E37] bg-opacity-50'} text-white`}>
        <div>
          <Image src={logo} width={80} height={60} />
        </div>
        <div className='hidden md:flex'>
          <ul className='w-full flex justify-between items-center  gap-x-12 mt-2 font'>
            <Link href="/home">
              <li>Home</li>
            </Link>
            <Link href="/courses">
              <li>Courses</li>
            </Link>
            <Link href="/community">
              <li>Community</li>
            </Link>
            <Link href="/careers">
              <li>Careers</li>
            </Link>
            <Link href="/news">
              <li>News</li>
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
              <li onClick={toggleMenu}>News</li>
            </Link>
            <ButtonOne text="Enroll now" onClick={toggleMenu} />
          </ul>
        </div>
      )}
    </>
  )
}

export default Header;
