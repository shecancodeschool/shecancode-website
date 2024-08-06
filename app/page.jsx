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
import CoursesData from "../utils/coursesFakes";

const page = () => {
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
        // console.log(response);
      })
      .catch(error => {
        console.error(error);
      })

    // Fetch courses data
    fetchCoursesData()
      .then((response) => {
        setCourses(response);
        // console.log(response);
      })
      .catch(error => {
        console.error(error);
      })
  }, []);

  return (
    <>
      {/* <HomeBanner 
        bannerData={homePageData.bannerData} 
        statistics={homePageData.statistics} 
      />
      <SloganSection 
        slogansData={homePageData.slogansData} 
      />
      <HomeSloganSection 
        sloganDescriptionData={homePageData.sloganDescriptionData} 
      />
      <CoursesSection 
        courses={courses} 
      />
      <PartnersSection 
        parternerAndHiringCompanies={homePageData.parternerAndHiringCompanies} 
      />
      <StatisticsSection 
        statisticsSectionData={homePageData.statisticsSectionData} 
      />
      <ServicesSection 
        servicesSectionData={homePageData.servicesSectionData} 
      />
      <ReviewsSection 
        reviewsSectionContent={homePageData.reviewsSectionContent} 
      />
      <FaqSection 
        faqSectionData={homePageData.faqSectionData} 
      /> */}
    </>
  );
}

export default page
