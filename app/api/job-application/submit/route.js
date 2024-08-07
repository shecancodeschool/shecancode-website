import { connectToDB } from '../../../utils/database';
import JobApplication from '../../../../models/JobApplication';
import formidable from 'formidable';
import { promisify } from 'util';

export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, since formidable will handle it
    },
};

// Convert form.parse into a function that returns a Promise
const parseForm = async (req) => {
    const form = new formidable.IncomingForm();
    form.uploadDir = './public/uploads'; // Adjust the upload directory as needed
    form.keepExtensions = true;

    // Promisify the form.parse function
    const parseFormAsync = promisify(form.parse).bind(form);

    // Parse the form and return fields and files
    const { fields, files } = await parseFormAsync(req);
    return { fields, files };
};

export const POST = async (req) => {
    try {
        // Parse the form data
        const { fields, files } = await parseForm(req);
        const { firstName, lastName, email, phone, linkedInAccount } = fields;
        const { cv, coverLetter } = files;

        // Connect to the database
        await connectToDB();

        // Create a new job application
        const newApplication = await JobApplication.create({
            firstName,
            lastName,
            email,
            phone,
            cv: cv.filepath, // Use cv.filepath for the file path
            coverLetter: coverLetter.filepath, // Use coverLetter.filepath for the file path
            linkedInAccount,
        });

        // Return success response
        return new Response(JSON.stringify({ message: 'Job application submitted successfully' }), { status: 201 });
    } catch (error) {
        // Log and return error response
        console.error(error.message);
        return new Response(JSON.stringify({ error: 'Failed to submit job application' }), { status: 500 });
    }
};
