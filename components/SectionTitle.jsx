const SectionTitle = ({title, orientation}) => {
    return (
        <h2 className={"text-2xl md:text-4xl font-bold max-w-screen-xl mx-auto text-[#317ACC] text-"+orientation+" pt-10 md:pt-16 px-3 md:px-0"}>
            {title}
        </h2>
    )
}

export default SectionTitle;