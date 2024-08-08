import { connectToDB } from '../../../utils/database';
import User from '../../../../models/user';

export const POST = async (req) => {
    const { email, otp } = await req.json();
    try {
        await connectToDB();

        console.log('Received email:', email);
        console.log('Received OTP:', otp);

        // Find the user by email and OTP, and ensure the OTP has not expired
        const user = await User.findOne({
            email,
            otp,
            otpExpiresAt: { $gt: new Date() }
        });

        console.log('User found:', user);

        if (!user) {
            console.log('Invalid or expired OTP');
            return new Response(JSON.stringify({ message: 'Invalid or expired OTP' }), { status: 400 });
        }

        // Clear the OTP and expiration date
        user.otp = null;
        user.otpExpiresAt = null;
        await user.save();

        console.log('OTP verified successfully');
        return new Response(JSON.stringify({ message: 'OTP verified successfully' }), { status: 200 });
    } catch (error) {
        console.log('Error verifying OTP:', error.message);
        return new Response(JSON.stringify({ message: 'Failed to verify OTP', error: error.message }), { status: 500 });
    }
};
