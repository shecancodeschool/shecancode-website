import { Schema, model, models } from "mongoose";

const courseSchema = new Schema({
  name: { type: String, required: true, unique: true },
  shortDescription: { type: String, required: true },
  brochure: { type: String, required: true },
  deadline: { type: Date, required: true },
  status: {
    type: String,
    enum: {
      values: ["Receiving application", "Comming soon", "Unavailable", "Application closed"],
      message: "{VALUE} is not a valid status"
    },
  },
  subTitle: { type: String },
  detailedDescription: { type: String },
  fAQs: { type: String }, //RELATION
  nameOfCurriculumDeveloper: { type: String, required: true }, //PUBLISHER
  courseDuration: { type: Number },
  price: { type: Number, required: true },
  coursePrerequisites: { type: [String], required: true },
  coverImage: { type: String, required: true },
  otherImages: {type: [String] },
  curriculumOutline: { type: String } ,
  category: { type: String }, //CONFUSING HERE. IS IT BACKEND, FRONTEND, WEB OR MOBILE ?
  courseType: { 
    type: String,
    required: true,
    enum: {
      values: ["Career path", "Webinar", "Short course"],
      message: "{VALUE} is not a valid course type"
    },
   }
  // lesson: { type: [String], required: true },
  // article: { type: [String], required: false },
  // assignment: { type: [String], required: false },
});

const Course = models.Course || model("Course", courseSchema);
export default Course;
