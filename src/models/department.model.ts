import { IDepartment } from "@/types/department.type";
import mongoose, { Schema, Document } from "mongoose";


const DepartmentSchema: Schema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
  },
  { timestamps: true }
);  

export default mongoose.model<IDepartment>("Department", DepartmentSchema);
