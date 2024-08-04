import HomeBanner from "../components/HomeBanner";
import React from 'react'
import HomeSloganSection from "../components/HomeSloganSection";
import CourseList from "../components/CourseList";
import PartnersSection from "../components/Partners";
import Faq from "../components/faq/fap";
import Slogan from "../components/slogan";
import Statistics from "../components/Statistics";
import Services from "../components/Services";
import Reviews from "../components/review/Reviews";


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
    title: "The leading channel to get more women in tech",
    backgroundImage: "https://shecancode-website-dev.vercel.app/banner_img.png",
    description: "Join our community of more than 800 successful women in tech today.",
    buttonOne: {
      label: "Explore courses",
      location: "/courses"
    },
    buttonTwo: {
      label: "Hire Talent",
      location: "/contact-us"
    }
  };

  const sloganDescriptionData = {
    image: {
      source: "blog-sm.jpg",
      alt: "Graduate"
    },
    title: "We're here to help you transform your career",
    description: "Our mission is to empower women in technology by providing them with the tools and resources they need to succeed. Research on Bruce H. Lipton, Ph.D. an Epigeneticist. Bruce Lipton is an American developmental biologist known for promoting the idea that genes and DNA can be manipulated by a person's beliefs. He is also known for his work on epigenetics.",
    button: {
      label: "Enroll now",
      location: "/courses"
    },
  }

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
      {/* <CourseList /> */}
      <HomeSloganSection sloganDescriptionData={sloganDescriptionData}/>
      <Statistics />
      <Services />
      <Reviews />
      <PartnersSection />
      {/* <Faq /> */}
    </>
  );
}

export default page
