import { connectToDB } from '../../../../utils/database';
import UserModel from '../../../../models/user';
import crypto from 'crypto';
import dotenv from 'dotenv';


dotenv.config();
export const POST = async (req) => {
    const { email } = await req.json();
    try {
        await connectToDB();

        // Find the user by email
        const user = await UserModel.findOne({ email });
        if (!user) {
            return new Response('User not found', { status: 404 });
        }

        // Generate OTP
        const otp = crypto.randomBytes(3).toString('hex');
        const otpExpiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes from now

        // Update user with OTP
        user.otp = otp;
        user.otpExpiresAt = otpExpiresAt;
        await user.save();

       

        return new Response('OTP sent successfully', { status: 200 });
    } catch (error) {
        console.log(error.message);
        return new Response('Failed to send OTP', { status: 500 });
    }
};
