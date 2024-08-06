// import { connectToDB } from "../../../../utils/database";
// import JobModel from "../../../../models/job";

// export const GET = async (req, res) => {
//     const jobId = req.params.id;
//     try {
//         await connectToDB();
//         const job = await JobModel.findById({ jobId });
//         res.status(200).json({ job });
//     } catch (error) { 
//         return new Response("Failed to fetch jobs"+error.message, { status: 500 });
//     }
// }

/**
 * Updating a Job by Id. 
 * This controller will be responding to PATCH requests.
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
// export const PATCH = async (req, res) => {
//     const jobId = req.params.id;
//     try {
//         await connectToDB();
//         const updatedJob = await JobModel.findByIdAndUpdate({ jobId }, req.body);
//         res.status(200).json({ job: updatedJob });
//     } catch (error) { 
//         return res.status(500).json({ error: "Failed to update job: "+error.message });
//     }
// }