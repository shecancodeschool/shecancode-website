import { connectToDB } from '../../../../utils/database';
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

       
        const token = jwt.sign(
            { id: user._id, email: user.email, role: user.role },
            'Stella12345',
            { expiresIn: '1h' }
        );

        return new Response(JSON.stringify({ message: 'Sign in successful!', token }), { status: 200 });
    } catch (error) {
        console.log(error.message);
        return new Response(JSON.stringify({ message: 'Failed to sign in' }), { status: 500 });
    }
};
