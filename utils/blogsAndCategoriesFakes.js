const blogs = [
    {
        title: "More than 100 students trained in 2024",
        blogLink: "more-than-100-students-trained-in-2024",
        author: "John Doe",
        date: "2024-08-10T16:00:59.526Z",
        categories: ["Career Advancement"],
        description: "SheCanCode has trained more than 100 students in 2024, making it the largest tech training provider in the country",
        content: "SheCanCode has trained more than 100 students in 2024, making it the largest tech training provider in the country.",
        image: "https://media.licdn.com/dms/image/D4D22AQF-fn4luo-qXA/feedshare-shrink_2048_1536/0/1719222469868?e=1726099200&v=beta&t=fNFTczkVEmJ6FAKwnrI6c0-qDAhh4mS4l2uYr94E5rY",
    },
    {
        title: "Top Tips to Master Networking Events",
        blogLink: "more-than-100-students-trained-in-2024",
        author: "Jane Smith",
        date: "2024-08-11",  // Assuming today's date
        description: "SheCanCode has trained more than 100 students in 2024, making it the largest tech training provider in the country",
        categories: ["Networking", "Career Advancement"],
        content: "Learn valuable strategies to make meaningful connections and impress potential employers at networking events.",
        image: "https://media.licdn.com/dms/image/D4D22AQF-fn4luo-qXA/feedshare-shrink_2048_1536/0/1719222469868?e=1726099200&v=beta&t=fNFTczkVEmJ6FAKwnrI6c0-qDAhh4mS4l2uYr94E5rY",
    },
    {
        title: "Essential Time Management Techniques for Busy Professionals",
        blogLink: "more-than-100-students-trained-in-2024",
        author: "Michael Lee",
        date: "2024-08-08",  // Assuming a recent date
        categories: ["Productivity"],
        description: "SheCanCode has trained more than 100 students in 2024, making it the largest tech training provider in the country",
        content: "Discover effective time management methods to boost your efficiency and achieve your goals.",
        image: "https://media.licdn.com/dms/image/D4D22AQF-fn4luo-qXA/feedshare-shrink_2048_1536/0/1719222469868?e=1726099200&v=beta&t=fNFTczkVEmJ6FAKwnrI6c0-qDAhh4mS4l2uYr94E5rY",
    },
    {
        title: "The Web Developer's Guide to Building Responsive Websites",
        blogLink: "more-than-100-students-trained-in-2024",
        author: "Sarah Jones",
        date: "2024-07-25",  // Assuming an older date
        categories: ["Technical Skills"],
        description: "SheCanCode has trained more than 100 students in 2024, making it the largest tech training provider in the country",
        content: "Learn the fundamentals of responsive web design to create websites that adapt seamlessly to different devices.",
        image: "https://media.licdn.com/dms/image/D4D22AQF-fn4luo-qXA/feedshare-shrink_2048_1536/0/1719222469868?e=1726099200&v=beta&t=fNFTczkVEmJ6FAKwnrI6c0-qDAhh4mS4l2uYr94E5rY",
    },
    {
        title: "Building a Strong Personal Brand in the Digital Age",
        blogLink: "more-than-100-students-trained-in-2024",
        author: "Emily Brown",
        date: "2024-08-05",
        categories: ["Personal Growth"],
        description: "SheCanCode has trained more than 100 students in 2024, making it the largest tech training provider in the country",
        content: "Discover how to create a compelling personal brand that sets you apart in the competitive job market.",
        image: "https://media.licdn.com/dms/image/D4D22AQF-fn4luo-qXA/feedshare-shrink_2048_1536/0/1719222469868?e=1726099200&v=beta&t=fNFTczkVEmJ6FAKwnrI6c0-qDAhh4mS4l2uYr94E5rY",
    },
    {
        title: "The Power of Storytelling in Business",
        blogLink: "more-than-100-students-trained-in-2024",
        author: "David Johnson",
        date: "2024-08-02",
        categories: ["Business Development", "Marketing"],
        description: "SheCanCode has trained more than 100 students in 2024, making it the largest tech training provider in the country",
        content: "Learn how to use storytelling to connect with your audience and drive business growth.",
        image: "https://media.licdn.com/dms/image/D4D22AQF-fn4luo-qXA/feedshare-shrink_2048_1536/0/1719222469868?e=1726099200&v=beta&t=fNFTczkVEmJ6FAKwnrI6c0-qDAhh4mS4l2uYr94E5rY",
    },
    {
        title: "Overcoming Imposter Syndrome: Tips for Building Confidence",
        blogLink: "more-than-100-students-trained-in-2024",
        author: "Olivia Carter",
        date: "2024-07-30",
        categories: ["Personal Growth"],
        description: "SheCanCode has trained more than 100 students in 2024, making it the largest tech training provider in the country",
        content: "Learn how to overcome self-doubt and build confidence in your abilities.",
        image: "https://media.licdn.com/dms/image/D4D22AQF-fn4luo-qXA/feedshare-shrink_2048_1536/0/1719222469868?e=1726099200&v=beta&t=fNFTczkVEmJ6FAKwnrI6c0-qDAhh4mS4l2uYr94E5rY",
    },
    {
        title: "The Ultimate Guide to Creating Engaging Social Media Content",
        blogLink: "more-than-100-students-trained-in-2024",
        author: "Ethan Miller",
        date: "2024-07-28",
        categories: ["Marketing", "Social Media"],
        description: "SheCanCode has trained more than 100 students in 2024, making it the largest tech training provider in the country",
        content: "Discover strategies for creating social media content that resonates with your audience and drives engagement.",
        image: "https://media.licdn.com/dms/image/D4D22AQF-fn4luo-qXA/feedshare-shrink_2048_1536/0/1719222469868?e=1726099200&v=beta&t=fNFTczkVEmJ6FAKwnrI6c0-qDAhh4mS4l2uYr94E5rY",
    },
    {
        title: "How to Develop a Winning Career Development Plan",
        blogLink: "more-than-100-students-trained-in-2024",
        author: "Sophia Rodriguez",
        date: "2024-07-25",
        categories: ["Career Advancement"],
        description: "SheCanCode has trained more than 100 students in 2024, making it the largest tech training provider in the country",
        content: "Learn how to create a comprehensive career development plan to achieve your professional goals.",
        image: "https://media.licdn.com/dms/image/D4D22AQF-fn4luo-qXA/feedshare-shrink_2048_1536/0/1719222469868?e=1726099200&v=beta&t=fNFTczkVEmJ6FAKwnrI6c0-qDAhh4mS4l2uYr94E5rY",
    },
    {
        title: "The Importance of Continuous Learning in Today's Workplace",
        blogLink: "more-than-100-students-trained-in-2024",
        author: "William Evans",
        date: "2024-07-22",
        categories: ["Career Readiness", "Productivity"],
        description: "SheCanCode has trained more than 100 students in 2024, making it the largest tech training provider in the country",
        content: "Discover the benefits of continuous learning and how it can help you stay ahead in your career.",
        image: "https://media.licdn.com/dms/image/D4D22AQF-fn4luo-qXA/feedshare-shrink_2048_1536/0/1719222469868?e=1726099200&v=beta&t=fNFTczkVEmJ6FAKwnrI6c0-qDAhh4mS4l2uYr94E5rY",
    },
    {
        title: "Effective Communication Strategies for Leaders",
        blogLink: "more-than-100-students-trained-in-2024",
        author: "Ava Patel",
        date: "2024-07-19",
        categories: ["Leadership", "Communication"],
        description: "SheCanCode has trained more than 100 students in 2024, making it the largest tech training provider in the country",
        content: "Learn how to communicate effectively with your team and build strong relationships.",
        image: "https://media.licdn.com/dms/image/D4D22AQF-fn4luo-qXA/feedshare-shrink_2048_1536/0/1719222469868?e=1726099200&v=beta&t=fNFTczkVEmJ6FAKwnrI6c0-qDAhh4mS4l2uYr94E5rY",
    },
    {
        title: "Boost Your Productivity with These Time-Saving Tips",
        blogLink: "more-than-100-students-trained-in-2024",
        author: "Noah Lee",
        date: "2024-07-16",
        categories: ["Productivity"],
        description: "SheCanCode has trained more than 100 students in 2024, making it the largest tech training provider in the country",
        content: "Discover practical tips to help you increase your productivity and get more done in less time.",
        image: "https://media.licdn.com/dms/image/D4D22AQF-fn4luo-qXA/feedshare-shrink_2048_1536/0/1719222469868?e=1726099200&v=beta&t=fNFTczkVEmJ6FAKwnrI6c0-qDAhh4mS4l2uYr94E5rY",
    },
    {
        title: "The Future of Work: Trends and Opportunities",
        blogLink: "more-than-100-students-trained-in-2024",
        author: "Grace Kim",
        date: "2024-07-13",
        categories: ["Career Readiness"],
        description: "SheCanCode has trained more than 100 students in 2024, making it the largest tech training provider in the country",
        content: "Explore the latest trends in the workplace and how to prepare for the future of work.",
        image: "https://media.licdn.com/dms/image/D4D22AQF-fn4luo-qXA/feedshare-shrink_2048_1536/0/1719222469868?e=1726099200&v=beta&t=fNFTczkVEmJ6FAKwnrI6c0-qDAhh4mS4l2uYr94E5rY",
    },
    {
        title: "Building a Strong Personal Brand in the Digital Age",
        blogLink: "more-than-100-students-trained-in-2024",
        author: "Emily Brown",
        date: "2024-08-05",
        categories: ["Personal Growth"],
        description: "SheCanCode has trained more than 100 students in 2024, making it the largest tech training provider in the country",
        content: "Discover how to create a compelling personal brand that sets you apart in the competitive job market.",
        image: "https://media.licdn.com/dms/image/D4D22AQF-fn4luo-qXA/feedshare-shrink_2048_1536/0/1719222469868?e=1726099200&v=beta&t=fNFTczkVEmJ6FAKwnrI6c0-qDAhh4mS4l2uYr94E5rY",
    },
    {
        title: "The Power of Storytelling in Business",
        blogLink: "more-than-100-students-trained-in-2024",
        author: "David Johnson",
        date: "2024-08-02",
        categories: ["Business Development", "Marketing"],
        description: "SheCanCode has trained more than 100 students in 2024, making it the largest tech training provider in the country",
        content: "Learn how to use storytelling to connect with your audience and drive business growth.",
        image: "https://media.licdn.com/dms/image/D4D22AQF-fn4luo-qXA/feedshare-shrink_2048_1536/0/1719222469868?e=1726099200&v=beta&t=fNFTczkVEmJ6FAKwnrI6c0-qDAhh4mS4l2uYr94E5rY",
    },
    {
        title: "Overcoming Imposter Syndrome: Tips for Building Confidence",
        blogLink: "more-than-100-students-trained-in-2024",
        author: "Olivia Carter",
        date: "2024-07-30",
        categories: ["Personal Growth"],
        description: "SheCanCode has trained more than 100 students in 2024, making it the largest tech training provider in the country",
        content: "Learn how to overcome self-doubt and build confidence in your abilities.",
        image: "https://media.licdn.com/dms/image/D4D22AQF-fn4luo-qXA/feedshare-shrink_2048_1536/0/1719222469868?e=1726099200&v=beta&t=fNFTczkVEmJ6FAKwnrI6c0-qDAhh4mS4l2uYr94E5rY",
    },
    {
        title: "The Ultimate Guide to Creating Engaging Social Media Content",
        blogLink: "more-than-100-students-trained-in-2024",
        author: "Ethan Miller",
        date: "2024-07-28",
        categories: ["Marketing", "Social Media"],
        description: "SheCanCode has trained more than 100 students in 2024, making it the largest tech training provider in the country",
        content: "Discover strategies for creating social media content that resonates with your audience and drives engagement.",
        image: "https://media.licdn.com/dms/image/D4D22AQF-fn4luo-qXA/feedshare-shrink_2048_1536/0/1719222469868?e=1726099200&v=beta&t=fNFTczkVEmJ6FAKwnrI6c0-qDAhh4mS4l2uYr94E5rY",
    },
    {
        title: "How to Develop a Winning Career Development Plan",
        blogLink: "more-than-100-students-trained-in-2024",
        author: "Sophia Rodriguez",
        date: "2024-07-25",
        categories: ["Career Advancement"],
        description: "SheCanCode has trained more than 100 students in 2024, making it the largest tech training provider in the country",
        content: "Learn how to create a comprehensive career development plan to achieve your professional goals.",
        image: "https://media.licdn.com/dms/image/D4D22AQF-fn4luo-qXA/feedshare-shrink_2048_1536/0/1719222469868?e=1726099200&v=beta&t=fNFTczkVEmJ6FAKwnrI6c0-qDAhh4mS4l2uYr94E5rY",
    },
    {
        title: "The Importance of Continuous Learning in Today's Workplace",
        blogLink: "more-than-100-students-trained-in-2024",
        author: "William Evans",
        date: "2024-07-22",
        categories: ["Career Readiness", "Productivity"],
        description: "SheCanCode has trained more than 100 students in 2024, making it the largest tech training provider in the country",
        content: "Discover the benefits of continuous learning and how it can help you stay ahead in your career.",
        image: "https://media.licdn.com/dms/image/D4D22AQF-fn4luo-qXA/feedshare-shrink_2048_1536/0/1719222469868?e=1726099200&v=beta&t=fNFTczkVEmJ6FAKwnrI6c0-qDAhh4mS4l2uYr94E5rY",
    },
    {
        title: "Effective Communication Strategies for Leaders",
        blogLink: "more-than-100-students-trained-in-2024",
        author: "Ava Patel",
        date: "2024-07-19",
        categories: ["Leadership", "Communication"],
        description: "SheCanCode has trained more than 100 students in 2024, making it the largest tech training provider in the country",
        content: "Learn how to communicate effectively with your team and build strong relationships.",
        image: "https://media.licdn.com/dms/image/D4D22AQF-fn4luo-qXA/feedshare-shrink_2048_1536/0/1719222469868?e=1726099200&v=beta&t=fNFTczkVEmJ6FAKwnrI6c0-qDAhh4mS4l2uYr94E5rY",
    },
    {
        title: "Boost Your Productivity with These Time-Saving Tips",
        blogLink: "more-than-100-students-trained-in-2024",
        author: "Noah Lee",
        date: "2024-07-16",
        categories: ["Productivity"],
        description: "SheCanCode has trained more than 100 students in 2024, making it the largest tech training provider in the country",
        content: "Discover practical tips to help you increase your productivity and get more done in less time.",
        image: "https://media.licdn.com/dms/image/D4D22AQF-fn4luo-qXA/feedshare-shrink_2048_1536/0/1719222469868?e=1726099200&v=beta&t=fNFTczkVEmJ6FAKwnrI6c0-qDAhh4mS4l2uYr94E5rY",
    },
    {
        title: "The Future of Work: Trends and Opportunities",
        blogLink: "more-than-100-students-trained-in-2024",
        author: "Grace Kim",
        date: "2024-07-13",
        categories: ["Career Readiness"],
        description: "SheCanCode has trained more than 100 students in 2024, making it the largest tech training provider in the country",
        content: "Explore the latest trends in the workplace and how to prepare for the future of work.",
        image: "https://media.licdn.com/dms/image/D4D22AQF-fn4luo-qXA/feedshare-shrink_2048_1536/0/1719222469868?e=1726099200&v=beta&t=fNFTczkVEmJ6FAKwnrI6c0-qDAhh4mS4l2uYr94E5rY",
    },
];

const blogCategories = [
    "Career Readiness",
    "Business Development",
    "Personal Growth",
    "Technical Skills",
    "Networking",
    "Career Advancement",
    "Productivity",
    "Marketing",
    "Tech Support",
    "Project Management",
    "Other"
];

export default {
    blogs,
    blogCategories
}
