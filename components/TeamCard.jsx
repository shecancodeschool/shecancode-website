import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import profile from "@/public/profile.jpg";

const TeamCard = ({name,title}) => {
  return (
    <>
      <div className="w-full h-[270px] flex flex-col gap-3 bg-white mb-5">
        <div className="align-middle">
          <Image src={profile} alt="default" className="h-[130px]"/>
        </div>
        <div className="w-full flex flex-col mt-3 gap-1">
          <h2 className="font-bold">{name}</h2>
          <p className="text-blue-400">{title}</p>
        </div>
        <div className="w-full flex gap-5 text-blue-400">
          <span className="p-2 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white">
            <Link href="#"><FiFacebook /></Link>
          </span>
          <span className="p-2 rounded-full bg-gray-100 hover:bg-red-400 hover:text-white">
            <Link href="#"><FiInstagram /></Link>
          </span>
          <span className="p-2 rounded-full bg-gray-100 hover:bg-blue-400 hover:text-white">
            <Link href="#"><FiTwitter /></Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
