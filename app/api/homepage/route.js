import { connectToDB } from '../../../utils/database';
import HomePageData from '../../../models/HomePageData';

export const GET = async () => {
    try {
       
        await connectToDB();

        const homepageData = await HomePageData.find();

        return new Response(JSON.stringify(homepageData), { status: 200 });

    } catch (error) {
     
        console.error(error.message);
        return new Response(JSON.stringify({ message: 'Failed to retrieve homepage data', error: error.message }), { status: 500 });
    }
};
