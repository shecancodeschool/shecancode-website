import { Schema, model, models } from 'mongoose';

const courseApplicationSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  gender: { type: String },
  age: { type: Number, required: true },
  currentOccupation: {  
    type: String,
    required: true,
    enum: {
      values: ['Full time employee', 'Part time employee', 'Freelance', 'Self-employed', 'Full-time student', 'Part-time student', 'No occupation'],
      message: '{VALUE} is not a valid occupation'
    },
  },
  educationBackground: { 
    type: String,
    required: true,
    enum: {
      values: ['Advanced level certificate', 'Undergraduate', 'Graduated', 'Attending university year 1', 'Attending university year 2', 'Attending university year 3', 'Attending final year of University'],
      message: '{VALUE} is not a valid education background'
    }
  },
  codingSkills: { type: [String], required: true },
  techniqualInterviewGrades: { type: Number, required: true },
  interviewGrades: { type: Number, required: true },
  applicationStage: { 
    type: String,
    required: true,
    enum: {
      values: ['Pending', 'In online training', 'In technical interview phase', 'In one-on-one interview phase', 'Rejected', 'On pending list'],
      message: '{VALUE} is not a valid application stage'
    },
  },
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true, default: Date.now },
  codingExperience: { 
    type: String,
    required: true,
    enum: {
      values: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
      message: '{VALUE} is not a valid coding experience level'
    },
  },
  universityBeingAttended: { type: String },
  dateOfTechnicalInterview: { type: Date },
  dateOfOneOnOneInterview: { type: Date },
  startingDateOfOnlineTraining: { type: Date },
  endDateOfOnlineTraining: { type: Date },
  resume: { type: String, required: true },
  copyOfNationalId: { type: String, required: true },
  githubAccount: { type: String, required: true },
  linkedInAccount: { type: String }
});

const CourseApply = models.CourseApply || model('CourseApply', courseApplicationSchema);
export default CourseApply;
