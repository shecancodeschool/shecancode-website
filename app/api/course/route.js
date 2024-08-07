import { connectToDB } from "../../../utils/database";
import Course from "../../../models/course";

export const GET = async () => {
  try {
    await connectToDB();
    const courses = await Course.find({});

    return new Response(JSON.stringify(courses, null, 2), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: error.message || "Failed to fetch courses" }),
      { status: 500 }
    );
  }
};
