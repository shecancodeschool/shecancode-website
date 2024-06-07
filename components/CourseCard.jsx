import React from 'react';
import Link from 'next/link';

const CourseCard = ({ title, description, image, link }) => {
  
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg w-full md:w-[291px] h-[400px]">
        
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover opacity=100 transition-transform transform group-hover:scale-110 duration-300"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="text-[#FFFFFF] font font-semibold">{title}</h3>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center p-4 transition-all duration-300  transform translate-y-full group-hover:translate-y-0 bg-black-transparent bg-opacity-60">
        <h3 className="text-[#FFFFFF] font font-semibold mb-2">{title}</h3>
        <p className="text-[#FFFFFF] poppins max-h-48 overflow-hidden">{description}</p>
        
        <Link href={link} legacyBehavior>
        <a href={link} className="text-[#317ACC] poppins font-bold  mt-2">Read More...</a>
        </Link>
      </div>
     
    </div>
  )
}

export default CourseCard
