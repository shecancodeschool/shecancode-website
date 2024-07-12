import React from "react";
import { WwdBanner } from "../../components/Banner";
import crs from "../../public/course-img-bn.jpg";
import CoursesFilter from "../../components/CoursesFilter";
import { CourseCard } from "../../components/Card";

const page = () => {
  const CourseProps = [
    { title: "Product Management Basic - Course" },
    { title: "BM Data Science Professional Certificate" },
    { title: "The Science of Well-Being" },
    { title: "Python for Everybody Specialization" },
  ];

  return (
    <>
      <div>
        <WwdBanner propImage={crs} paragraph="Grow up your skills by online courses with SheCanCode" />
      </div>
      <div className="max-w-[84rem] mx-auto p-4 md:p-0">
        <div className="flex justify-center items-center gap-[24px] py-10 flex-wrap md:flex-nowrap">
          <CoursesFilter text="All Programme" />
          <CoursesFilter text="UI / UX Design" />
          <CoursesFilter text="Progam Design" />
          <CoursesFilter text="Progam Design" className="hidden md:block" />
          <CoursesFilter text="Progam Design" className="hidden md:block" />
          <CoursesFilter text="Progam Design" className="hidden md:block" />
        </div>
        <div className=" w-full flex justify-evenly gap-12 flex-wrap md:flex-row">
          {CourseProps.map((props, index) => (
            <CourseCard key={index} {...props} />
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
