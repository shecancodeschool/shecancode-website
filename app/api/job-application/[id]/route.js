import { connectToDB } from '../../../utils/database';
import JobApplication from '../../../../models/JobApplication';

export const PATCH = async (req) => {
    try {
        await connectToDB();
        const { id, firstName, lastName, email, phone, linkedInAccount, cv, coverLetter } = await req.json();

        const updateFields = {
            firstName,
            lastName,
            email,
            phone,
            linkedInAccount,
        };

        if (cv) updateFields.cv = cv;
        if (coverLetter) updateFields.coverLetter = coverLetter;

        const updatedApplication = await JobApplication.findByIdAndUpdate(id, updateFields, { new: true });

        if (!updatedApplication) {
            return new Response(JSON.stringify({ message: 'Job application not found' }), { status: 404 });
        }

        return new Response(JSON.stringify({ message: 'Job application updated successfully', application: updatedApplication }), { status: 200 });
    } catch (error) {
        console.error(error.message);
        return new Response(JSON.stringify({ message: 'Failed to update job application', error: error.message }), { status: 500 });
    }
};


export const DELETE = async (req) => {
    try {
        await connectToDB();
        const { id } = await req.json();

        const deletedApplication = await JobApplication.findByIdAndDelete(id);

        if (!deletedApplication) {
            return new Response(JSON.stringify({ message: 'Job application not found' }), { status: 404 });
        }

        return new Response(JSON.stringify({ message: 'Job application deleted successfully' }), { status: 200 });
    } catch (error) {
        console.error('Error during job application deletion:', error);
        return new Response(JSON.stringify({ message: 'Failed to delete job application', error: error.message }), { status: 500 });
    }
};