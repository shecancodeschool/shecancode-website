import { Schema, model, models } from "mongoose";

const JobApplicationSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    cv: { type: String, required: true },  
    coverLetter: { type: String, required: true },  
    linkedInAccount: { type: String, required: false },  
    status: { 
        type: String, 
        enum: ["Pending", "In interview phase", "In technical interview phase", "Rejected"],
        default: "Pending"
    }
}, { timestamps: true });

const JobApplication = models.JobApplication || model('JobApplication', JobApplicationSchema);
export default JobApplication;
