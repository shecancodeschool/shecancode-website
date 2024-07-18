import React from "react";
import { CourseBanner } from "../../components/Banner";
import crs from "../../public/course-img-bn.jpg";
import CoursesFilter from "../../components/CoursesFilter";
import { CourseCard } from "../../components/Card";

const page = () => {
  const CourseProps = [
    { title: "Product Management Basic - Course" },
    { title: "BM Data Science Professional Certificate" },
    { title: "The Science of Well-Being" },
    { title: "Python for Everybody Specialization" },
    { title: "Product Management Basic - Course" },
    { title: "BM Data Science Professional Certificate" },
    { title: "The Science of Well-Being" },
    { title: "Python for Everybody Specialization" },
  ];

  return (
    <>
      <div>
        <CourseBanner propImage={crs} heading="Grow up your skills by online courses with SheCanCode" />
      </div>
      <div className="max-w-[84rem] mx-auto p-4 md:p-0">
        <div className="flex justify-center items-center mt-8  md:mt-[67.04px]">
          <h1 className="text-[#317ACC] font-bold text-[24px] md:text-[48px]">Popular Courses</h1>
        </div>
        <div className="flex justify-center items-center gap-[24px] py-10 flex-wrap md:flex-nowrap mb-[24px]">
          <CoursesFilter text="All Programme" />
          <CoursesFilter text="UI / UX Design" />
          <CoursesFilter text="Progam Design" />
          <CoursesFilter text="Progam Design" className="hidden md:block" />
          <CoursesFilter text="Progam Design" className="hidden md:block" />
          <CoursesFilter text="Progam Design" className="hidden md:block" />
        </div>
        <div className=" w-full  grid lg:grid-cols-4 gap-[20px] md:gap-[41px] justify-center bg-[#FEFEFE] rounded-md">
          {CourseProps.map((props, index) => (
            <CourseCard key={index} {...props} />
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
