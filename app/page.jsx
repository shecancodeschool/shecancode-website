"use client";

import React, { useEffect, useState } from 'react'

import HomeBanner from "../components/sections/home/HomeBanner";
import HomeSloganSection from "../components/HomeSloganSection";
import PartnersSection from "../components/sections/home/PartnersSection";
import CoursesSection from "../components/sections/home/CoursesSection";
import FaqSection from "../components/faq/FaqSection";
import SloganSection from "../components/SloganSection";
import StatisticsSection from "../components/StatisticsSection";
import ServicesSection from "../components/ServicesSection";
import ReviewsSection from "../components/review/ReviewsSection";

import HomePageData from "../utils/homePageFakes";
import coursesFakes from "../utils/coursesFakes";

const page = () => {
  const { CoursesData, ...rest } = coursesFakes;
  // States 
  const [homePageData, setHomePageData] = useState({});
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchHomePageData = async () => {
      // This will be replaced by real api calls in integration 
      const data = await HomePageData;
      return data;
    };

    const fetchCoursesData = async () => {
      // This will be replaced by real api calls in integration 
      const data = await CoursesData;
      return data;
    };

    // Fetch Home page data
    fetchHomePageData()
      .then((response) => {
        setHomePageData(response);
      })
      .catch(error => {
        console.error(error);
      })

    // Fetch courses data
    fetchCoursesData()
      .then((response) => {
        setCourses(response);
      })
      .catch(error => {
        console.error(error);
      })
  }, []);

  return (
    <>
      <HomeBanner 
        bannerData={HomePageData.bannerData} 
        statistics={HomePageData.statistics} 
        openCourse={CoursesData[0]}
      />
      <SloganSection 
        slogansData={HomePageData.slogansData} 
      />
      <HomeSloganSection 
        sloganDescriptionData={HomePageData.sloganDescriptionData} 
      />
      <CoursesSection
        homePageCoursesSectionData={HomePageData.homePageCoursesSectionData}
        courses={CoursesData} 
      />
      <PartnersSection 
        partnersAndHiringCompaniesSectionData={HomePageData.partnersAndHiringCompaniesSectionData} 
      />
      <StatisticsSection 
        statisticsSectionData={HomePageData.statisticsSectionData}
        statistics={HomePageData.statistics} 
      />
      <ServicesSection 
        servicesSectionData={HomePageData.servicesSectionData} 
      />
      <ReviewsSection 
        reviewsSectionContent={HomePageData.reviewsSectionData} 
      />
      <FaqSection 
        faqSectionData={HomePageData.faqsSectionData} 
      />
    </>
  );
}

export default page
