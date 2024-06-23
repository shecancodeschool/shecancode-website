import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import profile from "@/public/profile.jpg";

const TeamCard = ({facebookLink, instaLink, xLink}) => {
  return (
    <>
      <div className="w-full max-w-[15%] h-[240px] flex flex-col gap-3 bg-white">
        <div className="align-middle">
          <Image src={profile} alt="default" className="h-[130px]"/>
        </div>
        <div className="w-full flex flex-col justify-start text-md mt-3">
          <h2>Team Member Name</h2>
          <p>Team Member Position</p>
        </div>
        <div className="w-full flex justify-start gap-5">
          <span className="border p-2 rounded-full bg-gray-300">
            <Link href="#"><FiFacebook /></Link>
          </span>
          <span className="border p-2 rounded-full bg-gray-300">
            <Link href="#"><FiInstagram /></Link>
          </span>
          <span className="border p-2 rounded-full bg-gray-300">
            <Link href="#"><FiTwitter /></Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
