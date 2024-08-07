import { connectToDB } from "../../../utils/database";
import CourseApplication from "../../../models/courseApply";

export const GET = async () => {
  try {
    await connectToDB();
    const coursesApply = await CourseApplication.find({});

    return new Response(JSON.stringify(coursesApply, null, 2), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: error.message || "Failed to fetch courses application" }),
      { status: 500 }
    );
  }
};
