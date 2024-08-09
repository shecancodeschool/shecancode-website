import { connectToDB } from '../../../../utils/database';
import User from '../../../../models/user';
import bcrypt from 'bcrypt';
import otpGenerator from 'otp-generator';
import sendEmail from '../../../../models/sendEmail'; 

export const POST = async (req) => {
    const { email, password, firstName, lastName, role } = await req.json();
    try {
        await connectToDB();

       
        const hashedPassword = await bcrypt.hash(password, 10);

       
        const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
        const otpExpiresAt = new Date(Date.now() + 15 * 60 * 1000); 

        const newUser = await User.create({
            email,
            password: hashedPassword,
            firstName,
            lastName,
            role,
            otp,
            otpExpiresAt
        });

        // Send OTP to user's email
        await sendEmail(email, 'Your OTP Code', `Your OTP code is ${otp}`);

        return new Response(JSON.stringify({ message: 'User created successfully! OTP sent to email.', user: newUser }), { status: 201 });
    } catch (error) {
        console.error('Error during user signup:', error);
        return new Response(JSON.stringify({ message: 'Failed to create user', error: error.message }), { status: 500 });
    }
};
