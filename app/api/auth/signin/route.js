import { connectToDB } from '../../../utils/database';
import UserModel from '../../../../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const POST = async (req) => {
    const { email, password } = await req.json();
    try {
        await connectToDB();

        const user = await UserModel.findOne({ email });
        if (!user) {
            return new Response(JSON.stringify({ message: 'Invalid credentials' }), { status: 401 });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return new Response(JSON.stringify({ message: 'Invalid credentials' }), { status: 401 });
        }

        // Replace with the actual JWT secret value for production purposes
        const token = jwt.sign(
            { id: user._id, email: user.email, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        return new Response(JSON.stringify({ message: 'Sign in successful!', token }), { status: 200 });
    } catch (error) {
        console.log(error.message);
        return new Response(JSON.stringify({ message: 'Failed to sign in' }), { status: 500 });
    }
};
