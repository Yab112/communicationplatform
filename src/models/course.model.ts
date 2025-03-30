import { ICourse } from "@/types/department.type";
import mongoose, { Schema, Document } from "mongoose";



const CourseSchema = new Schema<ICourse>(
  {
    name: { type: String, required: true },
    department: { type: Schema.Types.ObjectId, ref: "Department", required: true },
  },
  { timestamps: true }
);

export default mongoose.model<ICourse>("Course", CourseSchema);
