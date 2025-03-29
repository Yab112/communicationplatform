import { IResource } from "@/types/department.type";
import mongoose, { Schema, Document } from "mongoose";


const ResourceSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    url: { type: String, required: true },
    uploadedBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IResource>("Resource", ResourceSchema);
