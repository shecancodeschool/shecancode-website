"use client"
import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const reviews = [
    {
        name: 'Mohh Jumah',
        title: 'Senior Developer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis imperdiet venenatis.',
        imgSrc: 'path/to/image1.jpg' // replace with actual image path
    },
    {
        name: 'John Mark',
        title: 'Data Analyst',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis imperdiet venenatis.',
        imgSrc: 'path/to/image2.jpg' // replace with actual image path
    },
    {
        name: 'Doe',
        title: 'Data Analyst',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis imperdiet venenatis.',
        imgSrc: 'path/to/image2.jpg' // replace with actual image path
    }
    // add more reviews as needed
];

const ReviewsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
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
        <div className="px-4 md:px-14 md:py-3 py-1 md:mt-24 mt-8 md:my-16 mb-7">
            <h2 className="text-[42px] text-center font-bold text-[#0B2B4E] font my-12">Reviews</h2>
            <div className='flex flex-col md:flex-row gap-3 justify-between'>
                <div className='flex flex-col justify-center md:basis-1/3'>
                    <h2 className="text-[36px] md:text-[48px] max-w-xs font-bold text-[#0B2B4E] mb-8">What Our <span className="text-blue-500">Students</span> Say About Us</h2>
                    <div className="flex justify-start md:mt-12">
                        <button className="mr-2 bg-btn1 p-5 rounded-full" onClick={prevReview}>
                            <svg viewBox="0 0 1024 1024" fill="#ffffff" height="1em" width="1em">
                                <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" />
                            </svg>
                        </button>
                        <button className='mr-2 bg-btn1 p-5 rounded-full' onClick={nextReview}>
                            <svg viewBox="0 0 1024 1024" fill="#ffffff" height="1em" width="1em">
                                <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="md:basis-2/3 flex flex-col md:flex-row">
                    {/* <Slider {...settings}> */}
                        {reviews.map((review, index) => (
                            <div key={index} className="p-4">
                                <div className="p-6 bg-[#E2ECF2] rounded-lg shadow-lg w-[300px] h-full">
                                    <div className="flex items-center mb-4">
                                        <img src={review.imgSrc} alt={review.name} className="w-12 h-12 rounded-full mr-4" />
                                        <div>
                                            <h4 className="font-bold">{review.name}</h4>
                                            <p className="text-blue-500">{review.title}</p>
                                        </div>
                                    </div>
                                    <p>{review.text}</p>
                                </div>
                            </div>
                        ))}
                    {/* </Slider> */}
                </div>
            </div>
        </div>
    );
};

export default ReviewsCarousel;
