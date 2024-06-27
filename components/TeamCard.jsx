import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import profile from "@/public/vc.jpeg";

const TeamCard = ({name,title}) => {
  return (
    <>
      <div className="w-full h-full flex flex-col gap-2 bg-white mb-5 border">
        <div className="h-[220px] w-[100%]">
          <Image src={profile} alt="default" className="object-cover w-[100%] h-[100%]"/>
        </div>
        <div className="w-full flex flex-col gap-1 pl-3">
          <h2 className="font-bold">{name}</h2>
          <p className="text-blue-400">{title}</p>
        </div>
        <div className="w-full flex gap-5 text-blue-400 pl-3 pt-3">
          <span className="p-2 rounded-full bg-gray-100 flex justify-center items-center w-[36px] h-[36px] hover:bg-blue-600 hover:text-white">
            <Link href="#"><FiFacebook /></Link>
          </span>
          <span className="p-2 rounded-full bg-gray-100 flex justify-center items-center w-[36px] h-[36px] hover:bg-red-400 hover:text-white">
            <Link href="#"><FiInstagram /></Link>
          </span>
          <span className="p-2 rounded-full bg-gray-100 flex justify-center items-center w-[36px] h-[36px] hover:bg-blue-400 hover:text-white">
            <Link href="#"><FiTwitter /></Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
