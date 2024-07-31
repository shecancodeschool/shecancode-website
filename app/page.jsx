import HomeBanner from "../components/HomeBanner";
import Statics from "../components/Statics";
import React from 'react'
import HomeSloganSection from "../components/HomeSloganSection";
import CourseList from "../components/CourseList";
import EducationWalkSection from "../components/EducationWalk";
import ReviewsCarousel from "../components/review/reviewCaresoul";
import PartnersSection from "../components/Partners";
import Faq from "../components/faq/fap";
import Slogan from "../components/slogan";


const page = () => {
  const stats = [
    {
      icon: "https://shecancode-website-dev.vercel.app/student.svg",
      title: "Learners since 2018",
      number: 700,
      sign: "+"
    },
    {
      icon: "https://shecancode-website-dev.vercel.app/success.svg",
      title: "Employment Rate",
      number: 80,
      sign: "%"
    },
    {
      icon: "https://shecancode-website-dev.vercel.app/experience.svg",
      title: "Graduate Satisfaction Score",
      number: 92,
      sign: "%"
    }
  ];

  const bannerData = {
    title: "Who We Are",
    backgroundImage: "https://shecancode-website-dev.vercel.app/banner_img.png",
    description: "SheCanCode is a leading web development company dedicated to providing exceptional web development and career services to our clients.",
    buttonOne: {
      label: "Explore courses",
      url: "#"
    },
    buttonTwo: {
      label: "Hire Talent",
      url: "#"
    }
  };

  return (
    <>
      <HomeBanner
        backgroundImage={bannerData.backgroundImage}
        title={bannerData.title}
        description={bannerData.description}
        buttonOne={bannerData.buttonOne}
        buttonTwo={bannerData.buttonTwo}
        statistics={stats}
      />
      <Slogan />
      <CourseList />
      <HomeSloganSection />
      <Statics />
      <EducationWalkSection />
      <ReviewsCarousel />
      <PartnersSection />
      <Faq />
    </>
  );
}

export default page
