import { Schema, model, models } from "mongoose";

const JobSchema = new Schema({
    location: { 
        type: String, 
        required: true,
        enum: {
            values: ["Remote", "On-site", "Hybrid"],
            message: "{VALUE} is not a valid location"
        },
        default: "Remote"
    },
    title: { type: String, required: true },
    type: { 
        type: String, 
        required: true,
        enum: {
            values: ["Full-time", "Part-time", "Internship"],
            message: "{VALUE} is not a valid job type"
        },
        default: "Full-time"
    },
    aboutSheCanCODE: { type: "String", required: true },
    aboutTheRole: { type: String, required: true },
    responsibilities: { 
        type: Array, 
        required: true 
    },
    requirements: { 
        type: Array, 
        required: true 
    },
    benefits: { 
        type: Array, 
        required: false
    },
    additionalInfo: {
        type: String, 
        required: false,
    },
    reportingTo: { type: String, required: true },
    expired: { type: Boolean, default: false, required: true },
    expiresAt: { type: Date, required: true },
    status: {
        type: String,
        required: true,
        enum: {
            values: ["Open", "Closed"],
            message: "{VALUE} is not a valid status"
        },
        default: "Open"
    }
});

const Job = models.Job || model('Job', JobSchema);
export default Job;