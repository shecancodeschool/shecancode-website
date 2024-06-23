import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiInstagram, FiTwitter } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import profile from "@/public/vc.jpg";
import jojo from "@/public/jojo.jpg";
import brice from "@/public/brice.jpg";
import stella from "@/public/stella.jpg";
import eric from "@/public/eric.jpg";
import paccy from "@/public/paccy.jpg";
import esther from "@/public/esther.jpg";
import lili from "@/public/lili.jpg";

const TeamCard = ({ name, title }) => {
  let linkedinLink = "";
  let instagramLink = "";
  let twitterLink = "";
  let profileImage = profile;

  switch (name) {
    case "Impuhwe Stella":
      linkedinLink = "https://www.linkedin.com/in/stella";
      instagramLink = "https://www.instagram.com/stella";
      twitterLink = "https://x.com/SMysticah";
      profileImage = stella;   
      break;
    case "Ntirushwa Brice Kelly":
      linkedinLink = "https://www.linkedin.com/in/ntirushwa-brice-kelly/";
      instagramLink = "https://www.instagram.com/ntiru_brice/";
      twitterLink = "https://twitter.com/kellyntiru";
      profileImage = brice;
      break;
    case "Hirwa J eric":
      linkedinLink = "https://www.linkedin.com/in/jean-eric-hirwa/";
      instagramLink = "https://www.instagram.com/stella";
      twitterLink = "https://www.twitter.com/stella";
      profileImage = eric;
      break;
    case "Niyonkuru Esther":
      linkedinLink = "https://linkedin.com/in/niyonkuru-esther-00605827a/";
      instagramLink = "https://www.instagram.com/stella";
      twitterLink = "https://www.twitter.com/stella";
      profileImage = esther;
      break;
    case "Pacifique Ishimwe":
      linkedinLink = "https://www.linkedin.com/in/pacifique-ishimwe-794ab0267/";
      instagramLink = "https://www.instagram.com/stella";
      twitterLink = "https://www.twitter.com/stella";
      profileImage = paccy;
      break;
    case "Uwase Lilian":
      linkedinLink = "https://www.linkedin.com/in/liliane-uwase-28b138182/";
      instagramLink = "https://www.instagram.com/stella";
      twitterLink = "https://www.twitter.com/stella";
      profileImage = lili;
      break;
    case "Josiane Tuyisenge":
      linkedinLink = "https://www.linkedin.com/in/josiane-tuyisenge-490a08311/";
      instagramLink = "https://www.instagram.com/stella";
      twitterLink = "https://www.twitter.com/stella";
      profileImage = jojo;
      break;
    default:
      linkedinLink = "";
      instagramLink = "";
      twitterLink = "";
      profileImage = profile;
  }

  return (
    <div className="w-full h-full flex flex-col gap-0 bg-white mb-5">
      <div className="h-[220px] w-[100%]">
        <Image
          src={profileImage}
          alt="images"
          width={100}
          height={100}
          className="object-cover w-[100%] h-[100%]"
        />
      </div>
      <div className="w-full flex flex-col gap-1 pl-3">
        <h2 className="font-bold">{name}</h2>
        <p className="text-blue-400">{title}</p>
      </div>
      <div className="w-full flex gap-5 text-blue-400 pl-3 pt-3">
        <span className="p-2 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white">
          <Link href={linkedinLink}>
            <SlSocialLinkedin />
          </Link>
        </span>
        <span className="p-2 rounded-full bg-gray-100 hover:bg-red-400 hover:text-white">
          <Link href={instagramLink}>
            <FiInstagram />
          </Link>
        </span>
        <span className="p-2 rounded-full bg-gray-100 hover:bg-blue-400 hover:text-white">
          <Link href={twitterLink}>
            <FiTwitter />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default TeamCard;
