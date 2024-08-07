import { connectToDB } from "../../../../utils/database";
import courseModel from "../../../../models/course";

export const GET = async (req, res) => {
    const courseId = req.params.id;
    try {
        await connectToDB();
        const course = await courseModel.findById({ courseId });
        res.status(200).json({ course });
    } catch (error) { 
        return new Response("Failed to fetch courses"+error.message, { status: 500 });
    }
}

/**
 * Updating a Job by Id. 
 * This controller will be responding to PATCH requests.
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const PATCH = async (req, res) => {
    const courseId = req.params.id;
    try {
        await connectToDB();
        const updatedCourse = await courseModel.findByIdAndUpdate({ courseId }, req.body);
        res.status(200).json({ job: updatedCourse });
    } catch (error) { 
        return res.status(500).json({ error: "Failed to update course: "+error.message });
    }
}