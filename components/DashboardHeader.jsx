'use client'
import React, { useState, useEffect } from 'react'
import avatar from "../public/Avatar.jpg";
import { CiSearch } from "react-icons/ci";
import { HiMiniChevronLeft } from "react-icons/hi2";
import Image from "next/image";

export const DashboardHeader = () => {
  const [scrolled, setScrolled] = useState(false);

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
      <div className={`fixed right-0 z-50 flex justify-center items-center w-[76.9%] h-[100px] ${scrolled ? 'bg-[#F8F8F8] bg-opacity-100' : 'bg-[#F8F8F8] bg-opacity-0'}`}>
        <div className="flex justify-between w-[95%]">
          <div className="flex justify-center items-center gap-3">
             <HiMiniChevronLeft className="rounded-full text-white text-4xl bg-[#317ACC] cursor-pointer hover:bg-[#1f4b81]"/>
             <h1 className="text-[23px] font-bold hidden lg:block">Dashboard</h1>
          </div>
          <div className="w-[60%] flex items-center border bg-white rounded-full">
            <CiSearch className="text-[26px] w-[10%]"/>
            <input type="text" placeholder="Search" className="h-[45px] w-[85%]"/>
          </div>
          <div>
            <div className="flex gap-3">
              <Image src={avatar} alt="profile" className="w-[54px] h-[54px]" />
              <div className="hidden md:block">
                <h2 className="text-[13px] text-[#317ACC] font-semibold">MBANDA INNOCENT</h2>
                <p className="text-[10px]">mbandainnocent@igire.org</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
