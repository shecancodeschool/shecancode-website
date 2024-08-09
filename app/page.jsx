"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import HomeBanner from "../components/sections/home/HomeBanner";
import HomeSloganSection from "../components/HomeSloganSection";
import PartnersSection from "../components/sections/home/PartnersSection";
import CoursesSection from "../components/sections/home/CoursesSection";
import FaqSection from "../components/faq/FaqSection";
import SloganSection from "../components/SloganSection";
import StatisticsSection from "../components/StatisticsSection";
import ServicesSection from "../components/ServicesSection";
import ReviewsSection from "../components/review/ReviewsSection";
import coursesFakes from "../utils/coursesFakes";

const page = () => {
  
  const { CoursesData, ...rest } = coursesFakes;
  const [homePageData, setHomePageData] = useState(null);

  useEffect(() => {
    const fetchHomePageData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/homepage/');
        setHomePageData(response.data[0]);
        console.log(response.data[0]);
      } catch (error) {
        console.error('Error fetching homepage data:', error);
      }
    };

    fetchHomePageData();
  }, []);

  const updateHomePageData = async (updatedData) => {
    try {
      await axios.put('http://localhost:3000/api/homepage/', updatedData);
      
      fetchHomePageData();
    } catch (error) {
      console.error('Error updating homepage data:', error);
    }
  };

  if (!homePageData) {
    return <div>Loading...</div>; 
  }

  return (
    <>
      <HomeBanner 
        bannerData={homePageData.bannerData} 
        statistics={homePageData.statistics}
        openCourse={coursesFakes[0]} 
      />
      <SloganSection 
        slogansData={homePageData.slogansData} 
      />
      <HomeSloganSection 
        sloganDescriptionData={homePageData.sloganDescriptionData} 
      />
      <CoursesSection 
        homePageCoursesSectionData={homePageData.homePageCoursesSectionData}
      />
      <PartnersSection 
        partnersAndHiringCompaniesSectionData={homePageData.partnersAndHiringCompaniesSectionData} 
      />
      <StatisticsSection 
        statisticsSectionData={homePageData.statisticsSectionData}
        statistics={homePageData.statistics} 
      />
      <ServicesSection 
        servicesSectionData={homePageData.servicesSectionData} 
      />
      <ReviewsSection 
        reviewsSectionContent={homePageData.reviewsSectionData} 
      />
      <FaqSection 
        faqSectionData={homePageData.faqsSectionData} 
      />
    </>
  );
}

export default page;
