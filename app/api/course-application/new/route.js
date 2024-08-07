import { connectToDB } from "../../../../utils/database";
import CourseApply from "../../../../models/courseApply";

export const POST = async (req) => {
  try {
    const data = await req.json();
    console.log("Received data:", data);

    const requiredFields = [
      'firstName', 'lastName', 'email', 'phone', 'age', 
      'currentOccupation', 'educationBackground', 'codingSkills', 
      'techniqualInterviewGrades', 'interviewGrades', 'applicationStage', 
      'codingExperience', 'resume', 'copyOfNationalId', 'githubAccount'
    ];

    for (const field of requiredFields) {
      if (!data[field]) {
        return new Response(`Missing required field: ${field}`, { status: 400 });
      }
    }

    if (typeof data.techniqualInterviewGrades !== 'number') {
      return new Response('Invalid data type for techniqualInterviewGrades', { status: 400 });
    }
    if (typeof data.interviewGrades !== 'number') {
      return new Response('Invalid data type for interviewGrades', { status: 400 });
    }
    if (!Array.isArray(data.codingSkills)) {
      return new Response('Invalid data type for codingSkills', { status: 400 });
    }

    await connectToDB();

    const newCourseApplication = await CourseApply.create(data);

    return new Response(
      JSON.stringify({ message: 'Course application created successfully', course: newCourseApplication }), 
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: error.message || 'Failed to create course application' }), 
      { status: 500 }
    );
  }
};
