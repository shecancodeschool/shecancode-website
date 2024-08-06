import HomeBanner from "../components/sections/home/HomeBanner";
import React from 'react'
import HomeSloganSection from "../components/HomeSloganSection";
import PartnersSection from "../components/sections/home/PartnersSection";
import CoursesSection from "../components/sections/home/CoursesSection";
import Faq from "../components/faq/fap";
import Slogan from "../components/slogan";
import StatisticsSection from "../components/StatisticsSection";
import ServicesSection from "../components/ServicesSection";
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

  const parternerAndHiringCompanies = [
    { src: 'IRO.png', alt: 'IRO logo' },
    { src: 'mastercard-logo.png', alt: 'Mastercard foundation logo' },
    { src: 'kalb.png', alt: 'Klab logo' },
    { src: 'US-Embassy-Kigali.jpeg', alt: 'U.S Embassy Kigali' },
    { src: 'Embassy-of-Israel-2.jpeg', alt: 'Embassy of ISRAEL' },
    { src: 'UN-Women-logo-blue-en.svg', alt: 'UN Women' },
    { src: 'cropped-Muraho_Logo.webp', alt: 'Muraho Tech' },
    { src: 'umurava2.png', alt: 'Umurava logo' },
    // { src: 'Hence-Logo.svg', alt: 'Hence Technologies' },
    { src: 'iremboGov.PNG', alt: 'Irembo logo' },
    { src: 'Progate.png', alt: 'Progate' },
    { src: 'TG.jpeg', alt: 'TG' },
    { src: 'Angle-dimensions.png', alt: 'Angle Dimension' },
  ];

  const statistics = [
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

  const courses = [
    {
      title: "Web Development",
      duration: "3 months",
      price: "$100",
      link: "/courses/web-development"
    },
    {
      title: "Data Science",
      duration: "4 months",
      price: "$150",
      link: "/courses/data-science"
    },
    {
      title: "Mobile Development",
      duration: "5 months",
      price: "$200",
      link: "/courses/mobile-development"
    },
    {
      title: "Game Development",
      duration: "6 months",
      price: "$250",
      link: "/courses/game-development"
    },
    {
      title: "UX/UI Design",
      duration: "7 months",
      price: "$300",
      link: "/courses/ux-ui-design"
    }
  ];

  const servicesSectionData = {
    sectionTitle: "Benefit from Out Experience In Empowering Young Women",
    imageOne: "education-1.jpg",
    imageTwo: "education-2.png",
    items: [
      {
        icon: "/Book--Streamline-Bootstrap.svg",
        text: "Free Computer, Videos and kits"
      },
      {
        icon: "/Book--Streamline-Bootstrap.svg",
        text: "Learn at your own pace"
      },
      {
        icon: "/Book--Streamline-Bootstrap.svg",
        text: "Collaborate with different learners around the globe"
      },
      {
        icon: "/Book--Streamline-Bootstrap.svg",
        text: "Top instructors around the globe"
      }
    ],
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
      <HomeSloganSection sloganDescriptionData={sloganDescriptionData} />
      <CoursesSection courses={courses} />
      <PartnersSection parternerAndHiringCompanies={parternerAndHiringCompanies} />
      <StatisticsSection statistics={statistics} />
      <ServicesSection servicesSectionData={servicesSectionData} />
      <Reviews />
      <Faq />
    </>
  );
}

export default page
