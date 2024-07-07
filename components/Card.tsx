import React from 'react'
import icon1 from "../public/sec-fu.svg"
import icon2 from "../public/lean-op.svg"
import icon3 from "../public/skill.svg"
import icon4 from "../public/team-w.svg"
import Image from 'next/image'

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
        title="";
        text1 = "";
        text2 = "";
        text3 = "";
        text4 = "";
        icon = null;
        iconBgColor = "bg-gray-300";
    }
  return (
    <>
     <div className='flex flex-col justify-evenly h-64'>
        <div>
            <div className='{`w-full ${iconBgColor`}'>{icon && <Image src={icon} alt={title} width={60} height={60} />}</div>
        </div>
        <div>
            <h1 className='text-[#317ACC] font-bold text-xl'>{title}</h1>
        </div>
        <div>
            <p className='text-[20px] font-thin text-black/50 text-justify md:text-left'>{text1}</p>
            <p className='text-[20px] font-light text-black/50'>{text2}</p>
            <p className='text-[20px] font-light text-black/50'>{text3}</p>
            <p className='text-[20px] font-light text-black/50'>{text4}</p>
        </div>
     </div>
    </>
  )
}

export default Card