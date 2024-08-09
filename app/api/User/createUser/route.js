import { connectToDB } from '../../../../utils/database';
import UserModel from '../../../../models/user';

export const POST = async (req) => {
    const { firstName, lastName, email, password, role } = await req.json();
    try {
        await connectToDB();

        // Create a new user
        const newUser = await UserModel.create({
            firstName,
            lastName,
            email,
            password,
            role,
        });

        return new Response('User created successfully', { status: 201 });
    } catch (error) {
        console.log(error.message);
        return new Response('Failed to create user', { status: 500 });
    }
};
