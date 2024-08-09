import { connectToDB } from '../../../utils/database';
import JobApplication from '../../../models/JobApplication';

export const GET = async () => {
    try {
   
        await connectToDB();

        const applications = await JobApplication.find();

        // Return the applications in the response
        return new Response(JSON.stringify(applications), { status: 200 });
    } catch (error) {
        console.log(error.message);
        return new Response(JSON.stringify({ message: 'Failed to retrieve job applications', error: error.message }), { status: 500 });
    }
};
