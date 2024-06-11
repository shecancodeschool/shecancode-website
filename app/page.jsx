import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Statics from "@/components/Statics";
import Slogan from "@/components/Slogan";
import React from 'react'
import HomeSloganSection from "@/components/HomeSloganSection";
import CourseList from "@/components/CourseList";
import EducationWalkSection from "@/components/EducationWalk";
import ReviewsCarousel from "@/components/review/reviewCaresoul";


const page = () => {
  return (
    <>
       <Banner/>
      <Slogan/>
      <CourseList />
      <HomeSloganSection />
      <Statics />
      <EducationWalkSection />
      <ReviewsCarousel />
    </>
  );
} 

export default page
