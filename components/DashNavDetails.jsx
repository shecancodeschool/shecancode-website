"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import PropTypes from "prop-types";

export const Nav = ({
  sideIcn,
  page,
  href1 = "#",
  href2 = "#",
  href3 = "#",
  SubIcn1,
  SubIcn2,
  SubIcn3,
  Subtxt1,
  Subtxt2,
  Subtxt3,
}) => {
  return (
    <details className="group transition-all duration-150">
      <summary className="transition-all duration-500 flex cursor-pointer h-[50px] w-[17rem] items-center rounded-lg px-4 py-2 text-gray-500 hover:text-gray-100 hover:bg-[#317ACC]">
        <Image src={sideIcn} alt="photo" />
        <span className="ml-3 text-base font-k2d">{page}</span>
        <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
          <FaChevronRight />
          {/* <FaChevronDown /> */}
        </span>
      </summary>

      <nav className="my-1.5 ml-0 h-full flex flex-col transition-all duration-500">
        <Link
          href={href1}
          className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <span>{SubIcn1}</span>
          <span className="ml-3 text-base font-k2d">{Subtxt1}</span>
        </Link>

        <Link
          href={href2}
          className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <span>{SubIcn2}</span>
          <span className="ml-3 text-base font-k2d">{Subtxt2}</span>
        </Link>

        <Link
          href={href3}
          className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <span>{SubIcn3}</span>
          <span className="ml-3 text-base font-k2d">{Subtxt3}</span>
        </Link>
      </nav>
    </details>
  );
};
export const Nav2 = ({
    sideIcn,
    page,
    href1 = "#",
    href2 = "#",
    SubIcn1,
    SubIcn2,
    Subtxt1,
    Subtxt2,
  }) => {
    return (
      <details className="group transition-all duration-150">
        <summary className="transition-all duration-500 flex cursor-pointer h-[50px] w-[17rem] items-center rounded-lg px-4 py-2 text-gray-500 hover:text-gray-100 hover:bg-[#317ACC]">
          <Image src={sideIcn} alt="photo" />
          <span className="ml-3 text-base font-k2d">{page}</span>
          <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
            <FaChevronRight />
          </span>
        </summary>
  
        <nav className="my-1.5 ml-0 h-full flex flex-col transition-all duration-500">
          <Link
            href={href1}
            className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <span>{SubIcn1}</span>
            <span className="ml-3 text-base font-k2d">{Subtxt1}</span>
          </Link>
  
          <Link
            href={href2}
            className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <span>{SubIcn2}</span>
            <span className="ml-3 text-base font-k2d">{Subtxt2}</span>
          </Link>
        </nav>
      </details>
    );
  };
Nav.propTypes = {
  sideIcn: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  href1: PropTypes.string,
  href2: PropTypes.string,
  href3: PropTypes.string,
  SubIcn1: PropTypes.node,
  SubIcn2: PropTypes.node,
  SubIcn3: PropTypes.node,
  Subtxt1: PropTypes.string,
  Subtxt2: PropTypes.string,
  Subtxt3: PropTypes.string,
};

export const Dashb = ({ sideIcn, page }) => {
  return (
    <div className="group transition-all duration-150 overflow-hidden w-[17rem]">
      <Link href="/dashboard">
      <div className="transition-all duration-500 flex cursor-pointer items-center rounded-lg h-[50px] px-4 py-2 text-gray-500 hover:text-gray-100 hover:bg-[#317ACC]">
        <Image src={sideIcn} alt="photo" />
        <span className="ml-3 text-base font-k2d">{page}</span>
      </div>
      </Link>
    </div>
  );
};
