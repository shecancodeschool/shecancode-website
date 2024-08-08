import { connectToDB } from '../../../utils/database';
import JobApplication from '../../../../models/JobApplication';

export const POST = async (req) => {
    try {
        
        const { firstName, lastName, email, phone, cv, coverLetter, linkedInAccount } = await req.json();

        // Connect to the database
        await connectToDB();

        // Create a new job application
        const newApplication = await JobApplication.create({
            firstName,
            lastName,
            email,
            phone,
            cv,  
            coverLetter,  
            linkedInAccount, 
        });

        return new Response(JSON.stringify({
            message: 'Job application submitted successfully',
            application: newApplication  
        }), { status: 201 });
    } catch (error) {
        console.error(error.message);
        return new Response(JSON.stringify({ error: 'Failed to submit job application' }), { status: 500 });
    }
};
