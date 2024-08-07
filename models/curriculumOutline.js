import { Schema, model, models } from "mongoose";

const CurriculumOutlineSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    modules: { type: [String], required: true }
});

const CurriculumOutline = models.CurriculumOutline || model('CurriculumOutline', CurriculumOutlineSchema);
export default CurriculumOutline;
