import { connectToDB } from '../../../utils/database';
import UserModel from '../../../../models/user';

export const POST = async (req) => {
    const { email, otp } = await req.json();
    try {
        await connectToDB();

        // Find the user by email and OTP
        const user = await UserModel.findOne({ email, otp, otpExpiresAt: { $gt: new Date() } });
        if (!user) {
            return new Response('Invalid or expired OTP', { status: 400 });
        }

        // Clear the OTP and expiration date
        user.otp = null;
        user.otpExpiresAt = null;
        await user.save();

        return new Response('OTP verified successfully', { status: 200 });
    } catch (error) {
        console.log(error.message);
        return new Response('Failed to verify OTP', { status: 500 });
    }
};
