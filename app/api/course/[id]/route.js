import { connectToDB } from "../../../../utils/database";
import courseModel from "../../../../models/course";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  await connectToDB();
  const course = await courseModel.findOne({ _id: id });
  return NextResponse.json({ course }, { status: 200 });
}

export async function PATCH(request, { params }) {
    const { id } = params;
    const updates = await request.json();
  
    await connectToDB();
  
    await courseModel.findByIdAndUpdate(id, updates, { new: true });
  
    return new NextResponse.json(
      { message: "Course updated successfully" },
      { status: 200 }
    );
  }

// export const PATCH = async (req, res) => {
//   try {
//     await connectToDB();
//     const course = await courseModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.send(course);
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
//   }
