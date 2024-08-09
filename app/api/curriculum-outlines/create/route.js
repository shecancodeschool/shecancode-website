import { connectToDB } from '../../../../utils/database';
import CurriculumOutlineModel from '../../../../models/curriculumOutline';

export const POST = async (req) => {
    const { title, description, modules } = await req.json();
    try {
        await connectToDB();

        const newCurriculumOutline = await CurriculumOutlineModel.create({
            title,
            description,
            modules,
        });

  
        return new Response(JSON.stringify({
            message: 'Curriculum outline created successfully',
            curriculumOutline: newCurriculumOutline
        }), { status: 201 });
    } catch (error) {
        console.log(error.message);
        return new Response(JSON.stringify({ message: 'Failed to create curriculum outline' }), { status: 500});
    }
};
