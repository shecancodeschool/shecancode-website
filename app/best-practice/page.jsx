import ReusablePageStructure from "../../components/ReusablePageStructure";
import DefaultPageBanner from "../../components/DefaultPageBanner";
import ReusableSection from "../../components/ReusableSection";
import SectionTitle from "../../components/SectionTitle";

const page = () => {
    const bannerData = {
        title: "Who We Are",
        backgroundImage: "https://shecancode-website-dev.vercel.app/banner_img.png",
        description: "SheCanCode is a leading web development company dedicated to providing exceptional web development and career services to our clients.",
        hasButton: {
            text: "Contact Us",
            url: "#"
        }
    };

    const sectionTitle = "More about SheCanCODE";

    return (
        <ReusablePageStructure>
            <DefaultPageBanner
                backgroundImage={bannerData.backgroundImage}
                title={bannerData.title}
                description={bannerData.description}
                hasButton={bannerData.hasButton}
            />
            <SectionTitle orientation={"center"} title={sectionTitle} />
            <ReusableSection>
                <div className="w-full flex">
                    <div className="text-black">
                        <h3>Hello World</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eveniet qui ducimus iste dolor nam distinctio nisi aspernatur, vitae repellat architecto eligendi inventore repudiandae cupiditate incidunt officia optio aut iusto?</p>
                    </div>
                    <div className="text-black">
                        <h3>Hello Bro</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eveniet qui ducimus iste dolor nam distinctio nisi aspernatur, vitae repellat architecto eligendi inventore repudiandae cupiditate incidunt officia optio aut iusto?</p>
                    </div>
                </div>
            </ReusableSection>
        </ReusablePageStructure>
    )
}

export default page