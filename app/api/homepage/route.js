import { connectToDB } from '../../../utils/database';
import HomePageData from '../../../models/HomePageData';

export const GET = async () => {
    console.log('GET request received, attempting to connect to DB...');
    try {
        
        await connectToDB();
        
    
        const homepageData = await HomePageData.find({});
        
    
        if (!homepageData) {
            return new Response(JSON.stringify({ message: 'No homepage data found' }), { status: 404 });
        }

      
        return new Response(JSON.stringify(homepageData), { status: 200 });
        
    } catch (error) {
     
        console.error('Failed to retrieve homepage data:', error.message);
        return new Response(JSON.stringify({ message: 'Failed to retrieve homepage data', error: error.message }), { status: 500 });
    }
};
