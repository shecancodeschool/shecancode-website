import { connectToDB } from '../../../../utils/database';
import CurriculumOutline from '../../../../models/curriculumOutline';

export const GET = async (req) => {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title');
    try {
        await connectToDB();
        const curriculumOutline = await CurriculumOutline.findOne({ title });
        if (!curriculumOutline) {
            return new Response(JSON.stringify({ message: "Curriculum outline not found" }), { status: 404 });
        }
        return new Response(JSON.stringify(curriculumOutline), { status: 200 });
    } catch (error) {
        console.error(error.message);
        return new Response(JSON.stringify({ message: "Failed to fetch curriculum outline by title" }), { status: 500 });
    }
};
