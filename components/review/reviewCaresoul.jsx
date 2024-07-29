"use client"
import React, { useState, useRef } from 'react';
import ReviewComp from './reviewComp';


const reviews = [
    {
        name: 'Mohh Jumah',
        title: 'Senior Developer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis imperdiet venenatis.',
        image: '/4.png'
    },
    {
        name: 'John Mark',
        title: 'Data Analyst',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis imperdiet venenatis.',
        image: '/4.png'
    },
    {
        name: 'Doe',
        title: 'Data Analyst',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis imperdiet venenatis.',
        image: '/4.png'
    }
];

const ReviewsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    const scrollLeft = () => {
        document.getElementById("content").scrollLeft -= 200;
    }
    const scrollRight = () => {
        document.getElementById("content").scrollLeft += 200;
    }

    return (
        <div className="py-1 mt-4 md:mt-40 px-4 md:px-0 w-full m-auto">
            <div className='flex max-w-screen-xl m-auto flex-col'>
                <h2 className="text-3xl md:text-4xl w-full font-semibold text-[#317ACC] text-center mb-6">Reviews</h2>
                <div className='w-full mx-auto flex flex-col md:flex-row gap-3 justify-between'>
                    <div className='flex flex-col justify-center'>
                        <h2 className="text-center text-2xl md:text-4xl md:text-left font-bold text-[#0B2B4E] font mb-8">What Our Alumni Say About Us</h2>
                        <div className="flex md:justify-start justify-end md:mt-8">
                            <button className="mr-2 border border-[#0B2B4E] p-2 md:p-5 rounded-full" onClick={scrollLeft}>
                                <svg viewBox="0 0 1024 1024" fill="##0B2B4E" height="1em" width="1em">
                                    <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" />
                                </svg>
                            </button>
                            <button className='mr-2 border border-[#0B2B4E] p-2 md:p-5 rounded-full' onClick={scrollRight}>
                                <svg viewBox="0 0 1024 1024" fill="#0B2B4E" height="1em" width="1em">
                                    <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div id="content" className="md:w-3/4 carousel p-4 rounded-md flex items-center justify-start overflow-x-auto scroll-smooth no-scrollbar" >
                        {reviews.map((review, index) => (
                            <div key={index} className="px-2">
                                <ReviewComp imgSrc={review.image} name={review.name} title={review.title} text={review.description} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewsCarousel;
