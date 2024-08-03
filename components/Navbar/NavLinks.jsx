const NavLinks = () => {
    const links = [
        {
            name: 'Men',
            submenu: true,
            sublink: [
                {
                    Head: "Topwear",
                    sublink: [
                        {
                            name: 'Topwear',
                            link: "/"
                        },
                        {
                            name: 'Bottomwear',
                            link: "/"
                        },
                        {
                            name: 'Accessories',
                            link: "/"
                        },
                        {
                            name: 'Fragrances',
                            link: "/"
                        },
                        {
                            name: 'Shoes',
                            link: "/"
                        },
                    ]
                }
            ]
        },
        {
            name: 'Women',
            link: "/"
        },
        {
            name: 'Kids',
            link: "/"
        },
    ];

    return (
        <>
            {
                links.map((link, index) => (
                    <div key={index}>
                        <div className="px-3 text-left md:cursor-pointer">
                            <h1 className="py-7">
                                {link.name}
                            </h1>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default NavLinks