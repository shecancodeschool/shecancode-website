import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ['Super-admin', 'Admin'], default: 'Admin' },
    otp: { type: String, required: false},
    otpExpiresAt: { type: Date ,required: false},
}, { timestamps: true });

const User = models.User || model('User', UserSchema);
export default User;
