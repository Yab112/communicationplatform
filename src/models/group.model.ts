import { IGroup } from "@/types/user.types";
import mongoose, { Schema, Document } from "mongoose";


const GroupSchema: Schema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
    members: [{ type: Schema.Types.ObjectId, ref: "User" }],
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IGroup>("Group", GroupSchema);
