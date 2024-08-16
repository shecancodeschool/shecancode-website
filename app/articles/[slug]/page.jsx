// import { NewsDetails } from "../../../components/Banner";
import React from "react";
import Image from "next/image";
import md from "../../../public/blog-md.jpg";
import md1 from "../../../public/blog-post.png";
import Blog from "../../../components/Blog";
import Blog1 from "../../../public/blog1.jpg";
import BlogBanner from "../../../components/blogdetails/BlogBanner";
import blogsAndCategoriesFakes from "../../../utils/blogsAndCategoriesFakes";

const page = ({params}) => {
  const blog = blogsAndCategoriesFakes.blogs.find((blog) => blog.slug === params.slug)
  
  return (
    <>
      <BlogBanner 
        backgroundImage={blog.image}
        title={blog.title}
        description={blog.description}
      />
      <div className=" h-full flex flex-col justify-evenly gap-16 bg-[#FAFAFA]">
        {/* SINGLE BLOG VIEW */}
        <div className="w-full ">
          <div className="max-w-[83rem] p-4 md:p-0 mx-auto flex justify-between w-full mb-[5rem]">
            <div className="max-w-[838px] flex flex-col gap-10 mt-1">
              <div>
                <Image src={md} alt="blog image" />
              </div>
              <div className="flex flex-col gap-10">
                <p className=" text-justify md:text-[24px] text-[#495057]">
                  Seamlessly syndicate cutting-edge architectures rather than
                  collaborative collaboration and idea-sharing. Proactively
                  incubate visionary interfaces whereas premium benefits.
                  Seamlessly negotiate ubiquitous leadership skills rather than
                  parallel ideas. Dramatically visualize superior interfaces for
                  best-of-breed alignments. Synergistically formulate
                  performance based users through customized relationships.
                  Interactively deliver cross-platform ROI via granular systems.
                  Intrinsicly enhance effective initiatives vis-a-vis orthogonal
                  outsourcing. Rapidiously monetize market-driven opportunities
                  with multifunctional users. Collaboratively enhance visionary
                  opportunities through revolutionary schemas. Progressively
                  network just in time customer service without real-time
                  scenarios.
                </p>
                <p className=" text-justify md:text-[24px] text-[#495057]">
                  Synergistically drive e-business leadership with unique
                  synergy. Compellingly seize market positioning ROI and
                  bricks-and-clicks e-markets. Proactively myocardinate timely
                  platforms through distributed ideas. Professionally optimize
                  enabled core competencies for leading-edge sources.
                  Professionally enhance stand-alone leadership with innovative
                  synergy. Rapidiously generate backend experiences vis-a-vis
                  long-term high-impact relationships.
                </p>
              </div>
              <div>
                <p className=" text-justify md:text-[24px] text-[#495057]">
                  Efficiently empower seamless meta-services with impactful
                  opportunities. Distinctively transition virtual outsourcing
                  with focused e-tailers.
                </p>
              </div>
              <div>
                <h2 className=" text-justify md:text-[35px] text-[#317ACC]">
                  “ Monotonectally seize superior mindshare rather than
                  efficient technology. ”
                </h2>
              </div>
              <div>
                <p className=" text-justify md:text-[24px] text-[#495057]">
                  Compellingly enhance seamless resources through competitive
                  content. Continually actualize 24/365 alignments for
                  resource-leveling platforms. Energistically enhance high
                  standards in models and professional expertise. Intrinsicly
                  iterate extensible metrics for prospective opportunities.
                  Continually develop leading-edge experiences through quality
                  e-services.
                </p>
              </div>
              <div>
                <Image src={md1} alt="blog-image" />
              </div>
              <div>
                <p className=" text-justify md:text-[24px] text-[#495057]">
                  Seamlessly syndicate cutting-edge architectures rather than
                  collaborative collaboration and idea-sharing. Proactively
                  incubate visionary interfaces whereas premium benefits.
                  Seamlessly negotiate ubiquitous leadership skills rather than
                  parallel ideas. Dramatically visualize superior interfaces for
                  best-of-breed alignments. Synergistically formulate
                  performance based users through customized relationships.
                  Interactively deliver cross-platform ROI via granular systems.
                  Intrinsicly enhance effective initiatives vis-a-vis orthogonal
                  outsourcing. Rapidiously monetize market-driven opportunities
                  with multifunctional users. Collaboratively enhance visionary
                  opportunities through revolutionary schemas. Progressively
                  network just in time customer service without real-time
                  scenarios.
                </p>
              </div>
              <div>
                <p className=" text-justify md:text-[24px] text-[#495057]">
                  Synergistically drive e-business leadership with unique
                  synergy. Compellingly seize market positioning ROI and
                  bricks-and-clicks e-markets. Proactively myocardinate timely
                  platforms through distributed ideas. Professionally optimize
                  enabled core competencies for leading-edge sources.
                  Professionally enhance stand-alone leadership with innovative
                  synergy. Rapidiously generate backend experiences vis-a-vis
                  long-term high-impact relationships.
                </p>
              </div>
            </div>
            <div className="max-w-[406px] md:block hidden">
              <h2 className="text-[#317ACC] text-[20px] mb-5">Recent posts</h2>
              <div className="w-full h-full flex flex-col gap-10">
                <Blog
                  Blog={Blog1}
                  title="SEVEN YALE SCHOOL OF ART ALUMS NAMED 2022 GUGGENHEIM FELLOWS"
                />
                <Blog
                  Blog={Blog1}
                  title="SEVEN YALE SCHOOL OF ART ALUMS NAMED 2022 GUGGENHEIM FELLOWS"
                />
                <Blog
                  Blog={Blog1}
                  title="SEVEN YALE SCHOOL OF ART ALUMS NAMED 2022 GUGGENHEIM FELLOWS"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
