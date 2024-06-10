import React from 'react';
import Link from 'next/link';

const CourseCard = ({ title, description, image, link }) => {

  return (
    <div className="group relative overflow-hidden rounded-lg w-full sm:w-[291px] h-[400px] cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform transform group-hover:scale-110 duration-300"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-[#011225] bg-opacity-50 transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="text-white text-lg sm:text-[25px] font-k2d font-semibold">{title}</h3>
      </div>
      <div className="absolute inset-y-0 flex flex-col justify-center p-4 transition-all duration-300 transform translate-y-full group-hover:translate-y-0 bg-[#011225] bg-opacity-30">
        <h3 className="text-white text-lg sm:text-[25px] font-k2d font-medium mb-2">{title}</h3>
        <p className="text-white text-sm sm:text-base font-k2d max-h-48 overflow-hidden">{description}</p>
      </div>
    </div>

  )
}

export default CourseCard
