'use strict'; // Use strict mode

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoImage from "../public/logo/logo1.png";
import { BiMenuAltRight } from "react-icons/bi";
import ShiftingDropDown from "./ShiftingDropDown";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    { label: "Home", href: "/", hasDropdown: false },
    { label: "About us", href: "/about-us", hasDropdown: true, dropdownComponent: <ShiftingDropDown /> },
    { label: "Careers", href: "/careers", hasDropdown: false },
    { label: "News and blogs", href: "/articles", hasDropdown: true, dropdownComponent: <ShiftingDropDown /> },
    { label: "Courses", href: "/courses", hasDropdown: false },
    { label: "Test", href: "/best-practice", hasDropdown: false },
  ];

  return (
    <>
      <div className={`fixed z-50 w-full md:py-3 py-3 transition-colors duration-300 ${scrolled ? 'bg-[#111E37] bg-opacity-100' : 'bg-[#111E37] bg-opacity-0'} text-white`}>
        <div className='max-w-screen-xl px-4 md:px-0 mx-auto flex justify-between items-center'>
          <div>
            <Link href={'/'}>
              <Image src={LogoImage} width={82.21} height={60} />
            </Link>
          </div>
          <div className='hidden lg:flex'>
            <ul className='w-full flex justify-between items-center space-x-8 font'>
              {menuItems.map((item, index) => (
                <li key={index} className='relative group'>
                  <button
                    className='text-base font-semibold relative'
                    onClick={() => {!item.hasDropdown && window.location.replace(item.href)}}
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.label}
                    {item.hasDropdown && hoveredLink === item.label && (
                      <div className='absolute top-full left-0 w-full'>
                        {item.dropdownComponent}
                      </div>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className='hidden lg:block'>
            <Link href="/contact-us" className="bg-[#317ACC] py-2 px-4 w-full md:w-fit text-white rounded-md hover:bg-[#296494]">
              Contact us
            </Link>
          </div>
          <div className='lg:hidden'>
            <BiMenuAltRight size={30} onClick={toggleMenu} />
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className='md:hidden fixed top-0 left-0 w-full h-full bg-[#011225] text-white z-40'>
          <ul className='flex flex-col items-start gap-y-4 ml-10 py-4 mt-20'>
            {menuItems.map((item, index) => (
              <li key={index} onClick={toggleMenu}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li onClick={toggleMenu}>
              <Link href="/contact-us">Contact us</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;
