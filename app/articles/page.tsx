import { WwdBanner } from "../../components/Banner";
import Blog from "../../components/Blog";
import React from "react";
import Blog1 from "../../public/blog1.jpg";
import Blog2 from "../../public/blog2.jpg";
import Blog3 from "../../public/blog3.jpg";

const page = () => {
  return (
    <>
      <div className=" h-full flex flex-col justify-evenly gap-16 bg-[#FAFAFA]">
        <div className="w-full">
          <WwdBanner
            heading="Our blogs and News"
            paragraph="Ready to take role where you can make a lasting impact on your team,
            We'd love to have more talented people on board"
          />
        </div>
        <div className="max-w-[86rem] mx-auto flex flex-col justify-center items-center space-y-20 w-full mb-[5rem]">
          <div className="w-full">
            <div>
              <h1 className="text-[50px] w-[91%] font-bold mb-10 text-[#317ACC]">
                Discover Trending News
              </h1>
            </div>
            <div className="flex w-full justify-between">
              <Blog
                Blog={Blog1}
                title="SEVEN YALE SCHOOL OF ART ALUMS NAMED 2022 GUGGENHEIM FELLOWS"
                date="APRIL 9, 2022  "
                description="The Yale School of Art is pleased to announce that alumni  Guggenheim Memorial Foundation.........."
              />
              <Blog
                Blog={Blog2}
                title="SEVEN YALE SCHOOL OF ART ALUMS NAMED 2022 GUGGENHEIM FELLOWS"
                date="APRIL 9, 2022"
                description="The Yale School of Art is pleased to announce that alumni  Guggenheim Memorial Foundation.........."
              />
              <Blog
                Blog={Blog3}
                title="SEVEN YALE SCHOOL OF ART ALUMS NAMED 2022 GUGGENHEIM FELLOWS"
                date="APRIL 9, 2022"
                description="The Yale School of Art is pleased to announce that alumni  Guggenheim Memorial Foundation.........."
              />
            </div>
          </div>
          <div className="w-full">
            <div>
              <h1 className="text-[50px] w-[91%] font-bold mb-10 text-[#317ACC]">
                Newest posts
              </h1>
            </div>
            <div className="flex w-full justify-between">
              <Blog
                Blog={Blog1}
                title="SEVEN YALE SCHOOL OF ART ALUMS NAMED 2022 GUGGENHEIM FELLOWS"
                date="APRIL 9, 2022  "
                description="The Yale School of Art is pleased to announce that alumni  Guggenheim Memorial Foundation.........."
              />
              <Blog
                Blog={Blog2}
                title="SEVEN YALE SCHOOL OF ART ALUMS NAMED 2022 GUGGENHEIM FELLOWS"
                date="APRIL 9, 2022"
                description="The Yale School of Art is pleased to announce that alumni  Guggenheim Memorial Foundation.........."
              />
              <Blog
                Blog={Blog3}
                title="SEVEN YALE SCHOOL OF ART ALUMS NAMED 2022 GUGGENHEIM FELLOWS"
                date="APRIL 9, 2022"
                description="The Yale School of Art is pleased to announce that alumni  Guggenheim Memorial Foundation.........."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
