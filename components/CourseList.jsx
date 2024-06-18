"use client";
import React, { useState,useRef } from 'react';
import CourseCard from './CourseCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const courses = [
  {
    title: 'Marketing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue.',
    image: '/image 8.png',
    link: '/courses/marketing'
  },
  {
    title: 'Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue.',
    image: '/image 8.png',
    link: '/courses/design'
  },
  {
    title: 'Programming',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue.',
    image: '/image 8.png',
    link: '/courses/programming'
  },
  {
    title: 'Technology',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue.',
    image: '/image 8.png',
    link: '/courses/technology'
  },
  {
    title: 'Technology',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue.',
    image: '/image 8.png',
    link: '/courses/technology'
  }
];

const CourseList = () => {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);

  const handleSwipe = (direction) => {
    if (direction === 'left') {
      setIndex((prevIndex) => (prevIndex === 0 ? courses.length - 1 : prevIndex - 1));
    } else if (direction === 'right') {
      setIndex((prevIndex) => (prevIndex === courses.length - 1 ? 0 : prevIndex + 1));
    }
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
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

  return (
    <div className="px-6 md:px-[52px] md:py-3 py-1 md:mt-16 mt-8 md:mb-14 mb-7">
      <div className=' max-w-[86rem] mx-auto flex flex-col gap-[39px]'>
      <div className="flex justify-between items-center">
        <h2 className="text-[#317ACC] font-semibold text-2xl md:text-[45px] font">Favourite Courses</h2>
        <a href="/all-courses" className="text-[#317ACC] md:text-[26px] font-k2d">See all</a>
      </div>
      <div className="slider-container">
        <Slider ref={sliderRef} {...settings}>
        {courses.map((course, i) => (
          <div key={i} className='mr-6'>
          <CourseCard
            key={i}
            title={course.title}
            description={course.description}
            image={course.image}
            link={course.link}
          />
          </div>
        ))}
        </Slider>
      </div>
      <div className="flex justify-start gap-[10px]  right-0 left-0">
        <button className="mr-0 bg-[#669CD9] p-5 rounded-full" onClick={() => sliderRef.current.slickPrev()}>
          <svg viewBox="0 0 1024 1024" fill="#ffffff" height="1em" width="1em">
            <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" />
          </svg>
        </button>
        <button className='mr-0 bg-[#669CD9] p-5 rounded-full' onClick={() => sliderRef.current.slickNext()}>
          <svg viewBox="0 0 1024 1024" fill="#ffffff" height="1em" width="1em">
            <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" />
          </svg>
        </button>
      </div>
      </div>
    </div>
  );
};

export default CourseList;
