import { connectToDB } from "../../../../utils/database";
import JobModel from "../../../../models/job";

export const POST = async (req) => {
    const data =  await req.json();
    try {
        await connectToDB();
        const newJob = await JobModel.create(data);

        return new Response("Job added successfully!", { job: newJob } , { status: 200 });
    } catch (error) { 
        console.log(error.message);
        return new Response("Failed to add job", { status: 500 });
    }
}