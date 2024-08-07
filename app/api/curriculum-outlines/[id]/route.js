import { connectToDB } from '../../../../utils/database';
import CurriculumOutline from '../../../../models/curriculumOutline';

export const PUT = async (req) => {
    const { id, title, description, modules } = await req.json();
    try {
        await connectToDB();
        const updatedCurriculumOutline = await CurriculumOutline.findByIdAndUpdate(
            id,
            { title, description, modules },
            { new: true }
        );
        return new Response(JSON.stringify(updatedCurriculumOutline), { status: 200 });
    } catch (error) {
        console.error(error.message);
        return new Response(JSON.stringify({ message: "Failed to update curriculum outline" }), { status: 500 });
    }
};

export const DELETE = async (req) => {
    const { id } = await req.json();
    try {
        await connectToDB();
        await CurriculumOutline.findByIdAndDelete(id);
        return new Response(JSON.stringify({ message: "Curriculum outline deleted successfully" }), { status: 200 });
    } catch (error) {
        console.error(error.message);
        return new Response(JSON.stringify({ message: "Failed to delete curriculum outline" }), { status: 500 });
    }
};
