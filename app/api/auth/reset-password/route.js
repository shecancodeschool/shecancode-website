import { connectToDB } from '../../../utils/database';
import UserModel from '../../../../models/user';
import bcrypt from 'bcryptjs';

export const POST = async (req) => {
    const { email, otp, newPassword } = await req.json();
    try {
        await connectToDB();

        // Find the user by email and OTP
        const user = await UserModel.findOne({ email, otp, otpExpiresAt: { $gt: new Date() } });
        if (!user) {
            return new Response('Invalid or expired OTP', { status: 400 });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update the user's password and clear the OTP
        user.password = hashedPassword;
        user.otp = null;
        user.otpExpiresAt = null;
        await user.save();

        return new Response('Password reset successfully', { status: 200 });
    } catch (error) {
        console.log(error.message);
        return new Response('Failed to reset password', { status: 500 });
    }
};
