import { connectToDB } from "../../../../utils/database";
import courseApplyModel from "../../../../models/courseApply";

export const GET = async (req, res) => {
    const courseApplicationId = req.params.id;
    try {
        await connectToDB();
        const course = await courseApplyModel.findById({ courseApplicationId });
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
    // Extract the ID from query parameters
    const { id } = req.query;
    // Extract the updates from the request body
    const updates = req.body;

    try {
        await connectToDB();

        // Find and update the course application by ID
        const updatedCourseApplication = await courseApplyModel.findByIdAndUpdate(id, updates, { new: true });

        // Check if the course application was found and updated
        if (!updatedCourseApplication) {
            return res.status(404).json({ message: "Course application not found" });
        }

        // Send the updated course application as a JSON response
        return res.status(200).json({ job: updatedCourseApplication });
    } catch (error) {
        console.error("Failed to update course application:", error.message);
        return res.status(500).json({ error: "Failed to update course application: " + error.message });
    }
};