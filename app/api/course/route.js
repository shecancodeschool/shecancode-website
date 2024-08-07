import { connectToDB } from "../../../utils/database";
import courseModel from "../../../models/course";

export const POST = async (req) => {
  try {
    const {
      name,
      shortDescription,
      brochure,
      deadline,
      status,
      subTitle,
      detailedDescription,
      fAQs,
      nameOfCurriculumDeveloper,
      courseDuration,
      price,
      coursePrerequisites,
      coverImage,
      otherImages,
      curriculumOutline,
      category,
      courseType,
    } = await req.json();

    await connectToDB();

    const newCourse = await courseModel.create({
      name,
      shortDescription,
      brochure,
      deadline,
      status,
      subTitle,
      detailedDescription,
      fAQs,
      nameOfCurriculumDeveloper,
      courseDuration,
      price,
      coursePrerequisites,
      coverImage,
      otherImages,
      curriculumOutline,
      category,
      courseType,
    });

    return new Response(
      JSON.stringify({
        message: "Course created successfully",
        course: newCourse,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: error.message || "Failed to create course" }),
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    await connectToDB();
    const courses = await courseModel.find({});

    return new Response(JSON.stringify(courses, null, 2), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: error.message || "Failed to fetch courses" }),
      { status: 500 }
    );
  }
};
