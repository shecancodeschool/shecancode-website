import React from "react";
import icon1 from "../public/sec-fu.svg";
import icon2 from "../public/lean-op.svg";
import icon3 from "../public/skill.svg";
import icon4 from "../public/team-w.svg";
import Image from "next/image";
import crs1 from "../public/crs1.jpg";
import crs2 from "../public/crs2.png";
import crs3 from "../public/crs3.jpg";
import crs4 from "../public/crs4.jpg";
import { ButtonOne } from "./Buttons";
import courseStatus from "./courseStatus"

function getBackgroundColor(title) {
  switch (title) {
    case "Secured Future":
      return "bg-red-300";
    case "Learning Opportunity":
      return "bg-green-300";
    case "Upgrade Skills":
      return "bg-blue-300";
    case "Team work":
      return "bg-yellow-300";
    default:
      return "bg-gray-300";
  }
}

function Card({ title, text1, text2, text3, text4 }) {
  let icon;
  let iconBgColor;
  switch (title) {
    case "Secured Future":
      text1 = "Lorem Ipsum is simply dummy";
      text2 = "text of the printing and ";
      text3 = "typesetting industry. Lorem";
      text4 = "Ipsum has been  the industry";
      icon = icon1;
      iconBgColor = "bg-red-300";
      break;
    case "Learning Opportunity":
      text1 = "Lorem Ipsum is simply dummy";
      text2 = "text of the printing and ";
      text3 = "typesetting industry. Lorem";
      text4 = "Ipsum has been  the industry";
      icon = icon2;
      iconBgColor = "bg-green-300";
      break;
    case "Upgrade Skills":
      text1 = "Lorem Ipsum is simply dummy";
      text2 = "text of the printing and ";
      text3 = "typesetting industry. Lorem";
      text4 = "Ipsum has been  the industry";
      icon = icon3;
      iconBgColor = "bg-blue-300";
      break;
    case "Team work":
      text1 = "Lorem Ipsum is simply dummy";
      text2 = "text of the printing and ";
      text3 = "typesetting industry. Lorem";
      text4 = "Ipsum has been  the industry";
      text4 = "Ipsum has been  the industry";
      icon = icon4;
      iconBgColor = "bg-yellow-300";
      break;
    default:
      title = "";
      text1 = "";
      text2 = "";
      text3 = "";
      text4 = "";
      icon = null;
      iconBgColor = "bg-gray-300";
  }
  return (
    <>
      <div className="flex flex-col justify-evenly h-64">
        <div>
          <div className="{`w-full ${iconBgColor`}">
            {icon && <Image src={icon} alt={title} width={60} height={60} />}
          </div>
        </div>
        <div>
          <h1 className="text-[#317ACC] font-bold text-xl">{title}</h1>
        </div>
        <div>
          <p className="text-[20px] font-thin text-black/50 text-justify md:text-left">
            {text1}
          </p>
          <p className="text-[20px] font-light text-black/50">{text2}</p>
          <p className="text-[20px] font-light text-black/50">{text3}</p>
          <p className="text-[20px] font-light text-black/50">{text4}</p>
        </div>
      </div>
    </>
  );
}

export default Card;

export const CourseCard = ({ title, text1, months, buttonText }) => {
  let icon;
  let iconBgColor;
  switch (title) {
    case "Product Management Basic - Course":
      icon = crs1;
      text1 =
        "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.";
      months = "4 Months";
      buttonText = "Enroll Now";
      iconBgColor = "bg-white";
      break;
    case "BM Data Science Professional Certificate":
      text1 =
        "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.";
      icon = crs2;
      months = "4 Months";
      buttonText = "Enroll Now";
      iconBgColor = "bg-white";
      break;
    case "The Science of Well-Being":
      text1 =
        "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.";
      icon = crs3;
      months = "4 Months";
      buttonText = "Enroll Now";
      iconBgColor = "bg-white";
    case "Python for Everybody Specialization":
      text1 =
        "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.";
      icon = crs4;
      months = "4 Months";
      buttonText = "Enroll Now";
      iconBgColor = "bg-white";
      break;
    default:
      title = "";
      text1 = "";
      icon = null;
      iconBgColor = "";
  }
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col justify-between h-[442px] w-[296px] shadow-md mb-[67px]">
          <div className="w-[334px] h-[218px]">
            <div className="absolute bg-[#FF1F00] flex justify-center items-center rounded-tl-md">
              <p className="text-[12px] text-white px-5 py-3">Open Now</p>
            </div>
            <div className="{`w-full ${iconBgColor`}">
              {icon && <Image src={icon} alt="course-img" className="rounded-t-md"/>}
            </div>
          </div>
          <div className="px-3">
            <h1 className="text-[#317ACC] font-bold text-[20px]">{title}</h1>
          </div>
          <div>
            <p className="text-[11px] font-thin text-black/50 text-justify md:text-left px-3">
              {text1}
            </p>
          </div>
          <div className="flex justify-between items-center pb-5 px-3">
            <p className="text-[#09B451] text-[16.68px] max-w-[102px] max-h-[34px]">{months}</p>
            <button className="text-white bg-[#317ACC] px-5 py-2 rounded">Enroll Now</button>
          </div>
        </div>
        {/* bottom cards */}
        <div className="flex flex-col justify-between h-[442px] w-[296px] shadow-md mb-[67px]">
          <div className="w-[334px] h-[218px]">
            <div className="absolute bg-[#FF1F00] flex justify-center items-center rounded-tl-md">
              <p className="text-[12px] text-white px-5 py-3">Open Now</p>
            </div>
            <div className="{`w-full ${iconBgColor`}">
              {icon && <Image src={icon} alt="course-img" className="rounded-t-md"/>}
            </div>
          </div>
          <div className="px-3">
            <h1 className="text-[#317ACC] font-bold text-[20px]">{title}</h1>
          </div>
          <div>
            <p className="text-[11px] font-thin text-black/50 text-justify md:text-left px-3">
              {text1}
            </p>
          </div>
          <div className="flex justify-between items-center pb-5 px-3">
            <p className="text-[#09B451] text-[16.68px] max-w-[102px] max-h-[34px]">{months}</p>
            <button className="text-white bg-[#317ACC] px-5 py-2 rounded">Enroll Now</button>
          </div>
        </div>
      </div>
    </>
  );
};
