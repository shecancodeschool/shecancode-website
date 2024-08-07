export const Links = [
    {
        name: 'Courses',
        submenu: true,
        sublinks: [
            {
                Head: "Coding skills",
                sublink: [
                    {
                        name: 'All courses',
                        link: "/courses"
                    },
                    {
                        name: 'Frontend developement',
                        link: "/courses"
                    },
                    {
                        name: 'Backend developement',
                        link: "/courses"
                    },
                    {
                        name: 'Full-stack development',
                        link: "/courses"
                    },
                    {
                        name: 'Java & Spring Framework',
                        link: "/courses"
                    },
                    {
                        name: 'Mobile app development',
                        link: "/courses"
                    },
                ]
            },
            {
                Head: "Soft skills",
                sublink: [
                    {
                        name: 'Presentation skills',
                        link: "/courses"
                    },
                    {
                        name: 'Interview readiness',
                        link: "/courses"
                    },
                    {
                        name: 'Professional',
                        link: "/courses"
                    }
                ]
            },
        ]
    },
    {
        name: 'About us',
        link: "/",
        submenu: true,
        sublinks: [
            {
                Head: "Learn more about us",
                sublink: [
                    {
                        name: 'Our story',
                        link: "/about-us"
                    },
                    {
                        name: 'What we do',
                        link: "/what-we-do"
                    }
                ]
            },
        ]
    },
    {
        name: 'Blog',
        link: "/blogs",
        submenu: true,
        sublinks: [
            {
                Head: "All blogs",
                sublink: [
                    {
                        name: 'All',
                        link: "/articles"
                    },
                    {
                        name: 'Best practices',
                        link: "/best-practice"
                    },
                ]
            },
            {
                Head: "Events",
                sublink: [
                    {
                        name: 'Cohort 9 Graduation',
                        link: "/blogs?category=Events&post=Cohort-9-graduation"
                    },
                    {
                        name: 'Cohort 10 Graduation',
                        link: "/blogs?category=Events&post=Cohort-9-graduation"
                    }
                ]
            },
            {
                Head: "Alumni Stories",
                sublink: [
                    {
                        name: 'Best backend class performer',
                        link: "/blogs?category=Alumni-stories&post=Best-backend-class-performer"
                    },
                    {
                        name: 'Best mobile class performer',
                        link: "/blogs?category=Alumni-stories&post=Best-mobile-class-performer"
                    }
                ]
            },
        ]
    },
    {
        name: 'Careers',
        link: "/",
        submenu: true,
        sublinks: [
            {
                Head: "Hire our alumni",
                sublink: [
                    {
                        name: 'How to hire our allumni',
                        link: "/blogs?category=Events&post=Cohort-9-graduation"
                    },
                    {
                        name: 'Hire',
                        link: "/contact-us"
                    }
                ]
            },
            {
                Head: "Job vacancies",
                sublink: [
                    {
                        name: 'SheCanCODE Team Specs',
                        link: "/blogs?category=Alumni-stories&post=Best-backend-class-performer"
                    },
                    {
                        name: 'View jobs',
                        link: "/careers"
                    }
                ]
            },
        ]
    }
];