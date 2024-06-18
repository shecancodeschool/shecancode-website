import React from 'react';
import Link from 'next/link';

const CourseCard = ({ title, description, image, link }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg w-full md:w-[220px] lg:w-[250px] xl:w-[300px] h-[432px] cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-[#072340] bg-opacity-20 transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-k2d font-semibold">{title}</h3>
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-4 transition-all duration-500 transform translate-y-full group-hover:translate-y-0">
        <h3 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-k2d font-light mb-2">{title}</h3>
        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-light max-h-48 overflow-hidden">{description}</p>
      </div>
    </div>
  )
}

export default CourseCard;
