import { Schema, model, models } from "mongoose";

const JobApplicationSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    jobId: { type: String, required: true },
    currentResidence: { type: String, required: true },
    whenAreYouReadyToStart: { 
        type: String, 
        required: true,
        enum: {
            values: ["Immediately", "Within 1 week", "Within 2 weeks", "Within 1 month"],
            message: "Please select a valid option"
        } 
    },
    cv: { type: String, required: true },  
    coverLetter: { type: String, required: true },
    comment: { type: String, required: true },
    howDidYouHearAboutThisJob: {
        type: String,
        required: true,
        enum: {
            values: ["LinkedIn", "Instagram", "From a friend", "Other"],
            message: "Please select a valid option"
        }
    },
    linkedInAccount: { type: String, required: true },  
    status: { 
        type: String, 
        enum: ["Pending", "In interview phase", "In technical interview phase", "Rejected"],
        default: "Pending"
    }
}, { timestamps: true });

const JobApplication = models.JobApplication || model('JobApplication', JobApplicationSchema);
export default JobApplication;
