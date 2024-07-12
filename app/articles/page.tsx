import { BlogBanner } from "../../components/Banner";
import Blog from "../../components/Blog";
import React from "react";
import Blog1 from "../../public/blog1.jpg";
import Blog2 from "../../public/blog2.jpg";
import Blog3 from "../../public/blog3.jpg";
import blogbn from "../../public/careersbn.png";

const page = () => {
  return (
    <>
      <div className=" h-full flex flex-col justify-evenly gap-16 bg-[#FAFAFA]">
        <div className="w-full">
          <BlogBanner
            propImage={blogbn}
            heading="Our blogs and News"
            paragraph="Ready to take role where you can make a lasting impact on your team,
            We'd love to have more talented people on board"
          />
        </div>
        <div className="max-w-[86rem] mx-auto flex flex-col justify-center items-center space-y-20 w-full mb-[5rem]">
          <div className="w-full">
            <div>
              <h1 className="text-[40px] md:text-[50px] font-bold mb-10 text-[#317ACC]">
                Discover Trending News
              </h1>
            </div>
            <div className="flex flex-wrap justify-between md:flex-row md:justify-between sm:w-full sm:justify-center sm:items-center">
              <Blog Blog={Blog1} title="SEVEN YALE SCHOOL OF ART ALUMS NAMED 2022 GUGGENHEIM FELLOWS"/>
              <Blog Blog={Blog2} title="SEVEN YALE SCHOOL OF ART ALUMS NAMED 2022 GUGGENHEIM FELLOWS"/>
              <Blog Blog={Blog3} title="SEVEN YALE SCHOOL OF ART ALUMS NAMED 2022 GUGGENHEIM FELLOWS"/>
            </div>
          </div>
          <div className="w-full">
            <div>
              <h1 className="text-[40px] md:text-[50px] font-bold mb-10 text-[#317ACC]">
                Newest posts
              </h1>
            </div>
            <div className="flex flex-wrap justify-between md:flex-row md:justify-between sm:w-full sm:justify-center sm:items-center">
              <Blog Blog={Blog1} title="SEVEN YALE SCHOOL OF ART ALUMS NAMED 2022 GUGGENHEIM FELLOWS"/>
              <Blog Blog={Blog2} title="SEVEN YALE SCHOOL OF ART ALUMS NAMED 2022 GUGGENHEIM FELLOWS"/>
              <Blog Blog={Blog3} title="SEVEN YALE SCHOOL OF ART ALUMS NAMED 2022 GUGGENHEIM FELLOWS"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
