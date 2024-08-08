import { connectToDB } from '../../../utils/database';
import CurriculumOutline from '../../../models/curriculumOutline';

export const GET = async () => {
    try {
        await connectToDB();
        const curriculumOutlines = await CurriculumOutline.find({});
        return new Response(JSON.stringify({
            message: 'Curriculum outlines fetched successfully',
            curriculumoutline: curriculumOutlines
        }), { status: 200 });
    } catch (error) {
        console.error(error.message);
        return new Response(JSON.stringify({ 
            message: "Failed to fetch curriculum outlines",
            error: error.message 
        }), { status: 500 });
    }
};
