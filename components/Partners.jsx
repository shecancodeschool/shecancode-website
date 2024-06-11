"use client"
import React from 'react';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const PartnersSection = () => {
  const logos = [
    { src: '/IRO.png', alt: 'IRO logo' },
    { src: '/mastercard.png', alt: 'Mastercard foundation logo' },
    { src: '/Klab2.png', alt: 'Klab logo' },
    { src: '/umurava2.png', alt: 'Umurava logo' },
    { src: '/iremboGov.PNG', alt: 'Irembo logo' },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    // slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
  };


  return (
    <div className="px-4 md:px-14 md:py-3 py-1 md:mt-24 mt-8 md:my-16 mb-7 md:text-center">
      <h2 className="md:text-[50px] text-[#0B2B4E] text-3xl font-semibold font md:mt-16">Our Partners</h2>
      <div className=" slider-container pl-10 mt-32 ">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className='w-full h-full' onMouseDown={handleMouseDown}>
              <Image src={logo.src} alt={logo.alt} width={120} height={50} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PartnersSection;
