import { connectToDB } from '../../../utils/database';
import JobApplication from '../../../../models/JobApplication';

export const PATCH = async (req) => {
    try {
        await connectToDB();
        const { id, status } = await req.json();

        // Update the status of the job application
        const updatedApplication = await JobApplication.findByIdAndUpdate(id, { status }, { new: true });

        if (!updatedApplication) {
            return new Response(JSON.stringify({ message: 'Job application not found' }), { status: 404 });
        }

        return new Response(JSON.stringify({
            message: 'Job application status updated successfully',
            application: updatedApplication
        }), { status: 200 });
    } catch (error) {
        console.error(error.message);
        return new Response(JSON.stringify({ error: 'Failed to update job application status' }), { status: 500 });
    }
};
