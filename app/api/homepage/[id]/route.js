import { connectToDB } from '../../../../utils/database';
import HomePageData from '../../../../models/HomePageData';

export const PUT = async (req) => {
    try {
        await connectToDB();

        const { id, updates } = await req.json();

        // Find the document by ID
        const homePageData = await HomePageData.findById(id);

        if (!homePageData) {
            return new Response(JSON.stringify({ message: 'HomePage data not found' }), { status: 404 });
        }

        // Apply updates
        Object.keys(updates).forEach(key => {
            if (homePageData[key] !== undefined) {
               
                if (typeof homePageData[key] === 'object' && !Array.isArray(homePageData[key]) && updates[key]) {
                    Object.assign(homePageData[key], updates[key]);
                } else {
                    homePageData[key] = updates[key];
                }
            }
        });

        // Save the updated document
        const updatedHomePageData = await homePageData.save();

        return new Response(JSON.stringify({ message: 'HomePage data updated successfully', data: updatedHomePageData }), { status: 200 });
    } catch (error) {
        console.error(error.message);
        return new Response(JSON.stringify({ message: 'Failed to update HomePage data', error: error.message }), { status: 500 });
    }
};
