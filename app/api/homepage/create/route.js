import { connectToDB } from '../../../../utils/database';
import HomePageData from '../../../../models/HomePageData';

export const POST = async (req) => {
    try {

        const {
            bannerData,
            slogansData,
            sloganDescriptionData,
            homePageCoursesSectionData,
            partnersAndHiringCompaniesSectionData,
            statistics,
            statisticsSectionData,
            servicesSectionData,
            reviewsSectionData,
            faqsSectionData
        } = await req.json();


        await connectToDB();


        const newHomePageData = await HomePageData.create({
            bannerData,
            slogansData,
            sloganDescriptionData,
            homePageCoursesSectionData,
            partnersAndHiringCompaniesSectionData,
            statistics,
            statisticsSectionData,
            servicesSectionData,
            reviewsSectionData,
            faqsSectionData
        });


        return new Response(JSON.stringify({
            message: 'HomePage data submitted successfully',
            data: newHomePageData
        }), { status: 201 });

    } catch (error) {

        console.error(error.message);
        return new Response(JSON.stringify({ error: 'Failed to submit HomePage data' }), { status: 500 });
    }
};
