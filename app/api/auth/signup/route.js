import dotenv from 'dotenv';
dotenv.config();
import { connectToDB } from '../../../utils/database';
import UserModel from '../../../../models/user';
import bcrypt from 'bcrypt';
import otpGenerator from 'otp-generator';
import nodemailer from 'nodemailer';

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export const POST = async (req) => {
    try {
        const { email, password, firstName, lastName, role } = await req.json();
        
        // Connect to the database
        await connectToDB();

        // Hash the user's password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = await UserModel.create({
            email,
            password: hashedPassword,
            firstName,
            lastName,
            role
        });

        // Generate OTP
        const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });

        // Send OTP to user's email
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: email,
            subject: 'Your OTP Code',
            text: `Your OTP code is ${otp}`,
        });

        // Respond with success message
        return new Response(JSON.stringify({ message: 'User created successfully! OTP sent to email.', user: newUser }), { status: 201 });
    } catch (error) {
        console.error('Error during user signup:', error);
        return new Response(JSON.stringify({ message: 'Failed to create user', error: error.message }), { status: 500 });
    } 
};
