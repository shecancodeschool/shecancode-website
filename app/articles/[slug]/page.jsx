import React from "react";
import BlogBanner from "../../../components/blogdetails/BlogBanner";
import blogsAndCategoriesFakes from "../../../utils/blogsAndCategoriesFakes";
import ReusableSection from "../../../components/ReusableSection";
import Image from "next/image";
import Link from "next/link";

const page = ({ params }) => {
  const blog = blogsAndCategoriesFakes.blogs.find((blog) => blog.slug === params.slug);
  const recentBlogs = [];
  for (let index = 0; index < blogsAndCategoriesFakes.blogs.length; index++) {
    if (index <= 5) {
      recentBlogs.push(blogsAndCategoriesFakes.blogs[index]);
    }
  }

  return (
    <>
      <BlogBanner
        backgroundImage={blog.image}
        categories={blog.categories}
        title={blog.title}
        description={blog.description}
        slug={blog.slug}
        author={blog.author}
        publicationDate={blog.publishedOn}
      />
      <ReusableSection>
        <div className="flex justify-between flex-wrap w-full">
          <div className="flex space-x-4 mb-8 flex-col w-full lg:w-[70%] text-black text-base md:text-xl">
            <Image src={blog.image} alt={blog.title} width={900} height={500} />
            <p className="my-4">{blog.description}</p>
            <p>{blog.content}</p>
          </div>
          <div className="flex flex-col items-start w-full md:w-[28%] justify-start gap-8 text-black">
            <h3 className="text-3xl font-extrabold">Recent blogs</h3>
            <div className="flex flex-col">
              {recentBlogs && recentBlogs.map((item, index) => (
                <Link href={`/articles/${item.slug}`} key={index} className="flex gap-4 py-4 hover:bg-slate-200 cursor-pointer">
                  <Image src={item.image} alt={item.title} width={100} height={100} />
                  <h4 className="w-[70%] font-bold">{item.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </ReusableSection>
    </>
  );
};

export default page;
