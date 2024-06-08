"use client";
import React, { useState } from 'react';
import CourseCard from './CourseCard';

const courses = [
  {
    title: 'Marketing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue.',
    image: 'https://source.unsplash.com/random/800x600?marketing',
    link: '/courses/marketing'
  },
  {
    title: 'Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue.',
    image: 'https://source.unsplash.com/random/800x600?design',
    link: '/courses/design'
  },
  {
    title: 'Programming',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue.',
    image: 'https://source.unsplash.com/random/800x600?programming',
    link: '/courses/programming'
  },
  {
    title: 'Technology',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue.',
    image: 'https://source.unsplash.com/random/800x600?technology',
    link: '/courses/technology'
  }
];

const CourseList = () => {
  const [index, setIndex] = useState(0);

  const handleSwipe = (direction) => {
    if (direction === 'left') {
      setIndex((prevIndex) => (prevIndex === 0 ? courses.length - 1 : prevIndex - 1));
    } else if (direction === 'right') {
      setIndex((prevIndex) => (prevIndex === courses.length - 1 ? 0 : prevIndex + 1));
    }
  };

  return (
    <div className="container mx-auto p-4 relative overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#333333] font-bold text-lg md:text-2xl font">Favourite Courses</h2>
        <a href="/all-courses" className="text-[#333333] hover: font">See all</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {courses.map((course, i) => (
          <CourseCard
            key={i}
            title={course.title}
            description={course.description}
            image={course.image}
            link={course.link}
          />
        ))}
      </div>
      <div className="flex justify-end mt-4 absolute right-0 left-0">
        <button className="mr-2" onClick={() => handleSwipe('left')}>
          <svg viewBox="0 0 1024 1024" fill="#317ACC" height="1em" width="1em">
            <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" />
          </svg>
        </button>
        <button onClick={() => handleSwipe('right')}>
          <svg viewBox="0 0 1024 1024" fill="#317ACC" height="1em" width="1em">
            <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CourseList;
