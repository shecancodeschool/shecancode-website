import Blog from "../../components/Blog";
import React from "react";
import Blog1 from "../../public/blog1.jpg";
import Blog2 from "../../public/blog2.jpg";
import Blog3 from "../../public/blog3.jpg";
import DefaultPageBanner from "../../components/DefaultPageBanner";
import PageTitle from "../../components/PageTitle";
import BlogsPageData from "../../utils/blogsPageFakes";
import blogsAndCategoriesFakes from "../../utils/blogsAndCategoriesFakes";
import ReusableSection from "../../components/ReusableSection";
import Link from "next/link";

export default function page() {
  return (
    <>
      <DefaultPageBanner
        backgroundImage={BlogsPageData.backgroundImage}
        title={BlogsPageData.title}
        description={BlogsPageData.titleDescription}
        hasButton={false}
      />
      {/* <PageTitle orientation={"center"} title={BlogsPageData.subTitle} /> */}

      <div className="flex items-center justify-center mx-auto w-full px-4 md:px-12 py-10 md:pb-12 overflow-hidden">
        <div className={`flex flex-col gap-6 items-center justify-center text-white w-full max-w-screen-xl`}>
          <div className="flex w-full pt-10 flex-col gap-2">
            <h3 className="section-sub-title">Categories</h3>
            <div className="flex justify-start items-center flex-wrap gap-2">
              {blogsAndCategoriesFakes.blogCategories &&
                blogsAndCategoriesFakes.blogCategories.map((blogCategory, index) => (
                  <button
                    key={index}
                    className={`bg-sky-500 hover:bg-sky-700 px-[20px] py-[7px] font-bold text-base text-white`}
                  >
                    {blogCategory}
                  </button>
                ))
              }
            </div>
          </div>
        </div>
      </div>

      <ReusableSection background={"#e6f2ff"}>
        <div className="flex flex-wrap gap-2 items-start justify-evenly md:flex-row md:justify-between sm:w-full sm:justify-center sm:items-center">
          {
            blogsAndCategoriesFakes.blogs &&
            blogsAndCategoriesFakes.blogs.map((blog, index) => (
              <BlogPostContainer key={index} blog={blog} />
            ))}
        </div>
      </ReusableSection>
    </>
  );
};


const BlogPostContainer = ({ blog }) => {
  const { image, title, blogLink, description, categories, ...rest } = blog;

  return (
    <Link href={`/article/${blogLink}`} className='flex flex-col sm:w-[48%] md:w-[30%] shadow-md mb-10 rounded-md cursor-pointer bg-white'>
      <div className='h-56 w-full rounded-t-md relative'
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 0.3s ease-in-out',
          willChange: 'background-image',
        }}
      >
      </div>
      <div className='flex flex-col py-6 px-4 text-black justify-between min-h-60 gap-2 flex-wrap'>
        <div className='flex flex-col gap-2'>
          <div>
            {
              categories &&
              categories.map((category, index) => {
                if (index > 0) {
                  return (
                    <p className='text-sm text-orange-400 inline-block' key={index}>, {category}</p>
                  )
                }
                return (
                  <p className='text-sm text-orange-400 inline-block' key={index}>{category}</p>
                )
              })
            }
            <h3 className='text-xl text-sky-700 font-bold'>{title}</h3>
          </div>
          <p className='text-sm'>{description.length > 100 ? description.substring(0, 100) : description}</p>
          <button type="button" className="text-sky-600 hover:text-sky-400 px-4 py-1 mt-2 rounded-full border-sky-600 hover:border-sky-400 border-2 w-fit">Read More</button>
        </div>
      </div>
    </Link>
  )
}