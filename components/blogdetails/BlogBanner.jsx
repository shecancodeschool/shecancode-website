import Link from "next/link";
import { FaCircleUser } from "react-icons/fa6";

export default function BlogBanner({ backgroundImage, categories, title, description, slug, author, publicationDate }) {
    const jssStyles = {
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.3s ease-in-out',
        willChange: 'background-image',
    }

    return (
        <div className='flex flex-col items-center justify-center mx-auto w-full px-4 md:px-12 pt-36 pb-16 md:pb-32 overflow-hidden' style={jssStyles}>
            <div className={`flex flex-col items-start space-y-12 justify-center text-white w-full max-w-screen-xl`}>
                <div className="px-4 py-2 bg-white text-black">
                    {categories && categories.map((category, index) => {
                        if (index > 0) {
                            return (
                                <span key={index} className="text-black">, {category}</span>
                            )
                        }

                        return (
                            <span key={index} className="text-black">{category}</span>
                        )
                    })}
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold w-full text-start">{title}</h1>
                <p className="text-lg md:text-xl text-start w-full sm:w-full md:w-2/3">
                    {description}
                </p>
                <div className="flex justify-start gap-4 items-center">
                    <FaCircleUser className="text-4xl"/>
                    <div className="text-base">
                        <p>By {author}</p>
                        <p>Published on {new Date(publicationDate).toDateString()}</p>
                    </div>
                </div>
                <Link href={`/articles/${slug}/#content`} className="bg-[#317ACC] py-3 px-6 text-white rounded-md hover:bg-[#296494]">
                    Read More
                </Link>
            </div>
        </div>
    )
}