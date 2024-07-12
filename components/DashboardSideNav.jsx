'use client'
import React,{useState, useEffect} from "react";
import { TbLogout } from "react-icons/tb";
import userIcn from "../public/ACC.svg"
import jobIcn from "../public/JOB.svg"
import courseIcn from "../public/COURSE.svg"
import blogIcn from "../public/BLOGS.svg"
import reviewIcn from "../public/REVIEWS.svg"
import dashIcn from "../public/dashdash.svg"
import pageIcn from "../public/PAGES.svg"
import { Nav, Dashb, Nav2 } from "./DashNavDetails"
import Logo from "../public/logo/logo1.png";
import Image from "next/image";
import { IoMdAdd } from "react-icons/io";
import {
  IoDocumentsOutline,
  IoSettingsOutline,
  IoChevronForward,
} from "react-icons/io5";
import { AiOutlineFolderView } from "react-icons/ai";
import { MdDashboard, MdPreview, MdEvent } from "react-icons/md";

export const DashboardSideNav = () => {
  // const { isSideNavOpen } = useContext(SideNavContext);

  return (
    <>
       {/* <div className={`fixed bg-[#F8F8F8] z-50 flex flex-col justify-between h-full w-[353px]${isSideNavOpen? 'open' : 'close'}`}> */}
      <div className="fixed bg-[#F8F8F8] z-50 flex flex-col justify-between h-full w-[353px]">
        <div className="h-[15%] flex border-b-2 mb-8 justify-center items-center gap-[21.27px]">
          <Image src={Logo} alt="shecancode" className="w-[71px] h-[41px]" />
          <div>
            <h2 className="text-[24px] text-[#317ACC] font-bold ">
              SheCanCode
            </h2>
            <p className="text-[10px] text-[#878787] ">
              Project Managemant Admin
            </p>
          </div>
        </div>
        <div className="h-[75%] pl-10 flex flex-col">
          <div className="w-full">
            <p className="text-xs text-[#B4BEC8] pl-4">OVERVIEW</p>
          </div>
          <div className="flex flex-col gap-5">
            <Dashb
              sideIcn={dashIcn}
              page="Dashboard"
            />
            <Nav2
              sideIcn={userIcn}
              page="Users"
              href1="/dashboard/add-user"
              href2="/dashboard/list-user"
              SubIcn1={<IoMdAdd />}
              SubIcn2={<IoDocumentsOutline />}
              Subtxt1="Add users"
              Subtxt2="List users"
            />
            <Nav
              sideIcn={jobIcn}
              page="Jobs"
              href1="/dashboard"
              href2="/dashboard"
              href3="/dashboard"
              SubIcn1={<IoMdAdd />}
              SubIcn2={<IoDocumentsOutline />}
              SubIcn3={<MdDashboard />}
              Subtxt1="Add new job"
              Subtxt2="Job list"
              Subtxt3="Job application"
            />
            <Nav
              sideIcn={courseIcn}
              page="Courses"
              href1="/dashboard"
              href2="/dashboard"
              href3="/dashboard"
              SubIcn1={<IoMdAdd />}
              SubIcn2={<AiOutlineFolderView />}
              SubIcn3={<MdEvent />}
              Subtxt1="Add new course"
              Subtxt2="View course"
              Subtxt3="Event"
            />
            <Nav2
              sideIcn={blogIcn}
              page="Blogs"
              href1="/dashboard"
              href2="/dashboard"
              SubIcn1={<IoMdAdd />}
              SubIcn2={<AiOutlineFolderView />}
              Subtxt1="Add blog"
              Subtxt2="View blog"
            />
            <Nav2
              sideIcn={reviewIcn}
              page="Reviews"
              href1="/dashboard"
              href2="/dashboard"
              SubIcn1={<IoMdAdd />}
              SubIcn2={<AiOutlineFolderView />}
              Subtxt1="Add new review"
              Subtxt2="View reviews"
            />
            <Nav2
              sideIcn={pageIcn}
              page="Pages"
              href1="/dashboard"
              href2="/dashboard"
              SubIcn1={<IoSettingsOutline />}
              SubIcn2={<AiOutlineFolderView />}
              Subtxt1="Manage pages"
              Subtxt2="View pages"
            />
          </div>
        </div>
        <div className="text-[#EB001B] w-full h-[10%] pl-12">
          <div className="flex w-[50%] pl-1">
            <TbLogout className="flex self-start w-[20%] text-2xl" />
            <p className="flex justify-center w-[80%] items-center text-base cursor-pointer">
              Log Out
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

