import { IStory } from "@/types/user.types";
import mongoose, { Schema, Document } from "mongoose";


const StorySchema: Schema = new Schema(
  {
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    expiresAt: { type: Date, required: true, default: () => new Date(Date.now() + 24 * 60 * 60 * 1000) }, // 24-hour expiration
  },
  { timestamps: true }
);

export default mongoose.model<IStory>("Story", StorySchema);
