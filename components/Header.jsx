'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from "../public/SCC_Logo.png"
import { ButtonOne } from "./Buttons"
import { BiMenuAltRight } from "react-icons/bi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <div className='fixed z-50 w-full flex justify-between items-center px-10 py-5 bg-gray-500 bg-opacity-50 transition-opacity text-white'>
        <div>
          <Image src={logo} width={50} height={50} />
        </div>
        <div className='hidden md:flex'>
          <ul className='w-full flex justify-between gap-x-12'>
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
        <div className='md:hidden bg-gray-500/50 text-white'>
          <ul className='flex flex-col items-center gap-y-4 py-4'>
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
            <ButtonOne text="Enroll now" />
          </ul>
        </div>
      )}
    </>
  )
}

export default Header;
