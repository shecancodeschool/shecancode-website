import { connectToDB } from "../../../utils/database";
import JobModel from "../../../models/job";

export const GET = async () => {
    try {
        await connectToDB();
        const jobs = await JobModel.find({});
        
        return new Response(JSON.stringify(jobs),  { status: 200 });
    } catch (error) { 
        console.log(error.message);
        return new Response({ message: "Failed to fetch all jobs", status: 500 });
    }
}