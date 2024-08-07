import { connectToDB } from '../../../utils/database';
import JobApplication from '../../../models/JobApplication';

export const GET = async () => {
    try {
        await connectToDB();

        // Retrieve all job applications
        const applications = await JobApplication.find();

        return new Response(JSON.stringify(applications), { status: 200 });
    } catch (error) {
        console.log(error.message);
        return new Response('Failed to retrieve job applications', { status: 500 });
    }
};
