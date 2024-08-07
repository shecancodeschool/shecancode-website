import { connectToDB } from '../../../utils/database';
import JobApplication from '../../../../models/JobApplication';
import formidable from 'formidable';

export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, since formidable will handle it
    },
};

const parseForm = (req) => {
    const form = new formidable.IncomingForm();
    form.uploadDir = './public/uploads'; // Adjust the upload directory as needed
    form.keepExtensions = true;

    return new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
            if (err) {
                reject(err);
            } else {
                resolve({ fields, files });
            }
        });
    });
};

export const PATCH = async (req) => {
    try {
        const { fields, files } = await parseForm(req);
        const { id, firstName, lastName, email, phone, linkedInAccount } = fields;
        const { cv, coverLetter } = files;

        const updateFields = {
            firstName,
            lastName,
            email,
            phone,
            linkedInAccount,
        };

        if (cv) updateFields.cv = cv.filepath;
        if (coverLetter) updateFields.coverLetter = coverLetter.filepath;

        await connectToDB();

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

        // Delete the job application
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
