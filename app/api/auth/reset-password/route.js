import { connectToDB } from '../../../../utils/database';
import UserModel from '../../../../models/user';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const POST = async (req) => {
    const { email } = await req.json();
    try {
        await connectToDB();

        const user = await UserModel.findOne({ email });
        if (!user) {
            return new Response(JSON.stringify({ message: 'User not found' }), { status: 404 });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Send token to user via email (implementation depends on your email service)

        return new Response(JSON.stringify({ message: 'Password reset token sent' }), { status: 200 });
    } catch (error) {
        console.log(error.message);
        return new Response(JSON.stringify({ message: 'Failed to send reset token' }), { status: 500 });
    }
};
